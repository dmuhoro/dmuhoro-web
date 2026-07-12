export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-brand">
          Nairobi, Kenya · Full-stack Engineer & Systems Architect
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          I build the infrastructure other people&apos;s businesses run on.
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
          Self-taught engineer designing and shipping production software solo
          — from database schema to deployed system — for African SMEs, clinics,
          and cross-border payment rails.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
