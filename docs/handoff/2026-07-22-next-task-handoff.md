# Handoff（2026-07-27 / Issue #109）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #108はマージ済み。
- Issue #107はclosed / completed、完了コメント追加済み。
- PR #108の作業branchは削除済み。
- Issue #109を作成し、PR #110をOpenした。
- C-02「Google Maps + JARTICオープンデータ」の静的レイヤー利用境界を整理。
- 現在判定は`用途限定候補 / 公開MVPレイヤーとしては保留`。
- 実データ取得、変換、Googleへのアップロード、provider採用、契約、APIキー取得、実装は行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #109: https://github.com/mizzz-ivr/RouteGarage/issues/109
- PR #110: https://github.com/mizzz-ivr/RouteGarage/pull/110
- Branch: `docs/issue-109-jartic-open-data-static-layer`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #108のマージを確認。
- Issue #107の完了を確認し、完了コメントを追加。
- PR #108の作業branch削除を確認。
- C-02と同等のOpen Issueがないことを確認。
- Issue #109とmain基点のbranchを作成。
- JARTICオープンデータページ・利用規約を確認。
- Google Maps JavaScript APIのData Layer、Ground Overlay、Datasets資料を確認。
- JARTICの4データ種別を用途・鮮度別に分類。
- 出典、加工、第三者権利、履歴保存、提供停止要件を整理。
- Google Maps標準帰属とJARTIC出典の表示境界を整理。
- Source of Truth、ログ、AIプロンプトログ、handoffを更新。
- PR #110を作成。

## Created Documents

- `docs/reviews/google-maps-jartic-open-data-static-layer-review.md`
- `docs/logs/2026-07-27-issue-109.md`
- `docs/ai-prompts/2026-07-27-issue-109-jartic-open-data-static-layer.md`

## Updated Documents

- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-27

### JARTIC

- 各種情報の提供（オープンデータ）
  - https://www.jartic.or.jp/service/opendata/
- オープンデータ利用規約
  - https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

### Google Maps Platform

- Maps JavaScript API Data Layer / GeoJSON example
  - https://developers.google.com/maps/documentation/javascript/examples/layer-data-dragndrop
- Ground Overlays
  - https://developers.google.com/maps/documentation/javascript/groundoverlays
- Google Maps Platform Datasets
  - https://developers.google.com/maps/documentation/javascript/dds-datasets/create-dataset
- Google Maps Platform Service Specific Terms
  - https://cloud.google.com/maps-platform/terms/maps-service-terms

## Current Decision

`用途限定候補 / 公開MVPレイヤーとしては保留`

採用決定ではない。

保留理由:

- 第三者権利をファイル・項目単位で確認していない
- 出典・加工表示・対象年月の画面要件が未確定
- 原本、変換後、履歴、監査データの保持・削除方式が未設計
- Google Maps Datasetsへのアップロード可否を確認していない
- 誤情報・権利侵害・規約変更時の責任者とSLAが未確定
- 人間・法務・運用レビューが未完了

## Dataset Classification

| データ種別 | 初期評価 | 用途境界 |
| --- | --- | --- |
| 交通規制情報 | 条件付き候補 | 基準年月時点の参照。現在有効な一時・緊急規制として使わない |
| 断面交通量情報 | 条件付き候補 | 月次分析・参考。現在の渋滞・所要時間として使わない |
| 交通量データ（国土交通省） | 条件付き候補 | 統計・傾向。上流由来・第三者権利を確認する |
| 交差点制御情報 | 内部調査候補 | 公開MVPでは使用しない |

## License Boundaries

JARTIC公式利用規約から確認した事項:

- 商用利用可能
- 複製、公衆送信、翻訳・変形、編集・加工が可能
- 出典表示が必要
- 加工時は加工した事実の表示が必要
- 加工後データをJARTIC、国、府省等の作成物と誤認させてはならない
- 第三者権利は利用者の責任で確認する
- データは予告なく変更、移転、削除される場合がある
- 利用規約はCC BY 4.0と互換性がある

商用利用可能であることを、第三者権利処理済みの根拠にしない。

## Freshness Boundaries

- 原則月初更新。
- 更新が遅れる場合がある。
- 更新前情報は提供元ページから取得できなくなる。
- 月次データをリアルタイム・現在情報として表示しない。
- 旧版を現在情報として自動表示しない。
- 対象年月、公開更新日、RouteGarage取得日を分離する。

状態候補:

- 最新公開版
- 更新遅延
- 旧版・履歴
- 権利確認中
- 提供停止

## Attribution Boundaries

JARTICレイヤーに表示する候補:

- データセット名
- 公益財団法人日本道路交通情報センター
- 対象ページURL
- 利用日
- 対象年月・作成基準日
- RouteGarageによる加工表示
- 現在の交通状況ではない旨

Google Maps標準帰属は削除・隠蔽・改変しない。

Google Maps標準帰属とJARTIC出典・加工表示を別に管理する。

## Storage Boundaries

