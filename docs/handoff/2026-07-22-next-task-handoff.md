# Handoff（2026-07-22 / Issue #91）

## Summary

- PR #90 / Issue #89はマージ・完了済み。
- PR #90マージ直後のCodexレビューで、交通情報の信頼性判定に関する2件の指摘があった。
- Issue #91を作成し、main基点の独立branchで修正中。
- 現在の作業は実装ではなく要件文書の安全側修正。

## Current Issue

- Issue #91: https://github.com/mizzz-dev/RouteGarage/issues/91
- Title: PR #90レビュー指摘に基づき交通情報の由来・更新時刻要件を修正する
- Phase: Phase 1 / Requirements Definition
- Branch: `docs/issue-91-traffic-source-freshness-fix`

## Completed Tasks

- PR #90のマージ状態を確認。
- Issue #89の完了状態を確認。
- PR #90のレビュー指摘2件を確認。
- 上流データ由来と調達経路を別軸で定義。
- 提供元更新時刻がない情報を最新扱いしない要件を追加。
- Issue #91をSource of Truth上のActiveへ設定。
- Issue #91の作業ログとAIプロンプトログを保存。

## Review Findings / Response

### P1: 提供元更新時刻がない情報を最新扱いしない

- RouteGarage受信時刻は上流情報の更新時刻の代替にしない。
- 更新時刻がない場合は未検証、遅延、提供停止へ保守的に倒す。

### P2: 契約経路と情報の由来を分離する

- 上流由来は公式発表、ユーザー投稿、派生・推定、不明で排他的に分類する。
- 調達経路は直接提供、オープンデータ、契約プロバイダー、二次提供、不明で別管理する。
- 契約の有無を正確性・検証済み状態の根拠にしない。

## Technical Decisions

- レビュー後コミットをマージ済みbranchへ積み続けず、新規Issue・branch・PRへ分離する。
- mainへ直接コミットしない。
- 技術スタック、データ提供元、鮮度閾値は未確定のまま保持する。
- 法的助言ではなく、安全性・監査性を高める要件修正とする。

## Risks

- 修正前の要件が後続設計で参照されること。
- 契約プロバイダー経由という理由だけで公式・検証済みと誤認されること。
- RouteGarage受信時刻だけで古い情報が最新表示されること。
- 法務・運用レビューが未完了であること。

## Remaining Tasks

1. Issue #91対応PRを作成する。
2. Codex再レビューを受ける。
3. 人間レビューを受ける。
4. マージ後にIssue #91を完了する。
5. PR #90の旧レビューコメントへ修正PRを案内する。
6. branch cleanupを確認する。

## Suggested Next Actions

- Issue #91修正PRを人間レビュー・マージする。
- その後、交通情報・オービス情報の法務・運用レビューへ進む。

## Branch Cleanup

- `update-docs-after-merging-pr-#82-guo9fg`: 削除候補。
- `docs/issue-87-source-of-truth-sync`: PR #88マージ済みのため削除候補。
- `docs/issue-89-traffic-orbis-requirements`: PR #90マージ後のレビューコミットが残るため、Issue #91マージ後に削除確認。
- `docs/issue-91-traffic-source-freshness-fix`: Issue #91対応PRマージ後に削除確認。

## 注意事項

- AIレビューは人間レビューの代替にしない。
- 実装コードは追加しない。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。
- 情報提供元の契約・規約レビュー前にデータ利用を確定しない。
