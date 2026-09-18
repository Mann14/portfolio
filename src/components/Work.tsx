import { caseStudies, experience } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Experience</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Production platforms, not just pipelines
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Interviewers care about ownership. Here is where I designed delivery, migration, and
        reliability for live AI products.
      </p>

      <article className="mt-10 rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">
              {experience.role} — {experience.company}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {experience.location} · {experience.mode}
            </p>
          </div>
          <span className="font-mono text-xs text-accent">{experience.period}</span>
        </div>
        <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="flex flex-col rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-accent/40"
          >
            <p className="font-mono text-[11px] tracking-wide text-blue uppercase">
              {study.kicker}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{study.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted">{study.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-accent">{study.outcome}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {study.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