| 保存対象 | 初期方針 |
| --- | --- |
| 取得原本 | 条件付き保存候補 |
| 正規化データ | 条件付き保存候補 |
| 表示用GeoJSON等 | 条件付き保存候補 |
| 過去スナップショット | 条件付き保存候補。現在情報と分離 |
| 監査メタデータ | 保存候補 |
| 公開Repositoryへのデータ本体 | No-Go |
| Google Maps Datasetsへのアップロード | No-Go |

必須監査メタデータ候補:

- データセット名
- 対象年月・作成基準日
- 公開更新日
- 取得日時
- 原本ファイル名・ハッシュ
- フォーマット・説明書バージョン
- 利用規約確認日・URL
- 変換処理バージョン
- 第三者権利状態
- 表示状態

## Third-Party Rights Gates

データセット、都道府県、ファイル、項目単位で記録する。

- 上流提供者
- 権利者表示
- 第三者権利の可能性
- 権利処理済みの明示
- 確認資料・証跡
- 保存・加工・公衆送信可否
- 判定

`未確認`または`非許可`は公開No-Go。

## Safety Decisions

- 月次データを現在の渋滞、事故、閉鎖、所要時間として表示しない。
- 一時的・緊急の交通規制判断に使用しない。
- 走行中の注視・操作・能動通知を前提にしない。
- 安全判断の唯一の根拠にしない。
- 利用者位置情報・走行履歴を不要に結合しない。
- 安全影響または権利侵害の可能性が高い通報時は調査完了まで停止する。

## Google Maps Datasets

本Issue・PRではJARTICデータをGoogle Maps Datasets等へアップロードしない。

採用候補とする場合は別Issueで次を確認する。

- Google側の保存場所・期間
- 公開範囲
- Google・委託先による処理
- 削除手順
- 第三者権利データのアップロード可否
- 契約終了・規約変更時の回収
- JARTIC出典・加工表示

## Go / No-Go Gates

1. 利用するデータセットと用途を特定した
2. ライブ交通として扱わない
3. 対象年月、公開更新日、取得日を表示できる
4. JARTIC出典・加工表示を実装できる
5. Google Maps標準帰属を維持できる
6. Google由来・JARTIC由来を視覚的に分離できる
7. 第三者権利をファイル・項目単位で確認した
8. 原本、変換後、表示用、履歴、監査データを分離できる
9. 規約・データ版・変換版・ハッシュを追跡できる
10. 旧版を現在情報として表示しない
11. 更新遅延、権利問題、規約変更で停止できる
12. Googleへ無確認でアップロードしない
13. 誤情報・権利侵害通報に対応できる
14. 法務、運用、安全、プロジェクト責任者が承認した

1項目でも未確認の場合は保留またはNo-Go。

## Inquiry Status

- JARTIC Jシステム / VICS: `No-Go（外部送信未承認）`
- HERE: `No-Go（external submission not approved）`
- PRマージ・Issue Closeは外部送信承認ではない。
- Issue #109では問い合わせを送信しない。

## Review Status

- PR #110は作成済み。
- 作成時点の差分: mainに対して6 commits / 6 files / behind 0。
- 最新headでmergeability、workflow、commit status、review threadsを再確認する。
- AI生成内容は人間レビュー必須。

## Rejected Alternatives

- 月次データをリアルタイム交通情報として扱う案
- 旧版を更新遅延時の現在情報として表示する案
- JARTIC出典とGoogle帰属を統合する案
- 商用利用可能を第三者権利処理済みと解釈する案
- 原本を加工後データで上書きする案
- Google Maps Datasetsへ先にアップロードする案
- データ本体を公開Repositoryへ保存する案

## Risks

- 月次情報が現在情報と誤認される
- 出典・加工表示が欠落する
- 第三者権利未確認のデータが公開される
- 旧版が無期限に現在情報として利用される
- 原本と加工後の対応を失う
- Google帰属とJARTIC出典が混在する
- Googleへアップロードしたデータを削除できない
- フォーマット変更・位置ずれを検出できない

## Remaining Tasks

1. PR #110の最新差分、mergeability、CI、レビュー状態を確認する。
2. 人間・法務・運用レビューを受ける。
3. マージ後にIssue #109完了とbranch削除を確認する。
4. 第三者権利台帳を別Issueで整備する。
5. 内部検証候補データセットを1種類に限定して別Issue化する。
6. provider選定時にADRを作成する。
7. provider確定後に基本設計へ進む。

## Branch Cleanup

削除済み:

- `docs/issue-99-provider-inquiry-templates`
- `docs/issue-101-provider-submission-review`
- `docs/issue-103-map-traffic-combination-comparison`
- `docs/issue-107-google-routes-contract-boundaries`

作業中:

- `docs/issue-109-jartic-open-data-static-layer`

## 注意事項

- AI生成内容は人間レビュー必須。
- 技術的表示可能性は契約・権利上の許諾ではない。
- JARTICデータは未取得。
- Google Maps Platform / JARTICは未採用。
- 法的助言、契約判断、採用決定ではない。
- 仕様・契約確定前に実装しない。
