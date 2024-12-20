"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobCard } from "@/components/job-card";

const mockJobs = [
  {
    id: "1",
    title: "Principal Salesforce Developer",
    company: {
      name: "AT&T",
      logo: "/placeholder.svg",
      description:
        "About the Company: Join AT&T and reimagine the communications and technologies that connect the world.",
    },
    type: "Full-time",
    salary: "80k - 100k",
    location: "Melbourne, AU",
    category: "DEVELOPMENT",
  },
  {
    id: "2",
    title: "C++ Software Developer",
    company: {
      name: "Tech Corp",
      logo: "/placeholder.svg",
      description:
        "We're looking for a mid-level UX designer to join our team.",
    },
    type: "Full-time",
    salary: "40k - 90k",
    location: "Melbourne, AU",
    category: "SOFTWARE",
  },
  {
    id: "3",
    title: "Application Developer III",
    company: {
      name: "DRW",
      logo: "/placeholder.svg",
      description:
        "About the Company: Join AT&T and reimagine the communications and technologies that connect the world.",
    },
    type: "Full-time",
    salary: "80k - 100k",
    location: "Melbourne, AU",
    category: "DEVELOPMENT",
  },
  {
    id: "4",
    title: "Staff Developer Advocate",
    company: {
      name: "Tech Corp",
      logo: "/placeholder.svg",
      description:
        "We're looking for an experienced frontend developer to join our team.",
    },
    type: "Full-time",
    salary: "40k - 90k",
    location: "Melbourne, AU",
    category: "SOFTWARE",
  },
];

const locations = [
  "Melbourne, AU",
  "Sydney, AU",
  "Brisbane, AU",
  "Perth, AU",
  "Adelaide, AU",
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      !selectedLocation || job.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Jobs</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Job Title, Company, or Keywords"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative flex-1 sm:max-w-[240px]">
            <Select>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="sm:w-[120px]">Find Jobs</Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant="outline" disabled>
          Prev
        </Button>
        <Button
          variant="outline"
          className="bg-primary text-primary-foreground"
        >
          1
        </Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
