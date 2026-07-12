import { contact } from "@/app/contact";

const links = [
  { label: "Email Me", href: `mailto:${contact.email}`, primary: true, external: false },
  { label: "WhatsApp", href: contact.whatsapp || "https://wa.me/REPLACE_ME", external: true },
  { label: "GitHub", href: contact.github, external: true },
  { label: "LinkedIn", href: contact.linkedin || "https://linkedin.com/in/REPLACE_ME", external: true },
];

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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={
                link.primary
                  ? "rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
                  : "rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface-hover"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
