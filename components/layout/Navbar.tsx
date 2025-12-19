'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          AlgoRiders
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-muted">
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/achievements" className="hover:text-white">Achievements</Link>
          <Link href="/team" className="hover:text-white">Team</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
