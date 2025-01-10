import { ModeToggle } from "@/components/mode-toggle";
import { GlobalSearch } from "./global-search";

import { Menu } from "lucide-react";

export function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="w-full sticky top-0 z-50 px-10 shadow-sm shadow-[] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-[#131722] mx-4"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Global Search */}
        <div className="flex flex-1 items-center space-x-2">
          <GlobalSearch />
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
