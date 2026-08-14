# Handoff（2026-08-13 / Issue #141）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #141 / PR #142
- Feature: ドライブ振り返り・統計ダッシュボード
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition
- PR #142: Open / 人間レビュー待ち
- Web foundation implementation remains blocked by Issue #139 / #137.

## Current Documents

- `docs/requirements/drive-review-dashboard-requirements.md`
- `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- `docs/requirements/issue-141-review-clarifications.md`
- `docs/requirements/issue-141-mvp-delta.md`
- `docs/screen-design/drive-review-dashboard-screen-extension.md`
- `docs/content/drive-review-dashboard-content-guidelines.md`

## Product Goal

本人の既存記録から、競争ではなく振り返りとして月間/年間/車両別のドライブ活動を確認できるようにする。

## Core Rules

- `drive_count` = 対象期間の有効走行記録件数。
- 合計距離は距離入力済み有効記録だけを対象にする。
- 距離未入力を0kmにしない。
- 平均距離の分母は距離入力済み有効記録件数。
- 分母0は算出不能。
- 計画距離を実績へ混ぜない。
- 同一記録を二重計上しない。
- 車両参照なし記録を推測で車両へ割り当てない。

## Codex Review Result

P1 2件 / P2 2件。すべて修正・返信・Resolve済み。

1. **P1 月所属基準**
   - MVPは日付のみの`走行日`で月/年所属を固定。
   - created/updated/view timestampや閲覧端末timezoneで再分類しない。
2. **P1 公開投稿漏えい**
   - 公開プロフィール/公開投稿/公開ストーリーを独立した非漏えい必須テストへ。
3. **P2 距離あり/未入力混在**
   - 有効な距離統計を表示し、欠損注記を併記。
   - 全件未入力時だけ距離データなし。
4. **P2 車両参照解除**
   - A→B、A→null、null→Bの再集計を明示。
   - 旧車両の古い派生値を残さない。

Unresolved review threads: 0.

## Privacy / Authorization

- Owner only.
- Public profile/post/story must not expose private statistics.
- Do not prefetch another user's statistics into client state.
- Do not infer home/work/vehicle-storage location.
- Do not create exact frequent-location ranking.

## Safety

Do not add:

- speed ranking
- fastest/shortest-time records
- distance ranking
- streaks
- driving/safety score
- copy that pressures the user to drive more

## Screen Delta

- SCR-35 candidate: Drive Review Dashboard
- SCR-36 candidate: Monthly Drive Review
- SCR-37 candidate: Vehicle Drive Review
- SCR-05 extension candidate: monthly review card

## Recently Completed

### Issue #138 / PR #140

- Merged: 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- Canonical MVP/screen integration remains follow-up work.

## Web Foundation Governance

### Issue #139

- Open / `ai: blocked`
- main ADR-0002 remains `Status: Proposed`
- Human architecture review required before any `Accepted` transition.

### Issue #137

- Phase 4 / Detail Design
- Open / `ai: blocked`
- Keep blocked until Issue #139 / ADR acceptance is resolved.

### Issue #135

- Phase 5 / Implementation
- Open / `ai: blocked`
- Keep blocked until Issue #139 and #137 are complete.

## Human Decisions for PR #142

1. Custom date range in MVP.
2. Zero-record month: numeric 0 vs explicit no-data.
3. Coarse-area aggregation in MVP.
4. Past-memories section in MVP.
5. Vehicle archive display-name policy.
6. Future statistics sharing roadmap.

## Next Tasks

1. Human review PR #142.
2. After approval, integrate Issue #141 delta + review clarifications into canonical MVP/screens.
3. Canonically integrate Issue #138 / PR #140 deltas in a separate task.
4. Resolve Issue #139 through human architecture review.
5. If approved, update ADR-0002 to `Accepted` through a follow-up PR.
6. Unblock and complete Issue #137.
7. Unblock Issue #135 and implement Next.js foundation + GitHub Actions.

## Do Not Proceed Yet

- Do not implement #135 while ADR-0002 is Proposed.
- Do not implement Issue #141 business UI/API/DB from requirements alone.
- Do not introduce DB/Auth/Maps/Storage/analytics providers.
- Do not acquire API keys.
- Do not use real user location/drive records in the public repository.
