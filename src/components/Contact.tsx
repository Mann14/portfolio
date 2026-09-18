import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="rounded-3xl border border-accent/25 bg-accent-dim px-6 py-12 sm:px-12">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-tight">
          Let&apos;s talk pipelines, platforms, and the next role
        </h2>
        <p className="mt-4 max-w-xl text-muted">{site.availability}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-line bg-bg px-5 py-2.5 text-sm"
          >
            {site.phone}
          </a>
          <a
            href={site.resume}
            download
            className="rounded-full border border-line bg-bg px-5 py-2.5 text-sm"
          >
            Download PDF resume
          </a>
        </div>
      </div>
    </section>
  );
}
