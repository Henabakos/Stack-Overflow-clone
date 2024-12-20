import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    Prism.highlightAll();
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isMounted) return null;

  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.javascript,
    language
  );

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 rounded-md p-4 max-w-[95%] pr-5 mt-10">
      <div
        className="overflow-auto rounded-md p-3 bg-zinc-950 text-sm leading-relaxed"
        style={{ maxHeight: "300px", width: "617px" }}
      >
        <pre className="whitespace-pre-wrap break-words">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 opacity-80 hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
