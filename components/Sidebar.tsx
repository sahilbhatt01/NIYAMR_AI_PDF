"use client";
import { motion } from "framer-motion";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "#" },
  { name: "Profile", href: "#" },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl mb-4 text-indigo-700">PDF Checker</h2>
      {menu.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="px-3 py-2 rounded hover:bg-indigo-100/50 text-indigo-800 font-medium"
          whileHover={{ scale: 1.03 }}
        >
          {item.name}
        </motion.a>
      ))}
    </nav>
  );
}
