"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Mo. Zuhair
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link href="#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
