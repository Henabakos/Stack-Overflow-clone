"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagCard } from "@/components/tag-card";

const tags = [
  {
    name: "javascript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "python",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "java",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "C#",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "PHP",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "android",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "HTML",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "jquery",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "C++",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "CSS",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "iOS",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
  {
    name: "SQL",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    questionsCount: 23493,
  },
];

export default function TagsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTags = [...filteredTags].sort((a, b) => {
    if (sortBy === "popular") {
      return b.questionsCount - a.questionsCount;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-8">Tags</h1>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by tag name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="alphabetical">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedTags.map((tag) => (
          <TagCard
            key={tag.name}
            name={tag.name}
            description={tag.description}
            questionsCount={tag.questionsCount}
          />
        ))}
      </div>
    </div>
  );
}
