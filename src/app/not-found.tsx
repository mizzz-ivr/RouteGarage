import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-5 py-12">
      <section className="w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <p className="text-sm font-semibold text-[var(--accent)]">404</p>
        <h1 className="mt-2 text-2xl font-semibold">ページが見つかりません</h1>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          指定されたページは存在しないか、現在利用できません。
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl border border-[var(--border)] px-5 py-3 font-semibold"
        >
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
