# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #111として、JARTICオープンデータの第三者権利台帳と公開判定手順を定義する

## 進行中

- Issue #111: JARTICオープンデータの第三者権利台帳と公開判定手順を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/111
  - Branch: `docs/issue-111-jartic-third-party-rights-register`
  - Scope: 管理単位、証跡、利用可否、状態遷移、公開Go / No-Go、停止・再開、公開／非公開証跡境界を定義する
  - Initial Register Status: 4データセットすべて`未着手 / No-Go`
  - Data Action: 実データ取得・解析・登録を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Adoption: Google Maps Platform / JARTICを決定しない
  - Implementation: Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## 直近の完了済み

- Issue #109 / PR #110: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理
- Issue #107 / PR #108: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理
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
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 / 静的レイヤー境界を整理済み、権利台帳未確認のため公開保留 |
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
- Google出力の緯度・経度は適用契約確認後も最大30暦日の期限付き保存候補。
- polyline、distance、duration、traffic情報は永続保存しない。
- route response全体はlog / DB / analytics / backupへ保存しない。
- Google Routes結果とユーザー自身の走行記録を同一データとして保存しない。

## C-02 JARTICオープンデータの現在境界

### 用途

| データ種別 | 初期評価 | 用途境界 |
| --- | --- | --- |
| 交通規制情報 | 条件付き候補 | 基準年月時点の静的参照。現在有効な一時・緊急規制として表示しない |
| 断面交通量情報 | 条件付き候補 | 月次交通量の分析・参考。現在の渋滞・所要時間として表示しない |
| 交通量データ（国土交通省） | 条件付き候補 | 統計・傾向参照。上流由来・第三者権利を確認する |
| 交差点制御情報 | 内部調査候補 | 利用者向け解釈と権利確認まで公開MVPでは使用しない |

### 鮮度

- `最新公開版`は現在月、現在有効、リアルタイムを意味しない。
- 対象年月・作成基準日、JARTIC公開更新日、RouteGarage取得日、権利確認日を分離する。
- 月次データを現在の渋滞、事故、閉鎖、所要時間、緊急規制として表示しない。

### 保存

| 保存対象 | 初期方針 |
| --- | --- |
| 取得原本 | 条件付き保存候補 |
| 正規化・変換後データ | 条件付き保存候補 |
| 表示用GeoJSON等 | 条件付き保存候補 |
| 過去スナップショット | 条件付き保存候補。現在情報と分離する |
| 監査メタデータ | 保存候補 |
| 公開Repositoryへのデータ本体 | No-Go |
| Google Maps Datasetsへのアップロード | No-Go / 別途レビューが必要 |

## Issue #111 権利台帳の現在方針

### 管理単位

- データセット
- 対象年月・作成基準日
- 都道府県・地域
- 原本ファイル・ハッシュ
- 項目・カラム・地物
- 上流提供者・権利者候補

### 状態

| 状態 | 公開可否 |
| --- | --- |
| 未着手 | No-Go |
| 調査中 | No-Go |
| 確認済み | 全ゲート充足時のみGo候補 |
| 条件付き | 条件を強制できる場合のみGo候補 |
| 非許可 | No-Go |
| 失効・再確認必要 | No-Go |

### 初期レコード

| データセット | 状態 | 公開判定 |
| --- | --- | --- |
| 交通規制情報 | 未着手 | No-Go |
| 断面交通量情報 | 未着手 | No-Go |
| 交通量データ（国土交通省） | 未着手 | No-Go |
| 交差点制御情報 | 未着手 | No-Go |

### 主要ゲート

- データセット全体を一括で確認済みにしない。
- 証跡がない結果を確認済みにしない。
- 保存、加工、公衆送信、地図表示、履歴公開を独立判定する。
- 第三者権利が不明、必要許諾がない、証跡がない場合はNo-Go。
- 規約、説明書、ファイルハッシュ、許諾の変更で`失効・再確認必要`へ変更する。
- 権利未確認部分を含むファイルは原則No-Go。
- 非公開契約・回答・許諾書・個人情報は公開Repositoryへ保存しない。
- 権利侵害・安全影響の可能性が高い通報時は即時一時停止する。

## 問い合わせ送信ゲート

| 提供元 | 現在判定 | 主な理由 |
| --- | --- | --- |
| JARTIC Jシステム / VICS | No-Go | 運営主体・担当者・対象commit・各承認・証跡保管先・外部送信承認が未完了 |
| HERE Traffic API v7 | No-Go | 上記に加え、英語表現レビューと日本向け契約条件の確認が未完了 |

PRマージやIssue Closeは外部送信承認ではない。

## 未完了

- Issue #111の人間・法務・運用・安全レビュー
- 実データ候補の選定とファイル・項目単位の権利調査
- 出典・加工表示・対象年月・更新状態の画面要件
- 原本、変換後、履歴、監査メタデータの保持期間・削除方式
- Google Maps Datasets等へのアップロード可否レビュー
- RouteGarage公開利用規約・プライバシーポリシー論点整理
- Google Maps Platform契約主体・請求先・適用文書版の確認
- 問い合わせ送信の明示承認
- 地図・ルート・交通provider選定ADR
- provider adapterと保存境界の基本設計
- 交通情報・オービス情報の画面詳細設計
- 提供停止・訂正・通報・監査・事故・苦情対応の運用設計
- 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
- アーキテクチャ、DB、API、認証、地図連携の基本設計
- Next.js / Expo初期構築

## 触ってはいけない箇所

要件・契約・設計完了まで、以下は実施しない。

- JARTICオープンデータの実ダウンロード・解析・変換・公開
- Google Maps Datasetsへのアップロード
- 第三者への問い合わせ・許諾取得
- Next.js / Expo初期構築
- Maps JavaScript API実装
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform / Routes API連携
- HERE Maps / Traffic API連携
- JARTIC Jシステム / VICS連携
- オービス情報実装
- iOS / Android実装
- APIキー・トライアル取得
- 提供元への問い合わせ実送信
- 契約締結・見積取得
- 地図・ルート・交通providerの採用決定

## 次の優先作業

1. Issue #111の台帳・状態遷移・公開判定を人間・法務・運用・安全でレビューする。
2. 対象年月、出典、加工表示、更新状態の画面要件を定義する。
3. 原本、変換後、履歴、監査メタデータの保持・削除要件を定義する。
4. 実データ候補を選定する場合は別Issueで権利台帳へ登録する。
5. provider選定時にADRを作成する。
6. provider確定後に基本設計へ進む。

## Branch Cleanup

- `docs/issue-109-jartic-open-data-static-layer`: 削除済み
- `docs/issue-111-jartic-third-party-rights-register`: PRマージ後に削除確認
