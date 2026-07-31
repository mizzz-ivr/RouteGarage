# Active Issues

## Active

- Issue #121: JARTIC静的レイヤーの保持期間・再確認期限・削除SLA暫定基準を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/121
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/123
  - Branch: `docs/issue-121-retention-sla-baseline`
  - Status: In Progress / PR #123人間レビュー待ち
  - Main document: `docs/requirements/jartic-static-layer-retention-recheck-deletion-sla-baseline.md`
  - Scope: データ分類別の暫定保持上限、月次・規約・権利の再確認期限、表示停止・隔離・削除SLA、法的保全再確認、Go / No-Go判定
  - Current Decision: 数値はRouteGarage内部の暫定候補。法定期間、JARTIC要求値、契約値、本番SLAとして確定しない
  - Data Action: JARTIC実データ、利用者位置情報、走行履歴を取得・保存・変換しない
  - External Action: provider問い合わせ、契約、APIキー取得を行わない
  - Implementation: Next.js / Expo / Maps SDK / DB / API / Auth / Infra / Storage / Backupを実装しない

## Issue #121 Current Gates

### 期間区分

- `PROVISIONAL_OPERATIONAL_LIMIT`: RouteGarage内部の暫定保持上限
- `RECHECK_DEADLINE`: 規約・権利・公開版・例外等の再確認期限
- `RESPONSE_SLA`: 表示停止・隔離・計画承認等の応答期限
- `DELETION_COMPLETION_SLA`: 全保存先の削除完了期限
- `LEGAL_MINIMUM`: 法令または法務確認済み最低保持期間
- `LEGAL_HOLD`: 法務承認済み限定保全

内部暫定値を法定期間、契約期間、JARTIC要求値として扱わない。

### 有効保持上限

次のうち最も早い期限を採用候補とする。

1. 契約・利用規約・provider条件による上限
2. 第三者権利者・上流提供者が認める上限
3. 安全・プライバシー上の上限
4. Issue #121の内部暫定上限
5. 保存目的終了日時

1つでも確認不能な場合は保存開始・保存継続・表示No-Go。

### 暫定保持上限候補

| 分類 | 候補 |
| --- | --- |
| 取得原本 | 取得から90日、現行版と直前2公開サイクルまで |
| 説明書・規約スナップショット | 最終利用または関連削除完了から365日 |
| 正規化・加工データ | 親の早い期限、最大90日 |
| 表示用データ | 現行承認版のみ。旧版アクティブ保持0日 |
| ロールバック隔離 | 最大7日 |
| 履歴 | 初期値は保持しない。個別承認時最大90日 |
| 一時ファイル | 処理終了から24時間、絶対上限72時間 |
| キャッシュ・インデックス | TTL最大24時間 |
| 最小監査メタデータ | 365日 |
| 削除墓標・再取得拒否 | 初回最大365日、90日ごと再確認 |
| 削除完了証跡 | 365日 |
| バックアップ実失効 | 削除確定から35日以内 |

### 再確認期限候補

- 取得・公開判定前: 毎回
- JARTIC月次更新検知後: 3営業日以内
- 毎月7日までに更新確認不能: `UPDATE_DELAYED`
- 利用規約: 取得前毎回、定期7日ごと
- 第三者権利: 公開判定前毎回、最終確認から最大30日
- 全権利台帳棚卸し: 90日ごと
- 通常例外・法的保全: 30日ごと

### 通常の削除確定SLA候補

- 新規配信・再取得・再生成停止: 15分以内
- `DELETION_PENDING`遷移: 4時間以内
- 削除計画承認: 1営業日以内
- オンライン本体・派生物削除: 3営業日以内
- 外部保存先削除確認: 7暦日以内
- バックアップを含む削除完了: 35暦日以内

### 個人情報・正確位置・秘密情報混入SLA候補

- 新規配信停止: 15分以内
- アクセス遮断・隔離: 1時間以内
- 影響範囲特定: 4時間以内
- オンライン削除: 24時間以内
- 外部保存先削除: 72時間以内
- バックアップ実失効: 35日以内または承認済みのより短い期限

### `LEGAL_HOLD`

- 法務承認者、目的、範囲、開始・終了条件、再確認日、アクセス可能者、解除後削除計画を必須とする。
- 30日ごとに法務再確認する。
- 初回保全期間の内部候補は最大90日とする。
- 解除後4時間以内に削除義務を再判定し、1営業日以内に削除処理を再開する。

### No-Go

- 法的最低保持期間を根拠なしに設定する。
- 暫定値を本番値・法定期間として扱う。
- 規約・第三者権利を期限内に確認できない。
- 外部CDNを1時間以内に無効化できない。
- 外部保存先を7日以内に削除確認できない。
- バックアップを35日以内に実失効確認できない。
- 削除予定日時だけで完了証跡を発行する。
- SLA超過を理由に表示・再利用する。

## Recently Completed

- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
  - Merge commit: `8c3fc97cdd10dc3ce5ba0f78c7cee41a0e2c3a5b`
- Issue #117 / PR #118: PR #116の保持・削除レビュー指摘対応
  - Merge commit: `f452af33b9677c2b66d8b160f0b913dec57e54fe`
- Issue #115 / PR #116: JARTIC静的レイヤーの保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
- Issue #113 / PR #114: JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112: 第三者権利台帳
- Issue #109 / PR #110: JARTIC静的レイヤー利用境界
- Issue #107 / PR #108: Google Routes契約・保存・帰属境界

## Review Status

- Issue #121: Open
- PR #123: Open / mergeable
- `main`比較: 6 commits / 6 files / behind 0（PR作成時点）
- 変更範囲: docsのみ
- 未解決review thread: 0件
- AI支援セルフレビュー: COMMENTで記録済み / 文書整合性ブロッカーなし
- Codex自動レビュー: 利用上限のため未実施
- GitHub Actions / commit status: workflow・status checkなし
- 実装・実データ・外部送信: なし
- 人間・法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

## Upcoming

1. PR #123の人間・法務・運用・安全・セキュリティ・プライバシーレビュー
2. 暫定値の妥当性・実現性評価と指摘反映
3. review thread、mergeability、workflow/status再確認
4. 問題がなければPRマージ・Issue完了・branch削除確認
5. 実データ候補のファイル・項目単位第三者権利調査
6. 公開利用規約・プライバシーポリシー論点整理
7. provider選定ADR・基本設計

## Cross-Cutting Gates

- 権利台帳4データセットは未着手 / No-Go。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 公開Repositoryへのデータ本体・位置情報・走行履歴・非公開証跡保存はNo-Go。
- Google Maps Datasets等へのアップロードはNo-Go。
- 実利用者の位置・走行履歴を要件テストへ使用しない。
- PRマージ・Issue Closeはprovider採用・契約・実装・外部送信承認ではない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
- AI生成物は人間レビュー必須。
