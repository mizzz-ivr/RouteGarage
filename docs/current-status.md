# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex / ChatGPT
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #107として、Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する

## 進行中

- Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/107
  - Scope: 適用契約、表示、キャッシュ・保存、帰属、監査、プライバシー、障害時の境界をGoogle公式一次資料ベースで整理する
  - Branch: `docs/issue-107-google-routes-contract-boundaries`
  - Initial Decision: `条件付き候補を維持 / 基本設計前提としては保留`
  - Adoption: Google Maps Platform / Routes APIを決定しない
  - External Action: 契約、見積、APIキー取得を行わない
  - Implementation: Next.js / Expo / Maps / Routes / DB / API / Auth / Infraを実装しない

## 直近の完了済み

- Issue #103: 地図基盤候補と交通データ候補の組合せ制約を比較
- PR #106: 地図基盤と交通データの組合せ制約を比較（Issue #103対応）
- Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定
- PR #102: 交通情報提供元問い合わせの送信前レビュー台帳を追加（Issue #101対応）
- Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成
- PR #100: 交通情報提供元向け契約・技術問い合わせ票を追加（Issue #99対応）
- Issue #97: 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較
- PR #98: 交通情報データ提供元候補の比較を追加（Issue #97対応）
- Issue #93 / PR #96: 交通情報・オービス情報の法務・運用レビュー
- Issue #91 / PR #92: 交通情報の由来区分と更新時刻欠落時の要件を修正
- Issue #89 / PR #90: 交通情報・オービス情報の安全・規約適合要件を定義
- Issue #18 / PR #19: 走行中操作を助長しないUI/UX詳細方針を定義
- Issue #12 / PR #13: 位置情報・走行履歴データポリシーを定義
- Issue #10: RouteGarage MVP画面一覧・画面遷移を定義
- Issue #8: RouteGarage MVP要件定義を作成

完了履歴の詳細はGitHubのclosed Issues、merged PRs、`docs/logs/`を正本とする。

## 地図・交通provider組合せの現在評価

| ID | 構成 | 現在評価 |
| --- | --- | --- |
| C-01 | Google Maps Platform + Google Routes API | 条件付き候補 / Issue #107で契約・保存・帰属を確認中 |
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 |
| C-03 | Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| C-04 | Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| C-05 | HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 / 問い合わせ未承認 |
| C-06 | 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。

## Issue #107の確認結果

### 表示

- Routes API結果を地図上へ表示する場合はGoogle Mapを使用する。
- Routes API結果は地図なし表示も可能だが、Google Maps帰属が必要。
- Routes APIのGoogle Maps Contentを非Google地図と組み合わせない。
- Google Maps ContentとRouteGarage独自・第三者コンテンツを視覚的に分離する。

### 保存

| 項目 | 初期方針 |
| --- | --- |
| Place ID | 長期保存候補。古いIDの更新確認が必要 |
| Google出力の緯度・経度 | 適用契約確認後も最大30暦日の期限付き保存候補 |
| polyline / distance / duration / traffic情報 | 永続保存しない |
| route response全体 | ログ・DB・分析・backupへ保存しない |
| RouteGarage内部request ID / HTTP status / latency | 正確な位置・Google Contentを含めない運用メタデータ候補 |
| ユーザー自身が登録したデータ | Google Maps Contentと分離し、位置情報ポリシーに従い管理 |

### 契約・規約

- 契約主体・請求先住所によりEEA / 非EEAの適用規約が異なるため未確定。
- Customer Applicationには公開利用規約・プライバシーポリシーが必要。
- 現在の公開資料を、将来の契約版として固定しない。
- 採用時は実際の契約主体に適用される文書・版を人間が確認する。

### SLA・縮退

- Routes APIはGoogle Maps Platform Core Services Summaryに掲載されている。
- Google Maps Platform SLAのSLOをRouteGarage利用者への可用性保証として転用しない。
- API停止時に保存済みGoogleルート結果を無期限再表示しない。
- Google関連機能だけを停止し、RouteGarage独自データを閲覧できる縮退を後続設計候補とする。

## 問い合わせ送信ゲート

