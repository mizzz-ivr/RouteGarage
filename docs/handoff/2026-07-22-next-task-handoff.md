# Handoff（2026-07-22 / Issue #89）

## Summary

- PR #88 / Issue #87のSource of Truth同期は完了済み。
- 次の高リスク領域IssueとしてIssue #89を起票し、交通情報・オービス情報の要件整理に着手。
- 方針文書、Source of Truth、作業ログ、AIプロンプトログを更新。

## Current Issue

- Issue #89: https://github.com/mizzz-dev/RouteGarage/issues/89
- Title: 交通情報・オービス情報の正確性限界表示と法令・規約適合要件を定義する
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- 公式資料の確認。
- 情報源区分、鮮度状態、未検証・競合・停止状態の定義。
- オービス情報の安全運転目的・禁止事項の定義。
- 情報提供元規約確認チェックリストの定義。
- 縮退運用、訂正、問い合わせ、監査要件の定義。
- Issue #89をSource of Truth上のActiveへ設定。

## Technical Decisions

- 公式情報も完全・最新と断定しない。
- 情報源と更新状態を常に追跡可能にする。
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

1. 人間レビュー。
2. 法務・運用レビュー。
3. データ提供元候補の利用条件比較。
4. 画面詳細設計Issueの作成。
5. 基本設計Issueの作成。
6. branch cleanup。

## Suggested Next Actions

- 本IssueのPRをレビュー・マージする。
- 次の高リスク領域として、位置情報・走行履歴の公開制御/保持期間/削除導線を詳細化する。

## Branch Cleanup

- `update-docs-after-merging-pr-#82-guo9fg`: 削除候補。
- `docs/issue-87-source-of-truth-sync`: PR #88マージ済みのため削除候補。
- `docs/issue-89-traffic-orbis-requirements`: 本IssueのPRマージ後に削除確認。

## 注意事項

- 実装コードは追加しない。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。
- 法的助言として断定しない。
- 情報提供元の契約・規約レビュー前にデータ利用を確定しない。
