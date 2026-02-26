export interface Treatment {
    slug: string;
    title: string;
    description: string;
    content: string;
    image: string;
    videoUrl: string; // YouTube embed ID or URL
    category: string;
}

export const allTreatments: Treatment[] = [
    // SKIN CARE
    {
        slug: "pimple-treatment",
        title: "Pimple Treatment",
        category: "skin",
        description: "Effective solutions for clear, acne-free skin.",
        content: `
            <div class="space-y-12">
                <section>
                    <h3 class="text-2xl font-serif text-primary mb-4">What are Pimples?</h3>
                    <p>Having pimples on the face is the most distressing and embarrassing experience ever. These are, in fact, quite a pain. There is absolutely nothing great about these tender bumps on the skin. One has to undergo pimple treatment in Hyderabad at early stage. The pimples are not usually restricted to women, but men and teenagers equally struggle with the problem of having them. This skin disorder affects people across the globe, in varying degrees! However, these zits are most likely to occur during puberty. The hormonal imbalance, stress and lifestyle also result in inflammation and redness on the skin. Most often, the pimples affect face, chest, shoulders and back. These breakouts are everyone’s nightmare. When the pimples leave scars on the skin, it not just hinders your natural beauty, but destroys the self-confidence too. You deserve the clear skin. As the technology advanced, thankfully, there is a lot you can do about the pimples. Today, many clinics offer clinically-supported pimples treatment but we have a pool of best doctors for pimple treatment in Hyderabad, giving you the desired effect.</p>
                </section>

                <section>
                    <h3 class="text-2xl font-serif text-primary mb-4">Pimple Treatment</h3>
                    <div class="my-8 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                        <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1200" alt="Pimple Treatment Clinical Care" class="w-full object-cover aspect-[21/9]" />
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-serif text-primary mb-4">Benefits Of Pimple Treatment</h3>
                    <p>The most-effective strategy to do about the pimples is to get the treatment done when they first appear. If not treated at the right time, pimples leave scars on the skin. With the early treatment, you can:</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <li class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <strong class="text-primary block mb-2">1. Get faster results :</strong>
                            <p class="text-sm">Pimple or acne treatment generally takes time to bring the desired effect on you. However, an early treatment effectively controls further breakouts.</p>
                        </li>
                        <li class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <strong class="text-primary block mb-2">2. Get blemish-free skin:</strong>
                            <p class="text-sm">Severe pimple breakouts bring scars on the skin. Treating them early prevents acne scars.</p>
                        </li>
                        <li class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <strong class="text-primary block mb-2">3. Prevent mild acne from spreading :</strong>
                            <p class="text-sm">Early pimple treatment helps you prevent mild acne from progressively spreading across the body.</p>
                        </li>
                        <li class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <strong class="text-primary block mb-2">4. Control your psyche :</strong>
                            <p class="text-sm">The self-esteem of many people is affected by acne, no matter how severe they are. Research shows treating them at an early stage can effectively alleviate these feelings.</p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 class="text-2xl font-serif text-primary mb-4">Pimple Treatment Cost in Hyderabad</h3>
                    <p>Generally cost of the laser pimple treatment depend on area of the treatment i.e. pimples which usually occur on Face, Back, Chest and Shoulders. Just fill the inquiry form we’ll get back to you.</p>
                </section>

                <section>
                    <h3 class="text-2xl font-serif text-primary mb-6">FAQ’S</h3>
                    <div class="space-y-6">
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-primary mb-2">1. What causes acne?</h4>
                            <p class="text-sm leading-relaxed">It’s not just a single factor that causes acne, but a combination of factors contribute to acne breakouts. In women, the hormonal changes before the menstrual cycle is the main cause. The hormones trigger oil glands to produce more sebum. Pimples occur when the hair follicles get blocked with the accumulation of sebum and dead skin cells.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-primary mb-2">2. How can I treat pimples quickly?</h4>
                            <p class="text-sm leading-relaxed">Consult with a dermatologist for the best and fastest way to get rid of your pimples. Based on the severity, you will be given anti-inflammatory medications that can flatten out pimples within 48 hours.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-primary mb-2">3. How to cleanse the face when I have acne?</h4>
                            <p class="text-sm leading-relaxed">Every morning and evening, wash the face with a cleanser exclusively designed for acne-prone skin. Removing makeup residue is crucial. Avoid vigorous scrubbing.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-primary mb-2">4. I wash my face every day. Why do I still get acne?</h4>
                            <p class="text-sm leading-relaxed">Cleansing alone will not prevent acne breakouts. Biological factors causing acne are not under the control of regular face wash. For persistent acne, a dermatologist consultation is necessary.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-primary mb-2">5. Can I wear makeup when I have acne?</h4>
                            <p class="text-sm leading-relaxed">Yes, but use oil-free makeup products. Mineral foundations can help avoid pore-clogging agents. Keeping skin clean and removing makeup properly is essential.</p>
                        </div>
                    </div>
                </section>

                <section class="bg-accent/5 p-8 rounded-[2rem] border border-accent/10">
                    <h3 class="text-2xl font-serif text-primary mb-4">Why Us?</h3>
                    <p class="mb-6"><strong>Pimple Treatment in Hyderabad:</strong> Being one of the best dermatologist-supported clinics in India, Dr. Venus is committed to deliver the best services. Dr. Venus has an integrated approach to provide the best result-oriented acne therapy.</p>
                    
                    <h3 class="text-2xl font-serif text-primary mb-4">Our Locations</h3>
                    <p class="text-sm">Our clinic locations are in <strong>Chandanagar, Kondapur and Toli Chowki</strong> (15 mins from Kukatpally, Gachibowli, Miyapur, Hi-Tech City; 20 mins from Jubilee Hills, Banjara Hills). Book an appointment today!</p>
                </section>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "wart-removal",
        title: "Wart Removal",
        category: "skin",
        description: "Safe and painless removal of unwanted warts.",
        content: "Warts are small, grain-like skin growths that can appear anywhere on the body. Our advanced removal techniques ensure minimal discomfort and no scarring, giving you smooth skin once again.",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb29?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "mole-removal",
        title: "Mole Removal",
        category: "skin",
        description: "Professional mole removal for aesthetic and health reasons.",
        content: "Whether it's for cosmetic reasons or health concerns, our specialists use precise methods to remove moles safely, ensuring the best possible aesthetic outcome.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "acne-scar-removal",
        title: "Acne Scar Removal",
        category: "skin",
        description: "Smooth out your skin and regain your confidence.",
        content: "Acne scars can be a lasting reminder of past breakouts. We offer various treatments like laser therapy and microneedling to significantly reduce the appearance of scars and improve skin texture.",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "laser-hair-removal",
        title: "Laser Hair Removal",
        category: "skin",
        description: "Permanent reduction of unwanted hair for smooth skin.",
        content: "Say goodbye to shaving and waxing. Our state-of-the-art laser technology provides a safe, effective, and long-term solution for unwanted hair on any part of the body.",
        image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "tattoo-removal",
        title: "Tattoo Removal",
        category: "skin",
        description: "Advanced laser technology to fade unwanted tattoos.",
        content: "Regretting a tattoo? Our advanced laser removal treatments can help fade or completely remove unwanted ink with minimal impact on the surrounding skin.",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911baf2ea?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "skin-lightening",
        title: "Skin Lightening",
        category: "skin",
        description: "Brighten your complexion with safe and effective treatments.",
        content: "Our skin lightening treatments focus on reducing uneven skin tone and hyperpigmentation, giving you a brighter and more radiant complexion safely.",
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "pigmentation-treatment",
        title: "Pigmentation Treatment",
        category: "skin",
        description: "Targeted solutions for dark spots and uneven skin tone.",
        content: "Pigmentation can be caused by sun exposure, aging, or hormonal changes. We offer specialized treatments to target dark spots and restore an even, balanced skin tone.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    // HAIR RESTORATION
    {
        slug: "hair-transplant",
        title: "Hair Transplant",
        category: "hair",
        description: "Natural-looking hair restoration with DHT & FUE techniques.",
        content: "Our hair transplant procedures use advanced Direct Hair Transplantation (DHT) and Follicular Unit Extraction (FUE) techniques to ensure the highest graft survival rate and a natural-looking hairline.",
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "beard-hair-transplant",
        title: "Beard Hair Transplant",
        category: "hair",
        description: "Get a fuller, more defined beard with precision grafting.",
        content: "For men looking to achieve a thicker and more even beard, our specialized beard hair transplant uses facial hair grafting techniques to deliver natural results that match your existing facial hair density.",
        image: "https://images.unsplash.com/photo-1599351431247-f132f82f23f9?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "moustache-hair-transplant",
        title: "Moustache Hair Transplant",
        category: "hair",
        description: "Restore or enhance your moustache with precision.",
        content: "Moustache transplants help in restoring density or filling in gaps caused by scarring or genetics. Our precision techniques ensure the transplanted hair grows in the correct direction for a natural look.",
        image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "eyebrow-hair-transplant",
        title: "Eyebrow Hair Transplant",
        category: "hair",
        description: "Perfectly shaped, fuller eyebrows that last a lifetime.",
        content: "Eyebrow transplants are a permanent solution for thin or over-plucked eyebrows. We carefully select and transplant individual hair follicles to mimic the natural shape and density of beautiful brows.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    // FACIAL AESTHETICS
    {
        slug: "anti-aging-treatment",
        title: "Anti-Aging Treatment",
        category: "facial",
        description: "Turn back the clock with advanced anti-aging solutions.",
        content: "Our anti-aging treatments combine medical-grade skincare with advanced technology to reduce fine lines, wrinkles, and age spots, leaving you with skin that looks and feels younger.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "anti-wrinkle-treatment",
        title: "Anti-Wrinkle Treatment",
        category: "facial",
        description: "Smooth out fine lines and wrinkles for a refreshed look.",
        content: "Targeting specific dynamic wrinkles, our treatments help relax the muscles that cause lines, giving you a smoother forehead, crow's feet, and frown lines.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "dermal-fillers",
        title: "Dermal Fillers",
        category: "facial",
        description: "Restore volume and contour to your face.",
        content: "Dermal fillers are used to add volume to sunken cheeks, smooth nasolabial folds, and enhance facial contours, providing an immediate lift and youthful appearance.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "lip-fillers",
        title: "Lip Fillers",
        category: "facial",
        description: "Achieve fuller, perfectly shaped lips.",
        content: "Our lip enhancement procedures focus on providing natural-looking volume and defining the lip borders, tailored to your unique facial structure.",
        image: "https://images.unsplash.com/photo-1516394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "skin-lifting",
        title: "Skin Lifting",
        category: "facial",
        description: "Non-surgical face lift for a contoured appearance.",
        content: "Using the latest thread lift or HIFU technology, we provide non-surgical options to lift and tighten the skin, offering a more defined jawline and youthful neckline.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "facial-rejuvenation",
        title: "Facial Rejuvenation",
        category: "facial",
        description: "Complete facial renewal for a glowing complexion.",
        content: "Our facial rejuvenation treatments combine peels, lasers, and professional skincare to address multiple concerns simultaneously, resulting in a healthy, radiant glow.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    // BODY CONTOURING
    {
        slug: "weight-loss-treatment",
        title: "Weight Loss Treatment",
        category: "body",
        description: "Medical-guided weight loss programs for lasting results.",
        content: "Our weight loss programs are medically supervised to ensure safety and effectiveness, combining diet plans, lifestyle advice, and clinical treatments to help you reach your goals.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "liposuction",
        title: "Liposuction",
        category: "body",
        description: "Reshape and contour your body with precision surgery.",
        content: "Liposuction helps remove stubborn fat deposits that don't respond to diet and exercise. Our surgeons use advanced techniques to sculpt the body with minimal downtime.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        slug: "body-sculpting",
        title: "Body Sculpting",
        category: "body",
        description: "Define your physique with non-invasive sculpting.",
        content: "Body sculpting treatments like CoolSculpting or EMSculpt help in defining muscles and reducing localized fat, giving you the physique you've always wanted without surgery.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export const skinTreatments = allTreatments.filter(t => t.category === "skin");
export const hairTreatments = allTreatments.filter(t => t.category === "hair");
export const facialTreatments = allTreatments.filter(t => t.category === "facial");
export const bodyTreatments = allTreatments.filter(t => t.category === "body");
