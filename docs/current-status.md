# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex / ChatGPT
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #103として、地図基盤候補と交通データ候補の組合せ制約を比較する

## 進行中

- Issue #103: 地図基盤候補と交通データ候補の組合せ制約を比較する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/103
  - Scope: Google Maps Platform、JARTIC / VICS、HERE Traffic、Google Routesの組合せごとに、権利・技術・安全・運用境界を整理する
  - Branch: `docs/issue-103-map-traffic-combination-comparison`
  - 採用決定: 本Issueでは行わない
  - 問い合わせ・契約・実装: 本Issueでは行わない

## 直近の完了済み

- Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定
- PR #102: 交通情報提供元問い合わせの送信前レビュー台帳を追加（Issue #101対応）
- Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成
- PR #100: 交通情報提供元向け契約・技術問い合わせ票を追加（Issue #99対応）
- Issue #97: 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較
- PR #98: 交通情報データ提供元候補の比較を追加（Issue #97対応）
- Issue #93: 交通情報・オービス情報の法務・運用レビューを実施
- PR #96: 交通情報・オービス情報の法務・運用レビューを追加（Issue #93対応）
- Issue #91 / PR #92: 交通情報の由来区分と更新時刻欠落時の要件を修正
- Issue #89 / PR #90: 交通情報・オービス情報の安全・規約適合要件を定義
- Issue #18 / PR #19: 走行中操作を助長しないUI/UX詳細方針を定義
- Issue #12 / PR #13: 位置情報・走行履歴データポリシーを定義
- Issue #10: RouteGarage MVP画面一覧・画面遷移を定義
- Issue #8: RouteGarage MVP要件定義を作成

完了履歴の詳細はGitHubのclosed Issues、merged PRs、`docs/logs/`を正本とする。

## 問い合わせ送信ゲート

Issue #101 / PR #102で送信前レビュー台帳を整備したが、問い合わせ送信は未承認である。

| 提供元 | 現在判定 | 主な理由 |
| --- | --- | --- |
| JARTIC Jシステム / VICS | No-Go | 運営主体・担当者・連絡先・対象commit・各承認・証跡保管先・外部送信承認が未完了 |
| HERE Traffic API v7 | No-Go | 上記に加え、英語表現レビューと日本向け契約条件の確認が未完了 |

PRマージやIssue Closeは外部送信承認ではない。別の明示承認が得られるまで問い合わせを送信しない。

## Issue #103の初期比較

| 構成 | 初期評価 |
| --- | --- |
| Google Maps Platform + Google Routes API | 条件付き候補 |
| Google Maps Platform + JARTICオープンデータ | 用途限定候補 |
| Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 |
| 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。詳細は`docs/reviews/map-traffic-provider-combination-comparison.md`を参照する。

## 提供元候補の現在評価

| 候補 | 現在評価 | 次の扱い |
| --- | --- | --- |
| JARTICオープンデータ | 用途限定候補 | 静的・定期更新レイヤーに限定して検討 |
| JARTIC Jシステム / VICS | 問い合わせ未承認 | 送信ゲートはNo-Go。Google地図重畳・再提供・位置参照変換を要確認 |
| Google Maps Platform Routes API | 構成依存候補 | Google Mapとの同一提供元構成で契約・保存・帰属を確認 |
| HERE Traffic API v7 | 問い合わせ未承認 | HERE地図との同一提供元構成とGoogle地図との複数提供元構成を分離評価 |
| TomTom Traffic API | 現時点No-Go | 現行日本カバレッジの書面確認後に再評価 |
| 移動式取締り・警察位置リアルタイム情報 | 非対象 | MVP禁止を維持 |

## 未完了

- Issue #103の比較文書に対する人間レビュー
- 地図、ルート、交通providerの適用契約・版・帰属・キャッシュ条件の確認
- 問い合わせ送信の明示承認
- 初回問い合わせの実送信
- 提供元回答の受領・証跡保存・Go / No-Go再判定
- 地図プロバイダー選定ADR
- ルート計算プロバイダー選定ADR
- 交通情報プロバイダー選定ADR
- provider adapterと保存境界の基本設計
- 交通情報・オービス情報の表示粒度、注意文言、停止表示の画面詳細設計
- 提供停止、訂正、通報、監査、事故・苦情対応の運用設計
- 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
- 画像投稿・コミュニティ機能のモデレーション、通報、権利侵害対応要件
- 利用規約、プライバシーポリシー、問い合わせ導線、監査ログ運用要件
- 高リスク領域の要件間整合レビュー
- アーキテクチャ基本設計
- DB / API / 認証 / 地図連携の設計
- Next.js初期構築
- iOS / Android対応

## 既知問題

- Google Mapsのカスタムオーバーレイ機能は、JARTIC / HEREデータを契約上利用できることを意味しない。
- Google Routes APIのGoogle Maps Contentは非Google地図と組み合わせられない。
- JARTIC Jシステム / VICSのGoogle地図重畳、再提供、加工、キャッシュ条件は未確認。
- HERE TrafficのGoogle地図重畳は、両提供元の明示許諾がなく現時点No-Go。
- HERE地図 + HERE Trafficも、日本向け契約、キャッシュ、再提供、SLAを確認する必要がある。
- provider adapterを設けても、原データの保存・再配布・派生データ制限は回避できない。
- 地図と交通データの道路リンク・位置参照がずれた場合の検出・停止方式が未確定。
- 複数providerへの位置情報送信によるプライバシー影響が未評価。
- PRマージやIssue Closeは外部問い合わせ送信の承認ではない。

## 触ってはいけない箇所

要件・契約・設計完了まで、以下は実施しない。

- Next.js / Expo初期構築
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform連携
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

1. Issue #103の組合せ比較を人間レビューする。
2. C-01 Google Maps + Google Routesの適用契約・保存・帰属条件を確認する。
3. C-02 Google Maps + JARTICオープンデータの静的レイヤー用途・帰属UI・履歴保存をレビューする。
4. 問い合わせ送信が別途承認された場合、C-03 / C-05の重畳・再提供・位置参照・キャッシュ条件を提供元へ確認する。
5. C-04 Google Maps + HERE Trafficは両社の明示許諾までNo-Goを維持する。
6. provider選定時に地図・ルート・交通データ・adapter境界のADRを作成する。
7. provider確定後に基本設計へ進む。

## Branch Cleanup

- `docs/issue-99-provider-inquiry-templates`: 削除済み
- `docs/issue-101-provider-submission-review`: 削除済み
- `docs/issue-103-map-traffic-combination-comparison`: PRマージ後に削除確認

## Tool Operation Incident

- Issue #104・#105はbranch作成時のツール選択ミスによる誤作成。
- 両Issueは`誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- 正式な作業対象はIssue #103のみ。
