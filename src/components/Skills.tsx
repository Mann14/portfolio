import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        Technical stack
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Tools I use in production
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-line bg-bg-elevated p-5">
            <h3 className="font-mono text-xs tracking-wide text-accent uppercase">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
