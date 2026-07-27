# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #109: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/109
  - Status: In Progress
  - Branch: `docs/issue-109-jartic-open-data-static-layer`
  - Scope: 用途、月次鮮度、出典、加工、第三者権利、履歴保存、Google帰属、提供停止を整理する
  - Current Decision: `用途限定候補 / 公開MVPレイヤーとしては保留`
  - Data Action: 実データ取得・変換・アップロードを行わない
  - Adoption: Google Maps Platform / JARTICを決定しない
  - Implementation: Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## Recently Completed

### Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/107
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/108
- Note: Google Routesの表示、保存、帰属、監査、プライバシー、SLA境界を整理。作業branchは削除済み。

### Issue #103: 地図基盤候補と交通データ候補の組合せ制約を比較する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/103
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/106
- Note: Google、JARTIC / VICS、HEREの6構成を比較し、責務境界とGo / No-Goゲートを整理。

### Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/101
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/102
- Note: 送信前レビュー台帳、承認、対象文書版、証跡保管、No-Go判定を整備。問い合わせは未送信。

### Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/99
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/100
- Note: 初回問い合わせ文、詳細質問票、共通前提、回答記録・Go / No-Go様式を整備。

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

## C-02 Current Boundaries

| 項目 | 初期方針 |
| --- | --- |
| 交通規制情報 | 基準年月付き静的参照の条件付き候補 |
| 断面交通量情報 | 月次分析・参考表示の条件付き候補 |
| 交通量データ（国土交通省） | 上流由来・第三者権利確認付き候補 |
| 交差点制御情報 | 内部調査候補。公開MVPでは使用しない |
| ライブ交通用途 | No-Go |
| 旧版の現在情報表示 | No-Go |
| 原本・変換後・履歴保存 | 第三者権利・版・削除要件付きの条件付き候補 |
| 公開Repositoryへのデータ本体 | No-Go |
| Google Maps Datasetsへのアップロード | No-Go / 別途レビューが必要 |

## Current Gates

- JARTIC月次データをリアルタイム・現在情報として表示しない。
- 対象年月、公開更新日、取得日、出典、加工表示を必須とする。
- Google Maps標準帰属とJARTIC出典を別に表示する。
- 第三者権利はデータセット全体ではなく、ファイル・項目単位で確認する。
- 第三者権利が`未確認`または`非許可`の場合は公開しない。
- 旧版・履歴を現在情報と同じ画面状態で表示しない。
- 原本、正規化、表示用、履歴、監査メタデータを分離する。
- Google Maps Datasetsへ無確認でアップロードしない。
- 誤情報、権利問題、規約変更時に対象レイヤーを停止できるようにする。
- PRマージやIssue Closeはprovider採用・契約・外部送信の承認ではない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Upcoming Candidates（高リスク領域優先）

1. Issue #109の静的レイヤー境界に対する人間・法務・運用レビュー
2. JARTICデータセット・ファイル単位の第三者権利台帳
3. 出典・加工表示・対象年月・更新状態の画面要件
4. 原本・変換後・履歴・監査メタデータの保持・削除要件
5. RouteGarage公開利用規約・プライバシーポリシー論点整理
6. Google Maps Platform契約主体・請求先・適用文書確認
7. 明示承認後のJARTIC / VICS・HERE初回問い合わせ
8. 地図・ルート・交通provider選定ADR
9. provider adapterと保存境界の基本設計
10. 交通情報・オービス情報の画面詳細設計

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
