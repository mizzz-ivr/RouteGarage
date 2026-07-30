# Handoff（2026-07-30 / Issue #117）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #116は2026-07-30にマージ済み。
- Issue #115は`completed`。
- PR #116には未解決review threadが残っており、現行`main`にも安全上の不足が確認された。
- Issue #117を作成し、保持・削除要件のレビュー補足とSource of Truth同期を進行中。
- 実データ取得・変換・保存・削除、UI実装、provider採用、APIキー取得、外部問い合わせは行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / Branch

- Issue #117: https://github.com/mizzz-ivr/RouteGarage/issues/117
- Branch: `docs/issue-117-jartic-retention-review-fixes`
- Phase: Phase 1 / Requirements Definition
- Main document: `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`
- Base requirement: `docs/requirements/jartic-static-layer-data-retention-deletion-requirements.md`

## Previous Completion

- Issue #115 / PR #116
  - JARTIC静的レイヤー候補の保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
  - Issue: completed
  - 未解決review thread: Issue #117で後続対応
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

## Review Status

- Issue #117: Open
- Branch: 作成済み
- 要件補足文書: 作成済み
- Current Status: 同期済み
- Active Issues: 同期済み
- Handoff: 本更新で同期
- Codexレビュー: PR作成後に依頼
- 人間レビュー: 未実施
- 法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施
- PR #116 review thread: 後続PR作成後に返信・解決予定

## Remaining Tasks

1. 作業ログとAIプロンプトログを追加する。
2. Issue #117のbranch差分とmain追従状態を確認する。
3. PRを日本語で作成する。
4. PR #116の該当review threadへ後続PRを返信する。
5. PR #116の対応済みreview threadを解決する。
6. Issue #117のPRでCodex・人間レビューを受ける。
7. 未解決review thread 0件、workflow/status、mergeabilityを確認する。
8. 問題がなければPRをマージする。
9. Issue #117のcompletedとbranch削除を確認する。
10. 後続候補として具体的保持期間・削除SLA、または生活拠点ぼかし・キャプチャ保護のIssueを開始する。

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言・provider採用決定ではない。
- 実データ・実装・外部送信は行っていない。
- 保存期間・削除SLAの具体値を確定していない。
- 仕様・契約・法務判断確定前に実装しない。
- 新機能へ進む前にPR #116の未解決P1指摘を解消する。
