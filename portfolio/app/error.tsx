"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-brand md:text-6xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-lg text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
      >
        Try again
      </button>
    </main>
  );
}
