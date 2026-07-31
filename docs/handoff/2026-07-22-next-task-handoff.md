# Handoff（2026-07-30 / Issue #117）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #116は2026-07-30にマージ済み。
- Issue #115は`completed`。
- PR #116のreview thread 12件は、後続Issue #117 / PR #118を紐付けてすべて解決済み。
- Issue #117の保持・削除要件補足とSource of Truth同期は完了し、PR #118をレビュー中。
- PR #118は`open / mergeable`、review thread 0件、workflow・commit status checkなし。
- Codexレビューは利用上限のため実施できていない。
- 実データ取得・変換・保存・削除、UI実装、provider採用、APIキー取得、外部問い合わせは行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #117: https://github.com/mizzz-ivr/RouteGarage/issues/117
- PR #118: https://github.com/mizzz-ivr/RouteGarage/pull/118
- Branch: `docs/issue-117-jartic-retention-review-fixes`
- Phase: Phase 1 / Requirements Definition
- Main document: `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`
- Base requirement: `docs/requirements/jartic-static-layer-data-retention-deletion-requirements.md`

## Previous Completion

- PR #116 review thread
  - 12件すべて解決済み
  - PR #116へ後続対応コメントを追加済み
- Issue #115 / PR #116
  - JARTIC静的レイヤー候補の保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
  - Issue: completed
  - Follow-up: Issue #117 / PR #118
- Issue #113 / PR #114
  - JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112
  - JARTICオープンデータ第三者権利台帳
- Issue #109 / PR #110
  - JARTIC静的レイヤー利用境界

PRマージ・Issue Closeは、Google Maps Platform / JARTIC採用、実データ公開、外部問い合わせ、実装開始の承認ではない。

## Current Decision

Issue #117はPR #116のレビュー指摘対応とSource of Truth同期だけを対象とする。

次を保留する。

- 保存期間・削除SLAの具体的な日数・月数
- DB・ストレージ・クラウド・バックアップ製品
- テーブル・バケット・API・ジョブ・IaC・監視
- 実データ取得・変換・保存・削除
- Google Maps Datasets等へのアップロード
- Google Maps Platform / JARTIC採用
- APIキー・契約・外部問い合わせ
- Next.js / Expo / Maps SDK実装
- 法的助言・契約解釈の最終判断

権利台帳4データセットはすべて`未着手 / No-Go`を維持する。

## Issue #117 Requirements

### 1. 削除トリガー分類

- 調査・再確認トリガー
- 削除確定トリガー
- 法的保全トリガー

削除確定イベントは削除計画承認期限までに必ず`DELETION_PENDING`へ遷移する。

`RECHECK_REQUIRED`・`QUARANTINED`へ無期限に滞留させない。

### 2. 項目・地物単位の全保存先伝播

項目、地物、地域、上流提供者、権利レコードの一部が削除対象となった場合、最低限次を対象特定する。

- 対象値を含む取得原本
- 正規化・加工後・表示用・履歴
- 一時ファイル・キャッシュ・インデックス
- 本体断片を含む品質レポート・ログ・添付
- バックアップ・レプリカ・復旧用コピー
- 外部サービス・委託先
- 共有・印刷・エクスポート候補
- 集約結果

原本を安全に部分除去できない場合は原本全体を削除対象とする。

### 3. 保持上限・最低保持期間・再確認期限

- 契約・権利・安全上の期間は保持上限として管理する。
- 法令・法務確認済みの監査・保全期間は最低保持期間として別管理する。
- 最低保持期間が保持上限を超える場合、自動決定せず法務No-Goとする。
- `監査のため`という抽象的理由だけでデータ本体を保持しない。

### 4. バックアップ失効と削除完了

- バックアップ失効予定日時は進行管理にだけ使用する。
- 実際の世代失効、物理削除、または復元不能を確認するまで`DELETION_PENDING`を維持する。
- 外部サービス削除、再取得拒否、復旧時再混入防止の確認前に完了証跡を発行しない。

### 5. 復旧時の5台帳

必須台帳:

1. 削除墓標
2. 再取得拒否記録
3. 停止台帳
4. 権利台帳
5. 法的保全台帳

1つでも取得、完全性検証、整合性確認ができない場合、サービス再開、表示、加工、再利用、キャッシュ・インデックス再構築をNo-Goとする。

### 6. `LEGAL_HOLD`解除後

- 解除、期限到来、再確認失敗、目的終了を記録する。
- 保全前に削除義務があった対象は期限付きで`DELETION_PENDING`へ戻す。
- 元期限超過時は`DELETION_OVERDUE`として直ちにエスカレーションする。
- `ACTIVE`へ自動復帰させない。

### 7. 再取得拒否記録の機微情報最小化

保存禁止:

- 正確な緯度・経度
- 走行履歴・移動軌跡
- 生活拠点を推定できる範囲
- 不要な個人情報・車両識別情報
- 原本内容・地物値
- 再識別可能な細粒度期間・地域

不透明な内部ID、非可逆識別値、必要最小限に粗粒度化した分類を使用する。

## Source of Truth Files

- `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-07-30-issue-117.md`
- `docs/ai-prompts/2026-07-30-issue-117-jartic-retention-review-fixes.md`

## External Workspaces

- Linear Project: https://linear.app/mizzzjp/project/routegarage-71286ad9056c
  - RouteGarageプロジェクト作成済み
  - 無料Issue上限により個別Issue #117相当は未作成
  - GitHub Issue #117を実行タスクの正本として扱う
- Notion Hub: https://app.notion.com/p/3ad7322f39fa81e9be8fe370b4140720
  - 要件・意思決定ハブ作成済み
  - GitHub Issue #117、PR #118、Linear Projectを紐付け済み

## Review Status

- Issue #117: Open
- PR #118: Open / mergeable
- Branch: 作成済み
- 要件補足文書: 作成済み
- Current Status / Active Issues / Handoff: 同期済み
- PR #116 review thread: 12件すべて解決済み
- PR #118 review thread: 0件
- GitHub Actions / commit status: workflow・status checkなし
- Codexレビュー: 利用上限のため未実施
- 人間レビュー: 未実施
- 法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

## Remaining Tasks

1. PR #118の人間・法務・運用・安全・セキュリティ・プライバシーレビューを受ける。
2. 指摘があれば同一branchで修正し、返信・thread解決する。
3. mergeability、workflow/status、未解決review thread 0件を再確認する。
4. 問題がなければPR #118をマージする。
5. Issue #117のcompletedとbranch削除を確認する。
6. 基本設計開始前に元要件本文とIssue #117補足を単一Source of Truthへ統合する。
7. 後続候補として具体的保持期間・削除SLA、または生活拠点ぼかし・キャプチャ保護のIssueを開始する。

## 注意事項

- AI生成内容は人間レビュー必須。
- Codexレビュー未実施を人間レビューで代替済みとは扱わない。
- 法的助言・provider採用決定ではない。
- 実データ・実装・外部送信は行っていない。
- 保存期間・削除SLAの具体値を確定していない。
- 仕様・契約・法務判断確定前に実装しない。
- PR #118のマージ前に人間・法務・運用・安全・セキュリティ・プライバシーレビューを必須とする。
