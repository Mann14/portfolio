import { achievements, certifications, education, site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">About</p>
      <div className="mt-3 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight">
            Platform engineer with a builder&apos;s bias
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">
            {site.summary}
          </p>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            I am strongest in conversations about GitOps, rollout strategy, IaC, and how a
            service actually survives production. If you want someone who can talk Terraform
            and still ship a Next.js storefront, that is the lane I work in.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-line p-5">
            <h3 className="font-mono text-xs text-accent uppercase">Education</h3>
            <p className="mt-3 font-semibold">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.meta}</p>
          </div>
          <div className="rounded-2xl border border-line p-5">
            <h3 className="font-mono text-xs text-accent uppercase">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line p-5">
            <h3 className="font-mono text-xs text-accent uppercase">Research</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
