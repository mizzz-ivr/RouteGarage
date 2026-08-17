export function SafetyNotice() {
  return (
    <aside
      aria-labelledby="safety-notice-title"
      className="rounded-2xl border border-[#705528] bg-[#1e1a13] p-5"
    >
      <h2 id="safety-notice-title" className="font-semibold text-[#ffd995]">
        安全に使うために
      </h2>
      <p className="mt-2 leading-7 text-[#ead9bd]">
        走行中は操作しないでください。安全な場所に停車してから操作してください。
      </p>
    </aside>
  );
}
