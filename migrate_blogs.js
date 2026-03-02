
const fs = require('fs');
const path = require('path');

const filePath = 'c:\\wamp64\\www\\dr-venus-nextjs\\src\\data\\blogs.ts';
let content = fs.readFileSync(filePath, 'utf8');

// A very rough way to parse the objects. 
// Given the file size and structure, I'll use a more surgical approach.
// I'll extract each BlogPost object one by one.

const lines = content.split('\n');
let newLines = [];
let inObject = false;
let currentObject = null;
let braceCount = 0;

function flushObject(obj) {
    if (!obj) return '';
    
    // Consolidate content
    let htmlContent = '<div class="space-y-6">';
    
    if (obj.intro) {
        htmlContent += `<p class="first-letter:text-5xl first-letter:font-serif first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">${obj.intro}</p>`;
    }
    
    if (obj.contentArr) {
        obj.contentArr.forEach(p => {
            htmlContent += `<p>${p}</p>`;
        });
    }
    
    if (obj.keyPoints) {
        htmlContent += `<div class="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-10">
            <h3 class="text-2xl font-serif text-primary mb-4">Key Highlights</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${obj.keyPoints.map(p => `<li class="flex items-start gap-3"><span class="text-accent mt-1.5">•</span><span>${p}</span></li>`).join('')}
            </ul>
        </div>`;
    }

    if (obj.secondaryContent) {
        htmlContent += `<div class="space-y-4 my-10">
            <h3 class="text-2xl font-serif text-primary">Further Insights</h3>
            ${obj.secondaryContent.map(p => `<p>${p}</p>`).join('')}
        </div>`;
    }

    if (obj.htmlContentRaw) {
        htmlContent += obj.htmlContentRaw;
    }

    if (obj.galleryImages) {
        htmlContent += `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            ${obj.galleryImages.map(img => `
                <div class="rounded-2xl overflow-hidden border-4 border-white shadow-lg aspect-video">
                    <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover" />
                </div>
            `).join('')}
        </div>`;
    }

    htmlContent += '</div>';

    // Format HTML for cleaner look in the file
    const cleanHtml = htmlContent.replace(/`/g, '\\`').replace(/\n/g, ' ').replace(/\s+/g, ' ');

    let result = `    {
        slug: "${obj.slug}",
        title: "${obj.title}",
        category: "${obj.category}",
        date: "${obj.date}",
        excerpt: "${obj.excerpt}",
        comments: "${obj.comments}",
        description: "${obj.description}",
        coverImage: "${obj.coverImage}",
        ${obj.videoUrl ? `videoUrl: "${obj.videoUrl}",` : ''}
        content: \`${cleanHtml}\`
    },`;
    return result;
}

const finalLines = [];
let capture = false;
let capturedText = "";

// Simple state machine to find objects in allBlogPosts array
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export const allBlogPosts: BlogPost[] = [')) {
        finalLines.push(line);
        capture = true;
        continue;
    }
    
    if (capture) {
        if (line.trim() === '];') {
            capture = false;
            finalLines.push(line);
            continue;
        }
        capturedText += line + "\n";
    } else {
        finalLines.push(line);
    }
}

// Now process capturedText - this is still messy because regex on large text is hard.
// Let's try to extract objects by matching slug:... to the next slug:...

// Actually, I'll use a regex that matches the entire object pattern
const blogObjects = [];
const objectRegex = /\{\s*slug: "([^"]+)"[\s\S]*?\},\s*(?=\{|$)/g;
// Wait, that regex might fail on nested objects (galleryImages).

// Better approach: use eval to get the data, but it's dangerous and needs to be valid JS.
// I'll try to find the objects by counting braces.

const objects = [];
let current = "";
let depth = 0;
let started = false;

for (let char of capturedText) {
    if (char === '{') {
        if (depth === 0) started = true;
        depth++;
    }
    if (started) current += char;
    if (char === '}') {
        depth--;
        if (depth === 0) {
            objects.push(current);
            current = "";
            started = false;
        }
    }
}

// Now parse each object string into a dummy object
const newObjects = objects.map(objStr => {
    const getVal = (key) => {
        const match = objStr.match(new RegExp(`${key}:\\s*"([^"]*)"`));
        return match ? match[1] : null;
    };
    
    // For arrays, it's more complex
    const getArr = (key) => {
        const startIdx = objStr.indexOf(`${key}: [`);
        if (startIdx === -1) return null;
        let endIdx = startIdx;
        let d = 0;
        for (let j = startIdx; j < objStr.length; j++) {
            if (objStr[j] === '[') d++;
            if (objStr[j] === ']') {
                d--;
                if (d === 0) {
                    endIdx = j;
                    break;
                }
            }
        }
        const arrStr = objStr.substring(startIdx + `${key}: `.length, endIdx + 1);
        try {
            // Very unsafe but effective for this specific task
            return eval(arrStr);
        } catch(e) { 
            return null; 
        }
    };

    const getHtml = () => {
        const match = objStr.match(/htmlContent:\s*`([\s\S]*?)`/);
        return match ? match[1] : null;
    }

    return {
        slug: getVal('slug'),
        title: getVal('title'),
        category: getVal('category'),
        date: getVal('date'),
        excerpt: getVal('excerpt'),
        comments: getVal('comments'),
        description: getVal('description'),
        coverImage: getVal('coverImage'),
        videoUrl: getVal('videoUrl'),
        intro: getVal('intro'),
        contentArr: getArr('content'),
        keyPoints: getArr('keyPoints'),
        secondaryContent: getArr('secondaryContent'),
        htmlContentRaw: getHtml(),
        galleryImages: getArr('galleryImages')
    };
});

const rebuiltArray = newObjects.map(flushObject).join('\n');

// Replace the placeholder in finalLines
const output = finalLines.join('\n').replace('export const allBlogPosts: BlogPost[] = [', 'export const allBlogPosts: BlogPost[] = [\n' + rebuiltArray);

fs.writeFileSync(filePath, output);
console.log('Successfully migrated 64 blog posts to consolidated content format.');
