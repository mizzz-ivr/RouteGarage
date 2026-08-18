import { SafetyNotice } from "@/shared/ui/safety-notice";

const featureGroups = [
  {
    title: "ドライブ",
    description: "行きたい場所やドライブプラン、走行後の記録を整理します。",
  },
  {
    title: "ガレージ",
    description: "愛車プロフィールと、整備・給油などの記録をまとめます。",
  },
  {
    title: "振り返り",
    description: "自分の記録から、月ごとのドライブや思い出を振り返ります。",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <header className="flex items-center justify-between border-b border-[var(--border)] pb-5">
        <p className="text-lg font-semibold tracking-tight">RouteGarage</p>
        <p className="text-sm text-[var(--muted)]">Web MVP</p>
      </header>

      <section className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
            RouteGarage
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            ドライブの計画・記録・愛車管理をひとつにまとめ、走る前から走った後までを自分のペースで残せる場所を目指しています。
          </p>
          <div className="mt-8">
            <SafetyNotice />
          </div>
        </div>

        <section
          aria-labelledby="feature-overview-title"
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
        >
          <h2 id="feature-overview-title" className="text-xl font-semibold">
            準備していること
          </h2>
          <div className="mt-6 divide-y divide-[var(--border)]">
            {featureGroups.map((feature) => (
              <section key={feature.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {feature.description}
                </p>
              </section>
            ))}
          </div>
        </section>
      </section>

      <footer className="border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
        現在はWeb基盤を構築中です。実データや位置情報はまだ利用しません。
      </footer>
    </main>
  );
}
