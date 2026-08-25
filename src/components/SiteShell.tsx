"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUser, FolderOpenDot, House } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: CircleUser },
  { href: "/projects", label: "Projects", icon: FolderOpenDot },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <nav className="bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4 sm:py-4">
            <div className="flex bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-1 shadow-lg w-full sm:w-auto">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-3 sm:py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-initial ${
                      isActive
                        ? "bg-slate-700 text-white shadow-md"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    <Icon size={18} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {children}
        </div>
      </main>

      <footer className="w-full bg-slate-900 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-slate-300">
            <p className="text-sm sm:text-base">
              &copy; 2025 Harikrishnan Vinod. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
