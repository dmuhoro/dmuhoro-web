const services = [
  {
    title: "Custom SaaS & Internal Tools",
    description:
      "Built for your workflow, not retrofitted from a template.",
  },
  {
    title: "Offline-First & Low-Connectivity Architecture",
    description:
      "Software that works when the network doesn't.",
  },
  {
    title: "Payments & Ledger Systems",
    description:
      "Double-entry correctness, idempotency, and audit-ready financial infrastructure.",
  },
  {
    title: "WhatsApp & Mobile Money Integration",
    description:
      "Meet customers where they already are.",
  },
  {
    title: "Technical Audits & Architecture Review",
    description:
      "A rigorous second opinion before you scale on a shaky foundation.",
  },
];

export default function Services() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-background p-8"
            >
              <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
