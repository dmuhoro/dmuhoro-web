const projects = [
  {
    name: "AfroPay Network",
    description:
      "Pan-African B2B cross-border payment rail (KES\u2194NGN, PAPSS-aligned).",
    stack: ["Go", "Python", "Next.js", "PostgreSQL"],
    status: "In development",
  },
  {
    name: "Health-Tech SaaS (Kay's Wellness pilot)",
    description:
      "Multi-tenant clinic operations platform: scheduling, WhatsApp patient engagement, encrypted records, billing.",
    stack: ["TanStack Start", "Vercel Edge", "PostgreSQL"],
    status: "Pre-launch, piloting",
  },
  {
    name: "Daftari",
    description:
      "Offline-first business ledger PWA for Kenyan informal vendors, with M-Pesa SMS parsing and a bilingual (Kiswahili/English) interface.",
    stack: ["React", "Supabase"],
    status: "Live, piloting with a Nairobi vendor",
  },
  {
    name: "FundiOS",
    description:
      "Plug-and-play marketing operations SaaS for automobile garages in East Africa.",
    stack: ["Next.js", "Supabase", "WhatsApp Cloud API"],
    status: "Piloting with Quickstop Garage, Nairobi",
  },
  {
    name: "EasyTutor",
    description:
      "Offline-first AI EdTech platform covering KCSE, university, and self-directed learning tracks for African students.",
    stack: ["React Native", "Expo", "Supabase"],
    status: "In development",
  },
  {
    name: "VoteChain",
    description:
      "Blockchain-based online voting MVP built on Ethereum, designed for production on Polygon.",
    stack: ["Solidity", "Ethereum/Polygon"],
    status: "Open source",
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
              className="rounded-xl border border-border bg-surface p-6"
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
              <span className="rounded bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                {p.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted">
            More on{" "}
            <a
              href="https://github.com/dmuhoro"
              className="text-brand hover:underline"
            >
              GitHub &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
