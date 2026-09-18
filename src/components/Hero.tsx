import { site, stats } from "@/data/site";

const stages = ["commit", "ci", "build", "deploy", "observe"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 glow-orb" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.22em] text-accent uppercase">
            {site.role} · {site.location}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl">
            Mann
            <br />
            <span className="text-accent">Mittal</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-text hover:border-accent/50"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-text hover:border-accent/50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg-elevated/80 p-5 shadow-[0_0_80px_rgba(61,255,194,0.06)]">
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2">release.pipeline.yaml</span>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {stages.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="pipeline-dot inline-flex h-8 items-center rounded-full border border-accent/30 bg-accent-dim px-3 font-mono text-[11px] text-accent">
                  {stage}
                </span>
                {i < stages.length - 1 && (
                  <span className="hidden h-px w-4 bg-accent/30 sm:block" />
                )}
              </div>
            ))}
          </div>
          <pre className="overflow-x-auto font-mono text-[12px] leading-6 text-muted">
            <code>
              {`strategy: canary
cluster: aws-prod / gke
gitops: argocd + rollouts
iac: terraform
watch: prometheus → grafana

status: healthy
slo:  zero-downtime releases`}
            </code>
          </pre>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bg-elevated px-5 py-6">
            <dt className="font-display text-3xl font-bold text-accent">{stat.value}</dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
