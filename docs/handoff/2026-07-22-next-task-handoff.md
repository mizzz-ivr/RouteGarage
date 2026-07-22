# Handoff（2026-07-22 / Issue #89）

## Summary

- PR #88 / Issue #87のSource of Truth同期は完了済み。
- 次の高リスク領域IssueとしてIssue #89を起票し、交通情報・オービス情報の要件整理を実施。
- PR #90を作成し、CodexレビューのP1/P2指摘を修正済み。
- 現在のゲートは人間レビュー。

## Current Issue / PR

- Issue #89: https://github.com/mizzz-dev/RouteGarage/issues/89
- PR #90: https://github.com/mizzz-dev/RouteGarage/pull/90
- Phase: Phase 1 / Requirements Definition
- Branch: `docs/issue-89-traffic-orbis-requirements`

## Completed Tasks

- 公式資料の確認。
- 上流データの由来と調達経路を別軸で定義。
- 鮮度状態、未検証・競合・停止・期限切れ状態を定義。
- 提供元最終更新時刻がない情報を最新扱いしない要件を追加。
- オービス情報の安全運転目的・禁止事項を定義。
- 情報提供元規約確認チェックリストを定義。
- 縮退運用、訂正、問い合わせ、監査要件を定義。
- Issue #89をSource of Truth上のActiveへ設定。
- PR #90のCodexレビュー指摘2件へ対応。

## Review Findings / Response

### P1: 更新時刻がない情報を最新扱いしない

- RouteGarage受信時刻を提供元更新時刻の代替にしない。
- 提供元更新時刻がない場合は未検証、遅延、提供停止へ保守的に倒す。

### P2: 契約経路と情報の由来を分離する

- 上流由来を公式発表、ユーザー投稿、派生・推定、不明で排他的に分類。
- 調達経路を直接提供、オープンデータ、契約プロバイダー、二次提供、不明で別管理。
- 契約の有無を情報の正確性・検証済み状態の根拠にしない。

## Technical Decisions

- 公式情報も完全・最新と断定しない。
- 上流由来、調達経路、更新状態を追跡可能にする。
- オービス情報は取締り回避支援に使用しない。
- 規約・ライセンス確認前のデータ利用を禁止する。
- 具体的なプロバイダー、座標粒度、通知、更新閾値は未確定のまま保持する。

## Risks

- 法務判断未完了。
- プロバイダー規約・地域ルールの変更。
- ユーザー投稿と公式情報の混同。
- 走行中の画面注視。
- 情報遅延・欠落・競合による誤認。

## Remaining Tasks

1. 修正後のPR #90を人間レビューする。
2. 未解決レビューコメントがないことを確認する。
3. 法務・運用レビューを行う。
4. PR #90をマージする。
5. Issue #89の完了とbranch cleanupを確認する。
6. データ提供元候補の利用条件比較Issueを分離する。
7. 画面詳細設計・基本設計Issueを分離する。

## Suggested Next Actions

- PR #90の人間レビューを最優先とする。
- マージ後は、位置情報・走行履歴の公開制御/保持期間/削除導線を次の高リスク領域として詳細化する。

## Branch Cleanup

- `update-docs-after-merging-pr-#82-guo9fg`: 削除候補。
- `docs/issue-87-source-of-truth-sync`: PR #88マージ済みのため削除候補。
- `docs/issue-89-traffic-orbis-requirements`: PR #90マージ後に削除確認。

## 注意事項

- AIレビューは人間レビューの代替にしない。
- 実装コードは追加しない。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。
- 法的助言として断定しない。
- 情報提供元の契約・規約レビュー前にデータ利用を確定しない。
