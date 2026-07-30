# Active Issues

## Active

- Issue #117: PR #116の未解決レビュー指摘を反映し保持・削除要件を同期する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/117
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/118
  - Branch: `docs/issue-117-jartic-retention-review-fixes`
  - Status: In Progress / PR #118レビュー待ち
  - Scope: 削除確定時の状態遷移、項目・地物削除の全保存先伝播、保持上下限競合、バックアップ実失効確認、復旧台帳No-Go、法的保全解除後の削除再開、拒否記録の機微情報最小化
  - Current Decision: PR #116のレビュー指摘対応に限定。具体期間、製品、provider、実装は未確定
  - Data Action: 実データの取得・変換・保存・削除を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Implementation: DB / API / Auth / Infra / Storage / Backup / Maps / Next.js / Expoを実装しない

## Issue #117 Current Gates

### 削除トリガー・状態遷移

- 調査・再確認トリガーと削除確定トリガーを分離する。
- 削除確定イベントは削除計画承認期限までに必ず`DELETION_PENDING`へ遷移する。
- `RECHECK_REQUIRED`または`QUARANTINED`への無期限滞留を許可しない。
- 期限逼迫・超過は`DELETION_AT_RISK`・`DELETION_OVERDUE`としてエスカレーションする。

### 項目・地物単位の削除伝播

- 対象値を含む原本、派生物、履歴、キャッシュ、インデックス、ログ、一時ファイル、バックアップ、外部保存先を列挙する。
- 原本を安全に部分除去できない場合は原本全体を削除対象とする。
- 派生物だけを削除し、原本・バックアップから再生成できる状態を完了扱いにしない。

### 保持期間の上限・下限

- 契約・権利・安全上の保持上限と、法務確認済みの最低保持期間を分離する。
- 最低保持期間が保持上限を超える場合は自動決定せず法務No-Goとする。
- `監査のため`という抽象的理由だけでデータ本体の最低保持期間を設定しない。

### バックアップ・完了証跡

- バックアップ失効予定日時は`DELETION_PENDING`の進行記録に限定する。
- 実際のバックアップ世代失効・物理削除・不存在確認前に削除完了証跡を発行しない。
- 外部サービス削除未完了・復旧時再混入防止未検証の場合も完了扱いにしない。

### 復旧

復旧時に最新の次の5台帳を取得・検証する。

1. 削除墓標
2. 再取得拒否記録
3. 停止台帳
4. 権利台帳
5. 法的保全台帳

1つでも取得・完全性検証・整合性確認ができない場合、サービス再開・表示・加工・配信キャッシュ再構築はNo-Go。

### 法的保全

- `LEGAL_HOLD`は公開・加工・再利用を許可しない。
- 解除・期限到来・再確認失敗時は、保留中の削除義務を確認する。
- 削除義務がある対象は期限付きで`DELETION_PENDING`へ戻す。
- 保全解除を`ACTIVE`への自動復帰理由にしない。

### 再取得拒否記録・プライバシー

- 正確位置、走行履歴、生活拠点を推定できる範囲、個人情報、原本値を保存しない。
- 不透明な内部ID、非可逆識別値、必要最小限に粗粒度化した分類だけを使用する。
- 粗粒度化後も再識別・生活拠点推定が可能な場合は保存No-Go。

## Recently Completed

- PR #116のreview thread対応
  - 12件すべてに後続PR #118を紐付けて解決済み
- Issue #115 / PR #116: JARTIC静的レイヤーの保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
  - Issue: completed
  - Follow-up: Issue #117 / PR #118でレビュー指摘を対応
- Issue #113 / PR #114: JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112: 第三者権利台帳
- Issue #109 / PR #110: JARTIC静的レイヤー利用境界
- Issue #107 / PR #108: Google Routes契約・保存・帰属境界

## Review Status

- Issue #117: Open
- PR #118: Open / mergeable
- 要件補足文書: 作成済み
- Source of Truth同期: 完了
- PR #116 review thread: 12件すべて解決済み
- PR #118 review thread: 0件
- GitHub Actions / commit status: workflow・status checkなし
- Codexレビュー: 利用上限のため未実施
- 人間・法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

## Upcoming

1. PR #118の人間・法務・運用・安全・セキュリティ・プライバシーレビュー
2. レビュー指摘反映、mergeability・status再確認、PR #118マージ判断
3. データ分類ごとの具体的保持期間・再確認期限・削除SLA
4. 生活拠点ぼかし・外部キャプチャ保護の具体化
5. 実データ候補のファイル・項目単位第三者権利調査
6. 公開利用規約・プライバシーポリシー論点整理
7. provider選定ADR・基本設計

## Cross-Cutting Gates

- 権利台帳4データセットは未着手 / No-Go。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 公開Repositoryへのデータ本体・位置情報・非公開証跡保存はNo-Go。
- Google Maps Datasets等へのアップロードはNo-Go。
- PRマージ・Issue Closeはprovider採用・契約・外部送信承認ではない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
- AI生成物は人間レビュー必須。
