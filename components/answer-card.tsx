import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { VoteControls } from "@/components/vote-controls";
import { CodeBlock } from "@/components/code-block";

interface AnswerCardProps {
  answer: {
    id: number;
    content: string;
    code?: {
      content: string;
      language: string;
    };
    author: {
      name: string;
      avatar: string;
    };
    votes: number;
    createdAt: Date;
  };
}

export function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <div className="flex gap-6 py-6 border-b">
      <VoteControls initialVotes={answer.votes} />
      <div className="flex-1 space-y-4">
        <div className="prose dark:prose-invert max-w-none">
          <p>{answer.content}</p>
          {answer.code && (
            <CodeBlock
              code={answer.code.content}
              language={answer.code.language}
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={answer.author.avatar}
            alt={answer.author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-muted-foreground">
            answered {formatDistanceToNow(answer.createdAt)} ago by{" "}
            <span className="font-medium text-foreground">
              {answer.author.name}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
