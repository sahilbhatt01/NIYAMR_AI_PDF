"use client";
import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center p-4 rounded-2xl bg-white/40 border border-white/30 shadow-lg backdrop-blur-md">
      <h1 className="text-xl font-semibold text-indigo-700">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-indigo-100/50">
          <Bell className="w-5 h-5 text-indigo-700" />
        </button>
        <span className="text-indigo-800 font-medium">Admin</span>
      </div>
    </div>
  );
}
