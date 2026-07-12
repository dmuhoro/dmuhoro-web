import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-brand">404</h1>
      <p className="mt-4 text-xl text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
      >
        Back home
      </Link>
    </main>
  );
}
