import { BUSINESS_NAME } from "@/app/config";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-brand">
          {BUSINESS_NAME} · Software Studio · Nairobi, Kenya
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Production software for African businesses that can&apos;t afford to
          get it wrong.
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
          We design and build the systems your business runs on — scheduling,
          payments, records, customer engagement — from first line of code to
          production deploy.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
