import { allBlogPosts } from "@/data/blogs";
import BlogDetailTemplate from "@/components/BlogDetailTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allBlogPosts.find((item) => item.slug === slug);

    if (!post) {
        return {
            title: "Blog Post Not Found | Dr. Venus",
            description: "The requested blog post could not be found.",
            alternates: {
                canonical: "/blog",
            },
        };
    }

    return {
        title: `${post.title} | Dr. Venus Blog`,
        description: post.description.trim(),
        keywords: [
            post.title,
            post.category.trim(),
            "skin care blog",
            "hair care blog",
            "Dr Venus blog",
        ],
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = allBlogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogDetailTemplate post={post} />;
}
