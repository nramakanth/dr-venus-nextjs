import Image from "next/image";
import Link from "next/link";
import ServiceSidebar from "@/components/ServiceSidebar";
import { BlogPost } from "@/data/blogs";

interface BlogDetailTemplateProps {
  post: BlogPost;
}

export default function BlogDetailTemplate({ post }: BlogDetailTemplateProps) {
  return (
    <main className="min-h-screen bg-gray-50/20">
      <div className="h-20 lg:h-25 bg-white"></div>

      <header className="bg-[#f8faf9] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/10 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
              {post.category} • {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-tight mb-6">
            {post.title}
          </h1>
          {/* <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto font-sans leading-relaxed">
            {post.description}
          </p> */}
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[65%] space-y-12">
              <div className="space-y-10">
                {/* Main Visual Layer: Image or Video */}
                {post.videoUrl ? (
                  <div className="rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl border-8 border-white bg-black">
                    <iframe
                      src={post.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl border-8 border-white">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <article className="space-y-8">
                  <div className="prose prose-lg max-w-none prose-primary font-sans text-foreground/80 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </article>
              </div>
            </div>

            <div className="lg:w-[35%]">
              <div className="sticky top-32">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
