"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { contact } from "@/app/contact";

type FormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    if (!contact.formspreeId) {
      const subject = encodeURIComponent("Project Inquiry");
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(
        `https://formspree.io/f/${contact.formspreeId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(
          "Something went wrong. Please try again or email us directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please check your connection or email us directly.",
      );
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-brand focus:outline-none";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tell us what you&apos;re building.
        </h2>

        {status === "success" ? (
          <div className="mt-10 rounded-xl border border-border bg-surface p-8 text-center">
            <p className="text-lg font-semibold text-foreground">
              Message sent!
            </p>
            <p className="mt-2 text-muted">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                onChange={update}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={update}
                className={inputClass}
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
                value={form.company}
                onChange={update}
                className={inputClass}
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
                value={form.message}
                onChange={update}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && errorMsg && (
              <p className="text-sm text-red-400" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-muted">Or</p>
          <a
            href={contact.whatsapp || "https://wa.me/REPLACE_ME"}
            className="mt-2 inline-block text-brand hover:underline"
          >
            Message us on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
