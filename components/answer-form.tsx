"use client";

import { useState } from "react";
import { RichTextEditor } from "@/components/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface AnswerFormProps {
  onSubmit?: (content: string) => void;
  onGenerateAI?: () => void;
}

export function AnswerForm({ onSubmit, onGenerateAI }: AnswerFormProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit?.(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your Answer</h2>
        <Button
          type="button"
          variant="outline"
          className="gap-2"
          onClick={onGenerateAI}
        >
          <Sparkles className="h-4 w-4" />
          Generate AI Answer
        </Button>
      </div>
      <RichTextEditor
        placeholder="Write your answer here..."
        onChange={setContent}
        className="min-h-[200px]"
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={!content.trim()}>
          Post Answer
        </Button>
      </div>
    </form>
  );
}
