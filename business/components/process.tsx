const steps = [
  {
    number: "01",
    title: "Discovery & Spec",
    description: "We define the actual problem before writing code.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Decisions that hold up under real usage and real failure modes.",
  },
  {
    number: "03",
    title: "Build in Sprints",
    description: "Visible progress, reviewed at every gate.",
  },
  {
    number: "04",
    title: "Security Review & Deploy",
    description:
      "Audited, hardened, and handed over \u2014 not abandoned.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">Process</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="mb-4 block text-5xl font-bold text-brand/20">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
