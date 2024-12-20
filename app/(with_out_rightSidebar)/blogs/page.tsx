"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlogCard } from "@/components/blog-card";

const mockPosts = [
  {
    id: "1",
    title: "Best Web Dev Roadmap 2023 - The Winning Formula to Master Search",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    coverImage: "/placeholder.svg?height=400&width=800",
    author: {
      name: "Richard Bobby",
      avatar: "/placeholder.svg",
    },
    date: "20 Jan 2022",
    slug: "web-dev-roadmap-2023",
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    coverImage: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Lilly Rose",
      avatar: "/placeholder.svg",
    },
    date: "19 Jan 2022",
    slug: "migrating-to-linear",
  },
  {
    id: "3",
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    coverImage: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Lana Steiner",
      avatar: "/placeholder.svg",
    },
    date: "18 Jan 2022",
    slug: "building-api-stack",
  },
];

const tags = ["All", "JavaScript", "React", "Node.js", "Python", "DevOps"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Overflow Blog</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title or tags..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">View all</Button>
            <Button variant="outline">JavaScript</Button>
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by Tag" />
              </SelectTrigger>
              <SelectContent>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt:10">
        <BlogCard post={filteredPosts[0]} featured />
        {filteredPosts.slice(1).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
