import { ArrowUpRight, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: {
      name: string;
      logo: string;
      description: string;
    };
    type: string;
    salary: string;
    location: string;
    category: string;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex gap-4">
        <Image
          src={job.company.logo}
          alt={job.company.name}
          width={56}
          height={56}
          className="rounded-lg"
        />
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{job.title}</h3>
                <Badge variant="secondary" className="uppercase">
                  {job.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {job.company.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/flag.svg"
                alt="Australia"
                width={16}
                height={16}
                className="rounded-sm"
              />
              <span className="text-sm">{job.location}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
            </div>
            <Button variant="ghost" className="gap-2">
              View job
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
