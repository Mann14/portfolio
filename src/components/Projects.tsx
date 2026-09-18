import { projects } from "@/data/site";

export function Projects() {
  const project = projects[0];

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        Full stack
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        I can build the app I deploy
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        End-to-end ownership — product UI, data, and hosting — so pipelines are grounded in how
        software actually ships.
      </p>

      <article className="mt-10 overflow-hidden rounded-2xl border border-line">
        <div className="grid lg:grid-cols-[1fr_280px]">
          <div className="bg-bg-elevated p-6 sm:p-8">
            <p className="font-mono text-xs text-blue">{project.role}</p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-accent">▸</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-accent-dim px-3 py-1 font-mono text-[11px] text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <aside className="border-t border-line bg-bg p-6 lg:border-t-0 lg:border-l">
            <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
              Why this matters
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Hiring managers want DevOps who understand the product surface. This freelance
              build shows React/Next.js delivery plus CI on Vercel — the same loop I automate
              on Kubernetes.
            </p>
          </aside>
        </div>
      </article>
    </section>
  );
}
