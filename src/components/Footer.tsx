import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">
          {site.name} · DevOps + full stack · {site.location}
        </p>
        <div className="flex gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
