"use client";

import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-Sidebar";
import { Header } from "@/components/header";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar shadow-lg transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <LeftSidebar />
      </div>

      {/* Left Sidebar for larger screens */}
      <div className="hidden lg:flex lg:w-64 bg-sidebar">
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex w-[20%] max-w-sm bg-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
}
