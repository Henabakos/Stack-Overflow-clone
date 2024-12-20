import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { GlobalSearch } from "./global-search";

export function Header() {
  return (
    <header className="sticky top-0 z-50   px-10 shadow-sm shadow-[#131722] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* <div className="flex items-center gap-2 mx-10">
          <span className="hidden font-bold sm:inline-block">DevOverflow</span>
        </div> */}
        <div className="flex flex-1 items-center space-x-2">
          {/* <div className="flex h-9 flex-1 items-center rounded-md border bg-input px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search anything globally"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div> */}
          <GlobalSearch />
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
