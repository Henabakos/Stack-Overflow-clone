"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DialogTitle } from "@radix-ui/react-dialog";

type SearchResult = {
  id: string;
  title: string;
  type: "Question" | "Answer" | "Tag";
  category: string;
};

const mockResults: SearchResult[] = [
  {
    id: "1",
    title: "How to refresh all the data inside the Datatable",
    type: "Question",
    category: "JavaScript",
  },
  {
    id: "2",
    title: "What is the best way to learn React?",
    type: "Question",
    category: "React",
  },
  {
    id: "3",
    title: "How to deploy a Next.js application?",
    type: "Answer",
    category: "Deployment",
  },
  {
    id: "4",
    title: "JavaScript",
    type: "Tag",
    category: "Tag",
  },
];
export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("Question");
  const [query, setQuery] = useState("");

  const filteredResults = mockResults.filter(
    (result) =>
      (selectedType === "All" || result.type === selectedType) &&
      (query === "" || result.title.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start border bg-background text-sm text-muted-foreground sm:pr-12 md:w-96"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">
          Search anything globally...
        </span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <>
          <DialogTitle className="hidden">Global Search</DialogTitle>
        </>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            placeholder="Search anything globally..."
            value={query}
            onValueChange={setQuery}
          />
        </div>
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <span className="text-sm text-muted-foreground">Type:</span>
          {["Question", "Answer", "Users", "Tags"].map((type) => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {filteredResults.length > 0 && (
            <CommandGroup heading="Top Match">
              {filteredResults.map((result) => (
                <CommandItem
                  key={result.id}
                  value={result.title}
                  className="flex items-center gap-2"
                >
                  <div className="flex flex-col">
                    <span>{result.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {result.category}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
