export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tell us what you&apos;re building.
        </h2>
        <form
          action="https://formspree.io/f/REPLACE_ME"
          method="POST"
          className="mt-10 space-y-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium"
            >
              Company <span className="text-muted">(optional)</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Project Description
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted">Or</p>
          <a
            href="https://wa.me/REPLACE_ME"
            className="mt-2 inline-block text-brand hover:underline"
          >
            Message us on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
