"use client";

import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 
      bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
      <h1 className="text-lg font-bold">Mo. Zuhair</h1>
      <ThemeToggle /> {/* Theme toggle button */}
    </nav>
  );
}
