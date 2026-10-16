const projects = [
  {
    name: "Health-Tech SaaS (Kay's Wellness pilot)",
    description:
      "Multi-tenant clinic operations platform: scheduling, WhatsApp patient engagement, encrypted records, billing.",
    stack: ["TanStack Start", "Vercel Edge", "PostgreSQL"],
    status: "Pre-launch, piloting",
    liveUrl: "https://kays-wellness-centre.vercel.app/",
  },
  {
    name: "Daftari",
    description:
      "Offline-first business ledger PWA for Kenyan informal vendors, with M-Pesa SMS parsing and a bilingual (Kiswahili/English) interface.",
    stack: ["React", "Supabase"],
    status: "Live, piloting with a Nairobi vendor",
    liveUrl: "https://daftari-amber.vercel.app/",
  },
  {
    name: "FundiOS",
    description:
      "Plug-and-play marketing operations SaaS for automobile garages in East Africa.",
    stack: ["Next.js", "Supabase", "WhatsApp Cloud API"],
    status: "Piloting with Quickstop Garage, Nairobi",
  },
  {
    name: "AfroPay Network",
    description:
      "Pan-African B2B cross-border payment rail (KES\u2194NGN, PAPSS-aligned).",
    stack: ["Go", "Python", "Next.js", "PostgreSQL"],
    status: "In development",
    liveUrl: undefined,
    repoUrl: undefined,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">Selected Work</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{p.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-background px-2 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mb-4 rounded bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                {p.status}
              </span>
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  View Live &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
