# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #111: JARTICオープンデータの第三者権利台帳と公開判定手順を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/111
  - Status: In Progress
  - Branch: `docs/issue-111-jartic-third-party-rights-register`
  - Scope: 管理単位、証跡、利用可否、状態遷移、公開Go / No-Go、停止・再開、公開／非公開証跡境界を定義する
  - Initial Status: 4データセットすべて`未着手 / No-Go`
  - Data Action: 実データ取得・解析・登録を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Adoption: Google Maps Platform / JARTICを決定しない
  - Implementation: Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## Recently Completed

### Issue #109: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/109
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/110
- Note: 月次・静的用途、出典・加工表示、第三者権利、保存、Google Maps帰属、提供停止境界を整理。作業branchは削除済み。

### Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/107
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/108
- Note: Google Routesの表示、保存、帰属、監査、プライバシー、SLA境界を整理。

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

## Issue #111 Current Gates

- データセット全体を一括で確認済みにしない。
- 必要に応じて都道府県、ファイル、項目、地物単位へ分割する。
- 証跡がない結果を確認済みにしない。
- `未確認`は許可を意味しない。
- 保存、加工、公衆送信、地図表示、履歴公開を独立判定する。
- `未着手`、`調査中`、`非許可`、`失効・再確認必要`は公開No-Go。
- `条件付き`は期限・範囲・表示義務・停止条件を強制できる場合だけGo候補。
- 規約、説明書、ファイルハッシュ、許諾変更時は再確認する。
- 権利未確認部分を含むファイルは原則No-Go。
- 非公開契約・回答・許諾書・個人情報を公開Repositoryへ保存しない。
- 最新公開版を現在月・現在有効・リアルタイムと解釈しない。
- 権利侵害・安全影響の可能性が高い通報時は即時一時停止する。
- PRマージやIssue Closeはprovider採用・契約・外部送信の承認ではない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Upcoming Candidates（高リスク領域優先）

1. Issue #111の台帳・公開判定に対する人間・法務・運用・安全レビュー
2. 出典・加工表示・対象年月・更新状態の画面要件
3. 原本・変換後・履歴・監査メタデータの保持・削除要件
4. RouteGarage公開利用規約・プライバシーポリシー論点整理
5. Google Maps Platform契約主体・請求先・適用文書確認
6. 明示承認後のJARTIC / VICS・HERE初回問い合わせ
7. 地図・ルート・交通provider選定ADR
8. provider adapterと保存境界の基本設計
9. 交通情報・オービス情報の画面詳細設計
10. 提供停止・訂正・通報・監査・事故・苦情対応の運用設計

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
