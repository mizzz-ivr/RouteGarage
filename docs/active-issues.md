# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/107
  - Status: In Progress
  - Scope: Google公式一次資料から、Routes APIの表示、保存、帰属、監査、プライバシー、障害境界を整理する
  - Branch: `docs/issue-107-google-routes-contract-boundaries`
  - Current Decision: `条件付き候補を維持 / 基本設計前提としては保留`
  - Adoption: Google Maps Platform / Routes APIを決定しない
  - External Action: 契約、見積、APIキー取得を行わない
  - Implementation: Next.js / Expo / Maps / Routes / DB / API / Auth / Infraを実装しない

## Recently Completed

### Issue #103: 地図基盤候補と交通データ候補の組合せ制約を比較する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/103
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/106
- Note: Google、JARTIC / VICS、HEREの6構成を比較し、責務境界とGo / No-Goゲートを整理。作業branchは削除済み。

### Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/101
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/102
- Note: 送信前レビュー台帳、差し込み情報、承認、対象文書版、証跡保管、No-Go判定を整備。問い合わせは未送信。

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

## C-01 Current Boundaries

| 項目 | 初期方針 |
| --- | --- |
| Google Map上のRoutes結果 | 条件付き候補 |
| 地図なしのRoutes結果 | Google Maps帰属を付ける条件付き候補 |
| 非Google地図との併用 | No-Go |
| Place ID保存 | 長期保存候補 |
| Google出力緯度経度 | 適用契約確認後も最大30暦日の期限付き保存候補 |
| polyline / distance / duration / traffic情報 | 永続保存しない |
| response全体 | log / DB / analytics / backupへ保存しない |
| RouteGarage独自データ | Google Maps Contentと分離管理 |

本評価はGoogle Maps Platform / Routes APIの採用決定ではない。

## Current Gates

- 契約主体、請求先住所、EEA / 非EEA適用区分を確定するまで契約版を固定しない。
- Google Map表示、地図なし表示、非Google地図禁止を混同しない。
- Place ID以外のGoogle Maps Contentを長期保存可能と扱わない。
- Google出力の緯度経度を保持する場合は30暦日以内の削除を前提とする。
- polyline、distance、duration、traffic情報を走行履歴・分析DBへ保存しない。
- origin / destination等の正確な位置を通常ログへ保存しない。
- 公開利用規約・プライバシーポリシーを用意するまで本番利用しない。
- APIキー制限、HTTPS、秘密情報管理を定義するまでAPI利用しない。
- Google SLAをRouteGarage利用者向けSLOと同一視しない。
- PRマージやIssue Closeはprovider採用・契約・APIキー取得の承認ではない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Upcoming Candidates（高リスク領域優先）

1. Issue #107の契約・保存・帰属境界レビューに対する人間確認
2. C-02 Google Maps + JARTICオープンデータの静的レイヤー・帰属・履歴保存レビュー
3. RouteGarage公開利用規約・プライバシーポリシー論点整理
4. Google Maps Platformの契約主体・請求先・適用文書確認
5. 明示承認後のJARTIC / VICS・HERE初回問い合わせ
6. 提供元回答の証跡保存とGo / No-Go再判定
7. 地図・ルート・交通provider選定ADR
8. provider adapterと保存境界の基本設計
9. 交通情報・オービス情報の画面詳細設計
10. 提供停止・訂正・通報・監査・事故・苦情対応の運用設計

## Tool Operation Incident

- Issue #104・#105はbranch作成時のツール選択ミスによる誤作成。
- 両Issueは`誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- 正式な進行中IssueはIssue #107のみ。

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
