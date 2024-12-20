"use client";

import { useState } from "react";
import { Bold, Italic, List, Heading, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function RichTextEditor({
  placeholder,
  onChange,
  onSubmit,
  className,
}: RichTextEditorProps) {
  const [value, setValue] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

  const formats = [
    { icon: Bold, id: "bold", label: "Bold" },
    { icon: Italic, id: "italic", label: "Italic" },
    { icon: Heading, id: "heading", label: "Heading" },
    { icon: Code, id: "code", label: "Code" },
    { icon: List, id: "list", label: "List" },
  ];

  const handleFormat = (formatId: string) => {
    setSelectedFormat((prev) =>
      prev.includes(formatId)
        ? prev.filter((f) => f !== formatId)
        : [...prev, formatId]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-0.5 border rounded-t-lg bg-muted p-1">
        {formats.map(({ icon: Icon, id, label }) => (
          <Button
            key={id}
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              selectedFormat.includes(id) && "bg-background"
            )}
            onClick={() => handleFormat(id)}
          >
            <Icon className="h-4 w-4" />
            <span className="sr-only">{label}</span>
          </Button>
        ))}
      </div>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-h-[200px] rounded-t-none"
      />
    </div>
  );
}
