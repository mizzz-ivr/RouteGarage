# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #113: JARTIC静的レイヤーの出典・加工・鮮度表示要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/113
  - Status: In Progress
  - Branch: `docs/issue-113-jartic-display-requirements`
  - Scope: 地図、凡例、地物詳細、出典詳細、履歴、停止、共有・印刷における出典・加工・対象年月・状態表示を定義する
  - Current Decision: 画面要件の文書化のみ。レイヤー公開・provider採用・実装は保留
  - Data Action: 実データ取得・解析・変換・公開を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Implementation: Figma / Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## Recently Completed

### Issue #111: JARTICオープンデータの第三者権利台帳と公開判定手順を定義する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/111
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/112
- Note: 権利台帳、利用方法別判定、失効・再確認、停止・再開、公開／非公開証跡境界を定義。4データセットは未着手 / No-Go。作業branchは削除済み。

### Issue #109: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/109
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/110
- Note: 月次・静的用途、出典・加工表示、第三者権利、保存、Google Maps帰属、提供停止境界を整理。

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
| 権利台帳の初期状態 | 4データセットすべて未着手 / No-Go |
| 公開Repositoryへのデータ本体 | No-Go |
| Google Maps Datasetsへのアップロード | No-Go / 別途レビューが必要 |

## Issue #113 Current Gates

- レイヤー表示中はレイヤー名、静的情報、対象年月、状態を常時確認可能にする。
- 出典を詳細画面だけへ隠さない。
- 対象年月、公開更新日、取得日、検証日、権利確認日を混同しない。
- Google Maps標準帰属とJARTIC出典・RouteGarage加工表示を別責務として扱う。
- Google、JARTIC、RouteGarage由来情報を視覚的・意味的に区別する。
- 状態を色だけで表現しない。
- 権利確認中、非許可、失効、提供停止の地物は描画しない。
- 小画面で両方の帰属を表示できない場合はJARTICレイヤーを表示しない。
- 走行中に詳細展開、履歴比較、レイヤー切替を促さない。
- 共有・印刷・エクスポートでも出典・対象年月・加工表示を維持する。
- PRマージやIssue Closeはprovider採用・契約・外部送信の承認ではない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Upcoming Candidates（高リスク領域優先）

1. Issue #113の画面要件に対する人間・法務・運用・安全・アクセシビリティレビュー
2. 原本・変換後・履歴・監査メタデータの保持・削除要件
3. 実データ候補の選定とファイル・項目単位の第三者権利調査
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
