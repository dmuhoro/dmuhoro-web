const services = [
  {
    title: "Full-Stack Product Engineering",
    description:
      "Next.js, React, PostgreSQL, offline-first and edge architectures, built solo from spec to production.",
  },
  {
    title: "Fintech & Payments Infrastructure",
    description:
      "Ledger systems, double-entry invariants, idempotency guarantees, cross-border rails aligned to PAPSS.",
  },
  {
    title: "Multi-Tenant SaaS",
    description:
      "Row-level security, RBAC, encryption with key versioning, tenant isolation done right the first time.",
  },
  {
    title: "AI-Native Tooling",
    description:
      "Integrating LLMs into real product workflows — orchestration, provider abstraction, and agentic dev tooling.",
  },
];

export default function WhatIdo() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">What I Do</h2>
        <div className="grid gap-6 md:grid-cols-2">
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
