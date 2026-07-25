# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #103: 地図基盤候補と交通データ候補の組合せ制約を比較する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/103
  - Status: In Progress
  - Scope: Google Maps Platform、JARTIC / VICS、HERE Traffic、Google Routesの組合せごとに、権利・技術・安全・運用境界を比較する
  - Branch: `docs/issue-103-map-traffic-combination-comparison`
  - Adoption: 地図・ルート・交通providerを決定しない
  - External Action: 問い合わせ・契約・見積を行わない
  - Implementation: Next.js / Expo / API / DB / Auth / Infraを実装しない

## Recently Completed

### Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/101
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/102
- Note: 送信前レビュー台帳、差し込み情報、承認、対象文書版、証跡保管、No-Go判定を整備。問い合わせは未送信で、branchは削除済み。

### Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/99
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/100
- Note: 初回問い合わせ文、詳細質問票、共通前提、回答記録・Go / No-Go様式を整備。

### Issue #97: 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/97
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/98
- Note: JARTIC、VICS、Google、HERE、TomTomを比較し、問い合わせ候補・構成依存候補・No-Goを整理。

### Issue #93: 交通情報・オービス情報の法務・運用レビューを実施する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/93
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/96
- Note: 走行安全、表示粒度、通知、地域差、利用条件、縮退、訂正・通報・監査のGo / No-Goゲートを整理。

### Issue #91: PR #90レビュー指摘に基づき交通情報の由来・更新時刻要件を修正する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/91
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/92
- Note: 上流由来、更新時刻欠落、競合、キャッシュ縮退、利用者表示を安全側へ修正。

## Current Combination Assessments

| ID | 構成 | 初期評価 |
| --- | --- | --- |
| C-01 | Google Maps Platform + Google Routes API | 条件付き候補 |
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 |
| C-03 | Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| C-04 | Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| C-05 | HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 |
| C-06 | 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。

## Upcoming Candidates（高リスク領域優先）

1. Issue #103の組合せ比較に対する人間レビュー
2. C-01 Google Maps + Google Routesの適用契約・保存・帰属条件確認
3. C-02 Google Maps + JARTICオープンデータの静的レイヤー用途・帰属・履歴保存レビュー
4. 明示承認後のJARTIC / VICS・HERE初回問い合わせ
5. 提供元回答の証跡保存とGo / No-Go再判定
6. 地図・ルート・交通provider選定ADR
7. provider adapterと保存境界の基本設計
8. 交通情報・オービス情報の画面詳細設計
9. 提供停止・訂正・通報・監査・事故・苦情対応の運用設計
10. 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化

## Current Gates

- Google Maps Platformは優先候補だが採用決定ではない。
- Maps JavaScript APIのカスタムオーバーレイ機能を、第三者交通データの契約許諾と誤認しない。
- Google Routes結果を非Google地図へ表示しない。
- JARTIC / VICSのGoogle地図重畳・再提供・加工・キャッシュは要問い合わせ。
- HERE TrafficのGoogle地図重畳は両社の明示許諾までNo-Go。
- provider adapterは契約制限を回避する仕組みではない。
- PRマージやIssue Closeは外部送信承認ではない。
- 問い合わせ送信は未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Tool Operation Incident

- Issue #104・#105はbranch作成時のツール選択ミスによる誤作成。
- 両Issueは`誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- 正式な作業対象はIssue #103のみ。

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
