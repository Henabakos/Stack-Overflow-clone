import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    slug: string;
  };
  featured?: boolean;
}

export function BlogCard({ post, featured }: BlogCardProps) {
  return (
    <div className={featured ? "col-span-full" : "col-span-1"}>
      <Link
        href={`/blog/${post.slug}`}
        className={`group block overflow-hidden ${
          featured ? "rounded-lg bg-card" : ""
        }`}
      >
        <div
          className={`relative ${featured ? "aspect-[2/1]" : "aspect-video"}`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-95"
          />
        </div>
        <div className={featured ? "p-6" : "mt-4"}>
          <h2 className={`font-bold ${featured ? "text-2xl" : "text-xl"}`}>
            {post.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm text-muted-foreground">
              {post.author.name}
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{post.date}</span>
            {!featured && (
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
