"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RichTextEditor } from "@/components/rich-text-editor";
import { TagInput } from "@/components/tag-input";

export default function AskQuestion() {
  const [formData, setFormData] = useState({
    title: "",
    explanation: "",
    tags: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isValid = formData.title.length >= 20 && formData.tags.length > 0;

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Ask a public question</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medium">
              Question Title <span className="text-red-500">*</span>
            </label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Be specific and imagine you're asking a question to another person."
              className="w-full"
            />
            {formData.title && formData.title.length < 20 && (
              <p className="text-sm text-red-500">
                Title must be at least 20 characters long
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">
              Detailed explanation of your problem?{" "}
              <span className="text-red-500">*</span>
            </label>
            <RichTextEditor
              placeholder="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
              onChange={(value) =>
                setFormData({ ...formData, explanation: value })
              }
              className="min-h-[200px]"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">
              Tags <span className="text-red-500">*</span>
            </label>
            <TagInput
              value={formData.tags}
              onChange={(tags) => setFormData({ ...formData, tags })}
              maxTags={5}
            />
            <p className="text-sm text-muted-foreground">
              Add up to 5 tags to describe what your question is about. Start
              typing to see suggestions.
            </p>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={!isValid}>
              Ask a Question
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
