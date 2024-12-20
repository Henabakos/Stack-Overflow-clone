import Link from "next/link";

interface TagCardProps {
  name: string;
  description: string;
  questionsCount: number;
}

export function TagCard({ name, description, questionsCount }: TagCardProps) {
  return (
    <Link
      href={`/tags/${name}`}
      className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent/50"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-accent px-2 py-1 text-sm font-medium">
          {name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-3">
        {description}
      </p>
      <div className="mt-auto">
        <span className="text-[#FF7000]">{questionsCount}+ </span>
        <span className="text-muted-foreground">Questions</span>
      </div>
    </Link>
  );
}
