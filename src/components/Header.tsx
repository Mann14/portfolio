"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm tracking-tight text-accent">
          mm@prod:~
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resume}
            download
            className="rounded-full border border-accent/40 bg-accent-dim px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Resume
          </a>
        </nav>
        <button
          type="button"
          className="font-mono text-xs text-accent md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted"
              >
                {link.label}
              </a>
            ))}
            <a href={site.resume} download className="text-sm text-accent">
              Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
