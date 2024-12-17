import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-Sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevOverflow",
  description: "A developer Q&A platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background`}>
        <div className="relative flex min-h-screen">
          <LeftSidebar />
          <main className="flex-1 pb-10">
            <Header />
            <div className="container flex gap-10">
              <div className="flex-1">{children}</div>
              <RightSidebar />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
