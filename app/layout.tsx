import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PDF Checker Dashboard",
  description: "Glassmorphism-style PDF checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="min-h-screen bg-[linear-gradient(180deg,#f8fafc,rgba(99,102,241,0.02))]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
          <aside className="w-72">
            <div className="p-4 rounded-2xl bg-white/50 border border-white/30 shadow-lg backdrop-blur-md">
              <Sidebar />
            </div>
          </aside>

          <main className="flex-1 flex flex-col gap-6">
            <Topbar />
            <div className="rounded-2xl p-6 bg-white/50 border border-white/30 shadow-lg backdrop-blur-md">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
