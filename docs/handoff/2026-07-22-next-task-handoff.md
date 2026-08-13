# Handoff（2026-08-13 / Issue #141）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #141 / PR #142
- Feature: ドライブ振り返り・統計ダッシュボード
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/142
- Web foundation implementation remains blocked.
- PR #140 / Issue #138は2026-08-13 09:36 JSTに完了。
- Issue #139 / #137 / #135は引き続き実装ゲート。

## Current Feature

- Issue #141: https://github.com/mizzz-ivr/RouteGarage/issues/141
- PR #142: https://github.com/mizzz-ivr/RouteGarage/pull/142

Documents:

- `docs/requirements/drive-review-dashboard-requirements.md`
- `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- `docs/requirements/issue-141-mvp-delta.md`
- `docs/screen-design/drive-review-dashboard-screen-extension.md`
- `docs/content/drive-review-dashboard-content-guidelines.md`

## Product Goal

本人の既存記録を用いて、競争ではなく振り返りとして月間/年間/車両別のドライブ活動を確認できるようにする。

対象:

- 期間サマリー
- 月別推移
- 車両別振り返り
- 訪問/コレクション振り返り
- 最近の記録
- 次のドライブへの手動導線

## Metrics Invariants

- `drive_count`は対象期間の有効走行記録件数。
- `total_distance`は距離入力済み有効記録だけを合計する。
- 距離未入力を0kmとして扱わない。
- 平均距離の分母は距離入力済み有効記録件数。
- 分母0は算出不能。
- 計画距離を実績へ混ぜない。
- 同一記録を二重計上しない。
- 車両参照なし記録を推測で車両へ割り当てない。
- 編集/削除/参照変更後は派生統計を再評価する。

## Privacy / Authorization

- Owner only.
- Public profile/post/story must not expose private statistics.
- Do not prefetch another user's private statistics into client state.
- Do not infer home/work/vehicle-storage location.
- Do not create exact frequent-location ranking.

## Safety

Do not add:

- speed ranking
- fastest/shortest-time records
- distance ranking
- streaks
- driving score
- safety score
- copy that pressures the user to drive more

## Screen Delta

Candidates:

- SCR-35: Drive Review Dashboard
- SCR-36: Monthly Drive Review
- SCR-37: Vehicle Drive Review
- SCR-05: optional monthly-review card

Recheck numbering before canonical integration.

## Content Guidance

Preferred:

- 今月のドライブ
- 今年のドライブ
- 愛車別の記録
- 最近のドライブ
- 距離データなし
- 算出できません

Avoid:

- 自己ベスト
- 走行不足
- もっと走ろう
- 最速
- ランキング
- 運転レベル

## PR #142 Review State

- AI支援セルフレビュー: COMMENT済み
- Codex review: `@codex review`依頼済み
- Codex findings: 現時点で未返却
- Initial unresolved review threads: 0
- Human review: 未完了

## Recently Completed

### Issue #138 / PR #140

- Feature: Garage maintenance/fuel/odometer requirements
- Issue: Closed
- PR: Merged 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- Codex P1 x3 / P2 x1 addressed before merge
- Canonical MVP/screen integration remains follow-up work

## Web Foundation Governance

### Issue #139

https://github.com/mizzz-ivr/RouteGarage/issues/139

- Open / `ai: blocked`
- main ADR-0002 remains `Status: Proposed`
- Do not infer approval from PR #136 merge

### Issue #137

- Phase 4 / Detail Design
- Open / `ai: blocked`
- Blocked until Issue #139 / ADR acceptance is reconciled

### Issue #135

- Phase 5 / Implementation
- Open / `ai: blocked`
- Blocked until Issue #139 and #137 are complete

## Human Review for Issue #141

Decide:

1. Custom date range in MVP.
2. Whether zero-record months render as numeric zero or explicit no-data.
3. Whether coarse-area aggregation enters MVP.
4. Whether a past-memories section enters MVP.
5. Vehicle archive display-name policy.
6. Whether statistics sharing is a future roadmap candidate.

## Next Tasks

1. Complete Codex review for PR #142 and address relevant findings.
2. Complete human review for PR #142.
3. After human approval, integrate Issue #141 delta into canonical MVP/screens.
4. Create follow-up canonical integration task for Issue #138/PR #140 delta.
5. Resolve Issue #139 through human architecture review.
6. If accepted, move ADR-0002 to `Accepted` through a follow-up PR.
7. Unblock and complete Issue #137.
8. Unblock Issue #135 and implement Web foundation + CI.

## Do Not Proceed Yet

- Do not implement #135 while ADR-0002 is Proposed.
- Do not implement Issue #141 business UI/API/DB from requirements alone.
- Do not introduce DB/Auth/Maps/Storage providers.
- Do not acquire API keys.
- Do not use real user location/drive records in the public repository.