Issue #101 / PR #102で送信前レビュー台帳を整備したが、JARTIC / VICS・HEREへの問い合わせ送信は未承認である。

| 提供元 | 現在判定 | 主な理由 |
| --- | --- | --- |
| JARTIC Jシステム / VICS | No-Go | 運営主体・担当者・対象commit・各承認・証跡保管先・外部送信承認が未完了 |
| HERE Traffic API v7 | No-Go | 上記に加え、英語表現レビューと日本向け契約条件の確認が未完了 |

PRマージやIssue Closeは外部送信承認ではない。

## 未完了

- Issue #107レビュー文書の人間レビュー
- Google Maps Platform契約主体・請求先住所・適用文書版の確認
- Google Maps ContentとRouteGarage独自データの保存境界に対する法務レビュー
- 30日以内削除、backup削除、通常ログ混入防止の運用要件
- Google Maps帰属UIの画面要件
- RouteGarage公開利用規約・プライバシーポリシー論点整理
- C-02 Google Maps + JARTICオープンデータの静的レイヤー用途レビュー
- 問い合わせ送信の明示承認
- 提供元回答の受領・証跡保存・Go / No-Go再判定
- 地図・ルート・交通provider選定ADR
- provider adapterと保存境界の基本設計
- 交通情報・オービス情報の表示粒度、注意文言、停止表示の画面詳細設計
- 提供停止、訂正、通報、監査、事故・苦情対応の運用設計
- 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
- 画像投稿・コミュニティ機能のモデレーション、通報、権利侵害対応要件
- アーキテクチャ基本設計
- DB / API / 認証 / 地図連携の設計
- Next.js初期構築
- iOS / Android対応

## 既知問題

- 契約主体・請求先住所が未確定で、EEA / 非EEAの適用規約を確定できない。
- Place ID以外のGoogle Maps Contentを長期保存可能と誤認するリスクがある。
- Google出力座標とユーザー自身が登録した座標を混同するリスクがある。
- backup、analytics、debug dumpへGoogle Maps Contentが残るリスクがある。
- Google Maps ContentとRouteGarage独自・第三者データの帰属が混在するリスクがある。
- Google SLAをRouteGarageの利用者向けSLOとして誤表示するリスクがある。
- Google Routes結果と走行履歴を長期結合すると、契約・位置プライバシーリスクが高まる。
- Google Mapsのカスタムオーバーレイ機能は、JARTIC / HEREデータを契約上利用できることを意味しない。
- provider adapterを設けても、原データの保存・再配布・派生データ制限は回避できない。

## 触ってはいけない箇所

要件・契約・設計完了まで、以下は実施しない。

- Next.js / Expo初期構築
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform連携
- Routes API呼び出し
- HERE Maps / Traffic API連携
- JARTIC / VICS連携
- 交通情報API連携
- オービス情報実装
- オービス接近通知・音声通知
- iOS / Android実装
- APIキー・トライアル取得
- 提供元への問い合わせ実送信
- 契約締結・見積取得
- 地図・ルート・交通providerの採用決定

## 次の優先作業

1. Issue #107の契約・保存・帰属境界レビューを人間確認する。
2. Google出力とRouteGarage独自データの保存分類・ログ禁止項目をレビューする。
3. C-02 Google Maps + JARTICオープンデータの静的レイヤー用途・帰属・履歴保存を整理する。
4. Google Maps Platformを採用候補として絞る場合、契約主体・請求・適用文書を確認する。
5. provider選定時に地図・ルート・交通データ・adapter境界のADRを作成する。
6. provider確定後に基本設計へ進む。

## Branch Cleanup

- `docs/issue-99-provider-inquiry-templates`: 削除済み
- `docs/issue-101-provider-submission-review`: 削除済み
- `docs/issue-103-map-traffic-combination-comparison`: 削除済み
- `docs/issue-107-google-routes-contract-boundaries`: PRマージ後に削除確認

## Tool Operation Incident

- Issue #104・#105はbranch作成時のツール選択ミスによる誤作成。
- 両Issueは`誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- 正式な進行中IssueはIssue #107のみ。
