# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex / ChatGPT
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #109として、Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する

## 進行中

- Issue #109: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/109
  - Branch: `docs/issue-109-jartic-open-data-static-layer`
  - Scope: 用途、月次鮮度、出典、加工、第三者権利、履歴保存、Google帰属、提供停止を整理する
  - Current Decision: `用途限定候補 / 公開MVPレイヤーとしては保留`
  - Adoption: Google Maps Platform / JARTICオープンデータを決定しない
  - Data Action: 実データ取得・変換・アップロードを行わない
  - Implementation: Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## 直近の完了済み

- Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理
- PR #108: Google Routesの契約・保存・帰属境界を整理（Issue #107対応）
- Issue #103 / PR #106: 地図基盤と交通データの組合せ制約を比較
- Issue #101 / PR #102: 交通情報提供元問い合わせの送信前レビュー台帳を整備
- Issue #99 / PR #100: JARTIC / VICS・HERE向け問い合わせ文書を整備
- Issue #97 / PR #98: 交通情報データ提供元候補を比較
- Issue #93 / PR #96: 交通情報・オービス情報の法務・運用レビュー
- Issue #91 / PR #92: 交通情報の由来・更新時刻要件を修正
- Issue #89 / PR #90: 交通情報・オービス情報の安全・規約適合要件を定義
- Issue #18 / PR #19: 走行中操作を助長しないUI/UX詳細方針を定義
- Issue #12 / PR #13: 位置情報・走行履歴データポリシーを定義

完了履歴の詳細はGitHubのclosed Issues、merged PRs、`docs/logs/`を正本とする。

## 地図・交通provider組合せの現在評価

| ID | 構成 | 現在評価 |
| --- | --- | --- |
| C-01 | Google Maps Platform + Google Routes API | 条件付き候補 / 契約・保存・帰属境界を整理済み、基本設計前提としては保留 |
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 / Issue #109で静的レイヤー境界を確認中 |
| C-03 | Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| C-04 | Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| C-05 | HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 / 問い合わせ未承認 |
| C-06 | 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。

## C-01 Google Routesの現在境界

- Routes API結果を地図表示する場合はGoogle Mapを使用する。
- 地図なし表示ではGoogle Maps帰属が必要。
- 非Google地図との併用はNo-Go。
- Place IDは長期保存候補。
- Google出力の緯度経度は、適用契約確認後も最大30暦日の期限付き保存候補。
- polyline、distance、duration、traffic情報は永続保存しない。
- route response全体はlog / DB / analytics / backupへ保存しない。
- Google Routes結果とユーザー自身の走行記録を同一データとして保存しない。
- 契約主体、請求先、EEA / 非EEA適用区分、削除運用、帰属UIが未確定のため採用は保留。

## C-02 JARTICオープンデータの現在境界

### データ分類

| データ種別 | 初期評価 | 用途境界 |
| --- | --- | --- |
| 交通規制情報 | 条件付き候補 | 基準年月時点の静的参照。現在有効な一時・緊急規制として表示しない |
| 断面交通量情報 | 条件付き候補 | 月次交通量の分析・参考表示。現在の渋滞・所要時間として表示しない |
| 交通量データ（国土交通省） | 条件付き候補 | 統計・傾向参照。上流由来・第三者権利を確認する |
| 交差点制御情報 | 内部調査候補 | 利用者向け解釈と権利確認まで公開MVPでは使用しない |

### 必須表示

- データセット名
- 対象年月または作成基準日
- JARTIC公開更新日
- RouteGarage取得日
- JARTIC出典
- 加工した場合の加工表示
- 「現在の交通状況を示すものではない」旨
- 欠落、遅延、誤差の可能性

### 保存境界

| 保存対象 | 初期方針 |
| --- | --- |
| 取得原本 | 条件付き保存候補 |
| 正規化・変換後データ | 条件付き保存候補 |
| 表示用GeoJSON等 | 条件付き保存候補 |
| 過去スナップショット | 条件付き保存候補。現在情報と分離する |
| 監査メタデータ | 保存候補 |
| 公開Repositoryへのデータ本体 | No-Go |
| Google Maps Datasetsへのアップロード | No-Go / 別途レビューが必要 |

