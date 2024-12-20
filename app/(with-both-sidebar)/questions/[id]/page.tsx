"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { VoteControls } from "@/components/vote-controls";
import { CodeBlock } from "@/components/code-block";
import { AnswerCard } from "@/components/answer-card";
import Image from "next/image";
import { AnswerForm } from "@/components/answer-form";

const questionData = {
  id: 1,
  title:
    "How to refresh all the data inside the Datatable and move the data into original place after closing the modal popup close button",
  content: `When the user clicks a button for the first time, a spinner is displayed, the "close" button is disabled, and a modal popup is shown. When the user clicks on a table displayed within the modal popup, the table loads data.

When the user closes the popup by clicking the "close" button, and then clicks the same button again without refreshing the page, the data in the table should be the same as it was before.

I need it so that when the user clicks the button, any changes made stay in place even after closing and reopening the popup.`,
  code: {
    content: `$(document).ready(function () {
  var enabledExportCount = 5000;
  $("#partsLibSearchModal").on("show.bs.modal", function (e) {
    $("#partsLibSearchFilters").val("");
    $("#filterrow th").each(function () {
      $(this).removeClass();
    });
    $("#partsLibBigSearch thead tr:eq(1) th").each(function () {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });`,
    language: "javascript",
  },
  author: {
    name: "Satheesh",
    avatar: "/placeholder.svg",
  },
  stats: {
    votes: 12,
    answers: 138,
    views: "5.2k",
  },
  tags: ["JAVASCRIPT", "REACT.JS", "INVALID FIELDS", "DEPLOYMENT"],
};

const answersData = [
  {
    id: 1,
    content:
      "I think what you want to do is probably not to attach the foreach function to only the one array you have here, but to make it work for all arrays.",
    code: {
      content: `if (partsLibBigSearch.column($(this).parent().index()+':visible').search() !== this.value) {
  partsLibBigSearch
    .column($(this).parent().index()+':visible')
    .search(this.value)
    .draw();
}`,
      language: "javascript",
    },
    author: {
      name: "Philip Martin",
      avatar: "/placeholder.svg",
    },
    votes: 15,
    createdAt: "2024-01-18T14:30:00",
  },
  {
    id: 2,
    content: "You need to add the forEach method to the prototype of Arrays:",
    code: {
      content: `console.log("search result...");
partsLibBigSearch.rows({search:'applied'}).count();
if (partsLibBigSearch.rows({search:'applied'}).count()) {
  partsLibBigSearch.draw();
}`,
      language: "javascript",
    },
    author: {
      name: "Taylor Hernandez",
      avatar: "/placeholder.svg",
    },
    votes: 8,
    createdAt: "2024-01-18T15:45:00",
  },
];

export default function QuestionPage() {
  const [currentDate, setCurrentDate] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentDate(new Date().toLocaleString());
  }, []);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="flex gap-6">
          <VoteControls initialVotes={questionData.stats.votes} />
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">{questionData.title}</h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>{questionData.stats.views} views</span>
              <div className="flex items-center gap-2">
                <Image
                  src={questionData.author.avatar}
                  alt={questionData.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>asked by {questionData.author.name}</span>
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>{questionData.content}</p>
              {questionData.code && (
                <CodeBlock
                  code={questionData.code.content}
                  language={questionData.code.language}
                />
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {questionData.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {questionData.stats.answers} Answers
            </h2>
            <select className="bg-background text-sm border rounded-md px-2 py-1">
              <option>Highest Upvotes</option>
              <option>Recent First</option>
              <option>Oldest First</option>
            </select>
          </div>
          <div className="divide-y">
            {answersData.map((answer) => (
              <AnswerCard
                key={answer.id}
                answer={{
                  ...answer,
                  createdAt: new Date(answer.createdAt),
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <AnswerForm
            onSubmit={(content) => console.log("Submit answer:", content)}
            onGenerateAI={() => console.log("Generate AI answer")}
          />
        </div>
      </div>
    </div>
  );
}
