"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

type TabKey = "all" | "skin" | "hair" | "facial" | "fat";

interface BlogTabsGridProps {
  posts: BlogPost[];
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "skin", label: "SKIN" },
  { key: "hair", label: "HAIR" },
  { key: "facial", label: "FACIAL AESTHETICS" },
  { key: "fat", label: "FAT REDUCTION" },
];

export default function BlogTabsGrid({ posts }: BlogTabsGridProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filteredPosts = useMemo(() => {
    if (activeTab === "all") return posts;

    return posts.filter((post) => {
      const category = post.category.toLowerCase();

      if (activeTab === "skin") return category.includes("skin");
      if (activeTab === "hair") return category.includes("hair");
      if (activeTab === "facial") return category.includes("facial");
      if (activeTab === "fat") return category.includes("fat");
      return true;
    });
  }, [activeTab, posts]);

  return (
    <div className="space-y-10">
      <div className="border rounded border-gray-300 bg-white">
        <div className="flex flex-wrap md:flex-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 md:px-10 py-6 text-sm md:text-[13px] font-bold tracking-[0.22em] uppercase border-b md:border-b-0 md:border-r border-gray-300 transition-colors ${
                activeTab === tab.key
                  ? "bg-[#c7d8b7] text-[#23384a]"
                  : "bg-white text-[#4d5f72] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group cursor-pointer"
          >
            <div className="rounded-[2.5rem] overflow-hidden mb-6 shadow-xl shadow-black/5">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={640}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1f4d3a]">
                  {post.category}
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  {post.date}
                </span>{" "}
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  {post.comments}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-[#1f4d3a] group-hover:text-[#1f4d3a]/70 transition-colors leading-tight line-clamp-2 h-14">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-7">
                {post.description}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-medium mt-2 inline-block"
              >
                read more
              </Link>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest">
          No articles found in this category.
        </p>
      )}
    </div>
  );
}
