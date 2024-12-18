import Link from "next/link";
import {
  Home,
  Star,
  Briefcase,
  Tags,
  Users,
  HelpCircle,
  BookMarked,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home, current: true },
  { name: "Collections", href: "/collections", icon: Star, current: false },
  { name: "Find Jobs", href: "/jobs", icon: Briefcase, current: false },
  { name: "Tags", href: "/tags", icon: Tags, current: false },
  { name: "Communities", href: "/communities", icon: Users, current: false },
  { name: "Ask a Question", href: "/ask", icon: HelpCircle, current: false },
  {
    name: "Recommended Qs",
    href: "/recommended",
    icon: BookMarked,
    current: false,
  },
];

export function LeftSidebar() {
  return (
    <div className="hidden  lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col ">
      <div className="flex flex-col grow gap-y-2 overflow-y-auto px-6 pb-7 shadow-lg shadow-[#131722]">
        <div className="flex items-center mt-6 justify-center">
          <span className="hidden font-bold sm:inline-block">DevOverflow</span>
        </div>
        <nav className="flex flex-1 flex-col pt-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-10">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({
                          variant: item.current ? "default" : "ghost",
                        }),
                        "w-full justify-start gap-2"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                href="/logout"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start gap-2"
                )}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
