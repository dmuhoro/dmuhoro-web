export default function Contact() {
  return (
    <section id="contact" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Open to freelance engagements, remote roles, and technical
          conversations.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
          If you&apos;re building something that needs an engineer who can own a
          system end to end, let&apos;s talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:REPLACE_ME"
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/REPLACE_ME"
            className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface-hover"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/dmuhoro"
            className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface-hover"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/REPLACE_ME"
            className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface-hover"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
