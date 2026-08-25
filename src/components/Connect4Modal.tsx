"use client";

import Connect4Game from "@/components/Connect4";
import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Connect4Modal() {
  const searchParams = useSearchParams();
  const closeHref = searchParams.get("from") === "home" ? "/" : "/projects";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-3xl max-h-[calc(100dvh-1rem)] overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-2xl">
        <Link
          href={closeHref}
          aria-label="Close Connect 4"
          className="absolute right-2 top-2 z-10 rounded-full bg-slate-800 p-2 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white sm:right-4 sm:top-4"
        >
          <X size={20} />
        </Link>

        <div className="p-2 sm:p-6">
          <Connect4Game />
        </div>
      </div>
    </div>
  );
}
