# Handoff（2026-07-31 / Issue #121）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #120は2026-07-31にマージ済み。
- Issue #119はcompleted。
- Issue #121として、JARTIC静的レイヤーの保持期間・再確認期限・削除SLAの内部暫定基準を定義中。
- 数値は法定期間、JARTIC要求値、契約値、本番SLAではない。
- 実データ取得・保存・変換、Next.js / Expo / Maps実装、provider採用、APIキー、外部問い合わせは行っていない。

## Current Issue / Branch

- Issue #121: https://github.com/mizzz-ivr/RouteGarage/issues/121
- Branch: `docs/issue-121-retention-sla-baseline`
- Main document: `docs/requirements/jartic-static-layer-retention-recheck-deletion-sla-baseline.md`
- Base requirements:
  - `docs/requirements/jartic-static-layer-data-retention-deletion-requirements.md`
  - `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`

## Previous Completion

- Issue #119 / PR #120
  - 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
  - Merge commit: `8c3fc97cdd10dc3ce5ba0f78c7cee41a0e2c3a5b`
  - Issue: completed
- Issue #117 / PR #118
  - PR #116の保持・削除レビュー指摘対応
  - Merge commit: `f452af33b9677c2b66d8b160f0b913dec57e54fe`
- Issue #115 / PR #116
  - JARTIC静的レイヤーの保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
- Issue #113 / PR #114
  - JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112
  - JARTICオープンデータ第三者権利台帳

PRマージ・Issue Closeは、provider採用、契約、実データ公開、外部問い合わせ、実装開始の承認ではない。

## Official Sources Checked

確認日: 2026-07-31

### JARTIC

- https://www.jartic.or.jp/service/opendata/
- https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

確認事項:

- 各情報は毎月月初に更新される。
- 更新前の情報は公開ページから取得できなくなる。
- 更新が遅れる場合がある。
- 出典表示と加工表示が必要。
- 第三者権利は利用者責任で確認する。
- データ・利用規約は変更、移転、削除、改定される場合がある。
- 一律の保存期間・削除SLAは記載されていない。

### 個人情報保護委員会

- https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/
- https://www.ppc.go.jp/personalinfo/faq/APPI_QA/
- https://www.ppc.go.jp/news/careful_information/data_syokyo/

確認事項:

- 個人情報に一律の保存期間は定められていない。
- 利用目的に応じて保存期間を設定する。
- 不要になった場合は必要以上に長期化させず、復元不可能な方法で消去する考え方が示されている。

本IssueはJARTIC公開データを主対象とし、個人利用者の位置情報・走行履歴・アカウント情報の最終保持期間を決定しない。

## Period Categories

- `PROVISIONAL_OPERATIONAL_LIMIT`: RouteGarage内部の暫定保持上限
- `RECHECK_DEADLINE`: 規約・権利・公開版・例外の再確認期限
- `RESPONSE_SLA`: 表示停止・隔離・計画承認等の応答期限
- `DELETION_COMPLETION_SLA`: 全保存先の削除完了期限
- `LEGAL_MINIMUM`: 法令または法務確認済み最低保持期間
- `LEGAL_HOLD`: 法務承認済み限定保全

内部暫定値を法定期間・契約期間・JARTIC要求値として扱わない。

## Provisional Retention Baseline

| 分類 | 内部暫定候補 |
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

有効保持上限は、契約・利用規約、第三者権利、安全・プライバシー、本書の暫定値、保存目的終了のうち最も早い期限とする。

## Recheck Baseline

- 取得・公開判定前: 毎回
- JARTIC月次更新検知後: 3営業日以内
- 毎月7日までに更新確認不能: `UPDATE_DELAYED`
- 利用規約: 取得前毎回、定期7日ごと
- 第三者権利: 公開判定前毎回、最終確認から最大30日
- 全権利台帳棚卸し: 90日ごと
- 通常例外・法的保全: 30日ごと

## Deletion SLA Baseline

### Standard Confirmed Deletion

- 新規配信・再取得・再生成停止: 15分以内
- `DELETION_PENDING`: 4時間以内
- 削除計画承認: 1営業日以内
- オンライン本体・派生物削除: 3営業日以内
- 外部保存先削除確認: 7暦日以内
- バックアップを含む削除完了: 35暦日以内

### Personal Data / Exact Location / Secret Contamination

- 新規配信停止: 15分以内
- アクセス遮断・隔離: 1時間以内
- 影響範囲特定: 4時間以内
- オンライン削除: 24時間以内
- 外部保存先削除: 72時間以内
- バックアップ実失効: 35日以内または承認済みのより短い期限
- 法務・セキュリティ・プライバシーへのエスカレーション: 即時

## Legal Hold

- 法務承認者、目的、範囲、開始・終了条件、再確認日、アクセス可能者、解除後削除計画を必須とする。
- 30日ごとに法務再確認する。
- 初回保全期間の内部候補は最大90日。
- 解除後4時間以内に削除義務を再判定する。
- 1営業日以内に削除処理を再開する。
- 元期限超過時は`DELETION_OVERDUE`として即時エスカレーションする。

## No-Go Gates

- provider・契約・第三者権利の上限を確認できない。
- 法的最低保持期間の根拠・承認がない。
- 規約・権利・公開版を期限内に確認できない。
- 外部CDNを1時間以内に無効化できない。
- 外部保存先を7日以内に削除確認できない。
- バックアップを35日以内に実失効確認できない。
- 削除予定日時だけで完了証跡を発行する。
- `LEGAL_HOLD`に期限・再確認日・解除後削除計画がない。
- 個人情報・正確位置・秘密情報混入時の緊急SLAを満たせない。
- AIだけで法務・プライバシー判断を確定する。

## Source of Truth Files

- `docs/requirements/jartic-static-layer-retention-recheck-deletion-sla-baseline.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-07-31-issue-121.md`
- `docs/ai-prompts/2026-07-31-issue-121-retention-sla-baseline.md`

## External Workspaces

- Linear Project: https://linear.app/mizzzjp/project/routegarage-71286ad9056c
  - 無料Issue上限により個別Linear Issueは作成しない。
  - GitHub Issue #121を実行タスクの正本とする。
- Notion Hub: https://app.notion.com/p/3ad7322f39fa81e9be8fe370b4140720
  - Issue #121 / PRを現在タスクとして同期する。

## Remaining Tasks

1. Source of Truth差分を確認する。
2. `main`比較、changed files、behindを確認する。
3. PRを作成する。
4. review thread、mergeability、workflow/statusを確認する。
5. AI支援セルフレビューをCOMMENTで記録する。
6. 人間・法務・運用・安全・セキュリティ・プライバシーレビューを受ける。
7. 暫定値の妥当性・実現性に関する指摘を反映する。
8. 問題がなければPRマージ・Issue完了・branch削除を確認する。
9. 後続で実データ候補のファイル・項目単位第三者権利調査を開始する。

## Notes

- AI生成内容は人間レビュー必須。
- 90日、365日、35日等は内部暫定候補であり、法定期間・JARTIC要求値・契約値ではない。
- 実データ・実装・外部送信は行っていない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
