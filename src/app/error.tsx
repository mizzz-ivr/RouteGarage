"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-5 py-12">
      <section className="w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <h1 className="text-2xl font-semibold">画面を表示できませんでした</h1>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          一時的な問題が発生しました。安全な場所で、もう一度お試しください。
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold text-[#111318]"
        >
          再試行する
        </button>
      </section>
    </main>
  );
}
