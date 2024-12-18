"use client";

import { useState } from "react";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoteControlsProps {
  initialVotes?: number;
  onVote?: (type: "up" | "down") => void;
}

export function VoteControls({ initialVotes = 0, onVote }: VoteControlsProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    if (userVote === type) {
      setVotes(votes + (type === "up" ? -1 : 1));
      setUserVote(null);
    } else {
      setVotes(
        votes +
          (type === "up" ? 1 : -1) +
          (userVote ? (userVote === "up" ? -1 : 1) : 0)
      );
      setUserVote(type);
    }
    onVote?.(type);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleVote("up")}
        className={cn(userVote === "up" && "text-green-500")}
      >
        <ArrowBigUp className="h-6 w-6" />
      </Button>
      <span className="font-medium text-lg">{votes}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleVote("down")}
        className={cn(userVote === "down" && "text-red-500")}
      >
        <ArrowBigDown className="h-6 w-6" />
      </Button>
    </div>
  );
}
