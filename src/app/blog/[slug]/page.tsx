import { allBlogPosts } from "@/data/blogs";
import BlogDetailTemplate from "@/components/BlogDetailTemplate";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = allBlogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogDetailTemplate post={post} />;
}
