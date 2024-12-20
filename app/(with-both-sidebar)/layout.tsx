import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-Sidebar";
import { Header } from "@/components/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Sidebar */}
      <div className="w-[20%] max-w-sm bg-sidebar">
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* Main content area */}
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[20%] max-w-sm bg-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
}
