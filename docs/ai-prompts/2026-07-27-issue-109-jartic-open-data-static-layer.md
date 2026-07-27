# AIプロンプトログ（2026-07-27 / Issue #109）

## User Request

- PR #108マージ後の次タスクを進める。
- RepositoryをSource of TruthとしてIssue駆動で継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/109

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

Google Maps Platform上でJARTICオープンデータを静的・定期更新レイヤーとして利用する場合の、用途、鮮度、出典、加工、第三者権利、履歴保存、Google Maps帰属、停止条件を整理する。

C-02のGo / No-Goゲートを定義するが、データ取得、アップロード、provider採用、実装は行わない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/reviews/map-traffic-provider-combination-comparison.md`
- `docs/reviews/google-routes-contract-storage-attribution-review.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
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

## Required Output

- `docs/reviews/google-maps-jartic-open-data-static-layer-review.md`
- `docs/logs/2026-07-27-issue-109.md`
- `docs/ai-prompts/2026-07-27-issue-109-jartic-open-data-static-layer.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Required Analysis

- JARTICの4データ種別を分類する
- 月次更新と更新遅延を考慮する
- ライブ交通用途と静的レイヤー用途を分離する
- 出典、利用日、対象年月、取得日、加工表示を定義する
- 加工後データをJARTIC等の作成物と誤認させない
- 第三者権利の確認単位・台帳・No-Goを定義する
- 原本、正規化、表示用、履歴、監査メタデータを分離する
- 更新前データが取得できなくなる点を履歴・再現性へ反映する
- 旧版を現在情報として表示しない
- Google Maps標準帰属とJARTIC出典・加工表示を分離する
- Google Mapsの技術機能と権利許諾を混同しない
- Google Maps Datasetsへのアップロードを未承認とする
- 規約変更、第三者権利、誤情報、位置ずれ時の停止条件を定義する
- Go / No-Goゲートを定義する

## Safety Constraints

- 月次データを現在の渋滞・事故・閉鎖・所要時間として表示しない
- 一時的・緊急の交通規制として表示しない
- 走行中の注視・操作・能動通知を前提にしない
- データを安全判断の唯一の根拠にしない
- 取締り回避を目的とする表示・通知を扱わない
- 利用者位置情報・走行履歴を不要に結合しない
- 第三者権利不明時は公開しない
- 判断不能時はNo-Go

## Commercial Constraints

- 商用利用可能という記載だけで第三者権利処理済みと判断しない
- 出典と加工表示を必須にする
- 規約・データ・説明書の版を記録する
- データ・規約変更時に停止・削除できるようにする
- 公開Repositoryへデータ本体を保存しない
- AIの要約だけで法務・採用判断しない

## Implementation Prohibitions

- JARTICデータの実ダウンロード
- 変換処理・GeoJSON生成
- Google Maps Datasetsへのアップロード
- Google Maps Platform / JARTICの採用決定
- Google Cloud契約・請求設定・APIキー取得
- Maps JavaScript API / Expo / Next.js実装
- DB / API / Auth / Infra / Monitoring設計・実装
- 法的助言・契約条項の最終判断

## Initial Decision

`用途限定候補 / 公開MVPレイヤーとしては保留`

## Validation

- docsのみの差分
- 新規Markdownが非空
- ライブ交通用途を禁止
- 出典・加工・第三者権利要件がある
- 原本・加工後・履歴・監査を分離
- Google帰属とJARTIC出典を分離
- Google Maps Datasetsへのアップロードなし
- 実データ・契約・APIキー・実装なし
- Source of TruthがIssue #109で整合
- AI生成物の人間レビューを明記

## Expected PR Title

`docs: JARTICオープンデータ静的レイヤーの利用境界を整理`
