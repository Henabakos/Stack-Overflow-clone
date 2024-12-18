import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface QuestionCardProps {
  question: {
    id: number;
    title: string;
    tags: string[];
    author: {
      name: string;
      avatar: string;
    };
    stats: {
      votes: string;
      answers: string;
      views: string;
    };
    timeAgo: string;
    saved?: boolean;
  };
  onSave?: (id: number) => void;
}

export function QuestionCard({ question, onSave }: QuestionCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
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
            {onSave && (
              <Button
                variant="ghost"
                size="icon"
                className={
                  question.saved ? "text-yellow-500" : "text-muted-foreground"
                }
                onClick={() => onSave(question.id)}
              >
                <Star
                  className={`h-4 w-4 ${question.saved ? "fill-current" : ""}`}
                />
              </Button>
            )}
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
  );
}