### 第三者権利

- 商用利用可能という記載だけで、第三者権利処理済みと判断しない。
- データセット、都道府県、ファイル、項目単位で権利状態を記録する。
- `未確認`または`非許可`は公開No-Goとする。
- 安全影響または権利侵害の可能性が高い通報時は、調査完了まで対象を一時停止する。

## 問い合わせ送信ゲート

Issue #101 / PR #102で送信前レビュー台帳を整備したが、JARTIC Jシステム / VICS・HEREへの問い合わせ送信は未承認である。

| 提供元 | 現在判定 | 主な理由 |
| --- | --- | --- |
| JARTIC Jシステム / VICS | No-Go | 運営主体・担当者・対象commit・各承認・証跡保管先・外部送信承認が未完了 |
| HERE Traffic API v7 | No-Go | 上記に加え、英語表現レビューと日本向け契約条件の確認が未完了 |

PRマージやIssue Closeは外部送信承認ではない。

## 未完了

- Issue #109レビュー文書の人間・法務・運用レビュー
- JARTICデータセット・ファイル単位の第三者権利台帳
- 対象年月、出典、加工表示、注意文言の画面要件
- 原本、変換後、履歴、監査メタデータの保持期間・削除方式
- Google Maps Datasets等へのアップロード可否レビュー
- Google Maps Platform契約主体・請求先・適用文書版の確認
- Google Routes期限付き保存の削除・ログ・backup運用設計
- RouteGarage公開利用規約・プライバシーポリシー論点整理
- 問い合わせ送信の明示承認
- 地図・ルート・交通provider選定ADR
- provider adapterと保存境界の基本設計
- 交通情報・オービス情報の画面詳細設計
- 提供停止・訂正・通報・監査・事故・苦情対応の運用設計
- 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
- アーキテクチャ基本設計
- DB / API / 認証 / 地図連携の設計
- Next.js / Expo初期構築

## 既知問題

- 月次データを現在の交通状況として誤認させるリスクがある。
- 更新前データが提供元ページから取得できなくなるため、履歴・再現性設計が必要。
- 第三者権利部分が明確に特定されていない場合がある。
- 出典・加工表示が画面変更で欠落するリスクがある。
- 原本・加工後・履歴スナップショットの対応を失うリスクがある。
- Google Maps標準帰属とJARTIC出典が混在するリスクがある。
- Google Maps Datasetsへ無確認でアップロードすると、保存・削除・公開範囲を制御できない可能性がある。
- provider adapterを設けても、各providerの権利・保存・再配布制限は回避できない。

## 触ってはいけない箇所

要件・契約・設計完了まで、以下は実施しない。

- JARTICオープンデータの実ダウンロード・変換・公開
- Google Maps Datasetsへのアップロード
- Next.js / Expo初期構築
- Maps JavaScript API実装
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform連携
- Routes API呼び出し
- HERE Maps / Traffic API連携
- JARTIC Jシステム / VICS連携
- オービス情報実装
- iOS / Android実装
- APIキー・トライアル取得
- 提供元への問い合わせ実送信
- 契約締結・見積取得
- 地図・ルート・交通providerの採用決定

## 次の優先作業

1. Issue #109の静的レイヤー利用境界を人間・法務・運用でレビューする。
2. 第三者権利台帳、出典・加工表示、履歴・削除要件を確定する。
3. 内部検証候補とするデータセットを1種類に限定して別Issue化する。
4. RouteGarage公開利用規約・プライバシーポリシー論点を整理する。
5. Google Maps Platformを採用候補として絞る場合、契約主体・請求・適用文書を確認する。
6. provider選定時に地図・ルート・交通データ・adapter境界のADRを作成する。
7. provider確定後に基本設計へ進む。

## Branch Cleanup

- `docs/issue-99-provider-inquiry-templates`: 削除済み
- `docs/issue-101-provider-submission-review`: 削除済み
- `docs/issue-103-map-traffic-combination-comparison`: 削除済み
- `docs/issue-107-google-routes-contract-boundaries`: 削除済み
- `docs/issue-109-jartic-open-data-static-layer`: PRマージ後に削除確認
