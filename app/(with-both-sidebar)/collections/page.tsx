import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";
import Image from "next/image";

const savedQuestions = [
  {
    id: 1,
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: ["JAVASCRIPT", "REACT.JS", "INVALID FIELDS", "SALESFORCE"],
    author: {
      name: "Satheesh",
      avatar: "/placeholder.svg",
    },
    stats: {
      votes: "1.2k",
      answers: "900",
      views: "5.2k",
    },
    timeAgo: "2 mins ago",
  },
  {
    id: 2,
    title:
      "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
    tags: ["JAVASCRIPT", "REACT.JS", "INVALID FIELDS", "SALESFORCE"],
    author: {
      name: "Satheesh",
      avatar: "/placeholder.svg",
    },
    stats: {
      votes: "1.2k",
      answers: "900",
      views: "5.2k",
    },
    timeAgo: "2 mins ago",
  },
  {
    id: 3,
    title:
      "JavaScript validation for a form stops the form data from being submitted to mysql database",
    tags: ["JAVASCRIPT", "REACT.JS", "INVALID FIELDS", "SALESFORCE"],
    author: {
      name: "Satheesh",
      avatar: "/placeholder.svg",
    },
    stats: {
      votes: "1.2k",
      answers: "900",
      views: "5.2k",
    },
    timeAgo: "2 mins ago",
  },
  {
    id: 4,
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: ["JAVASCRIPT", "REACT.JS", "INVALID FIELDS", "SALESFORCE"],
    author: {
      name: "Satheesh",
      avatar: "/placeholder.svg",
    },
    stats: {
      votes: "1.2k",
      answers: "900",
      views: "5.2k",
    },
    timeAgo: "2 mins ago",
  },
];

export default function Collections() {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Saved Questions</h1>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for Questions Here..." className="pl-10" />
        </div>
      </div>

      <div className="space-y-4">
        {savedQuestions.map((question) => (
          <div
            key={question.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
          >
            <div className="flex items-start gap-4">
              <Image
                src={question.author.avatar}
                alt={question.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-semibold hover:text-primary cursor-pointer">
                      {question.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{question.author.name}</span>
                      <span>•</span>
                      <span>{question.timeAgo}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-yellow-500"
                  >
                    <Star className="h-4 w-4 fill-current" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span>{question.stats.votes} Votes</span>
                  <span>{question.stats.answers} Answers</span>
                  <span>{question.stats.views} Views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
