import Link from "next/link";

import { Badge } from "./ui/badge";

const hotQuestions = [
  {
    id: 1,
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    id: 2,
    title: "How can an airconditioning machine exist?",
  },
  {
    id: 3,
    title: "Interrogated every time crossing UK Border as citizen",
  },
  {
    id: 4,
    title: "Low digit addition generator",
  },
];

const popularTags = [
  { name: "JAVASCRIPT", count: "20152+" },
  { name: "TYPESCRIPT", count: "18493+" },
  { name: "THREEJS", count: "18493+" },
  { name: "TAILWIND CSS", count: "18493+" },
  { name: "REACT.JS", count: "18493+" },
];

export function RightSidebar() {
  return (
    <div className="hidden flex-none w-64  h-screen lg:block">
      <div className="fixed space-y-6 h-full shadow-lg shadow-[#131722] px-10">
        <section>
          <h2 className="text-lg font-semibold my-5">Hot Network</h2>
          <div className="space-y-4">
            {hotQuestions.map((question) => (
              <Link
                key={question.id}
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                {question.title}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <div key={tag.name} className="flex items-center gap-1">
                <Badge variant="secondary" className="text-xs">
                  {tag.name}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {tag.count}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
