# Handoff（2026-07-29 / Issue #113）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #112はマージ済み。
- Issue #111はclosed / completed、完了コメント追加済み。
- PR #112の作業branchは削除済み。
- Issue #113を作成し、PR #114をOpenした。
- JARTIC静的レイヤーの出典・加工・対象年月・鮮度・状態表示要件を定義。
- 実データ取得、画面実装、provider採用、APIキー取得、外部問い合わせは行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #113: https://github.com/mizzz-ivr/RouteGarage/issues/113
- PR #114: https://github.com/mizzz-ivr/RouteGarage/pull/114
- Branch: `docs/issue-113-jartic-display-requirements`
- Phase: Phase 1 / Requirements Definition（画面設計）

## Completed Tasks

- PR #112のマージを確認。
- Issue #111の完了を確認し、完了コメントを追加。
- PR #112の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #113とmain基点branchを作成。
- JARTIC利用規約の出典・加工表示要件を再確認。
- Google Maps Platformの帰属・視覚的分離・アクセシビリティ要件を再確認。
- 常時表示、1操作以内、内部運用の表示レベルを定義。
- 地図、凡例、地物詳細、出典詳細、履歴、停止、共有・印刷の画面要件を定義。
- 状態モデル、禁止表現、受け入れ条件、Go / No-Goゲートを定義。
- Web / 将来モバイル、走行状態、アクセシビリティ要件を定義。
- Source of Truth、ログ、AIプロンプトログ、handoffを更新。
- PR #114を作成。

## Created Documents

- `docs/ui/jartic-static-layer-display-requirements.md`
- `docs/logs/2026-07-29-issue-113.md`
- `docs/ai-prompts/2026-07-29-issue-113-jartic-display-requirements.md`

## Updated Documents

- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-29

### JARTIC

- 各種情報の提供（オープンデータ）
  - https://www.jartic.or.jp/service/opendata/
- オープンデータ利用規約
  - https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

確認事項:

- 出典表示が必要。
- 編集・加工時は、出典と別に加工した事実の表示が必要。
- 加工情報をJARTIC、国、府省等の作成物と誤認させてはならない。
- 第三者権利は利用者の責任で確認する。
- データは変更・移転・削除される場合がある。

### Google Maps Platform

- Maps JavaScript API policies and attributions
  - https://developers.google.com/maps/documentation/javascript/policies
- Add a dataset to a map
  - https://developers.google.com/maps/documentation/javascript/dds-datasets/add-dataset-to-map

確認事項:

- Google Maps帰属を削除、非表示、隠蔽、改変しない。
- Google Maps Platform Contentと他の情報を視覚的に区別する。
- 帰属は判読可能で、同じ視覚コンテナ内または近接位置へ表示する。
- Google Mapsロゴ・テキストにはサイズ、コントラスト、アクセシビリティ要件がある。
- dataset表示時も必要なdata attributionを表示する。

## Current Decision

画面要件の文書化だけを実施し、JARTICレイヤーの公開、Google Maps Platform / JARTICの採用、実装は保留する。

JARTIC権利台帳の4データセットは、実ファイル・項目を確認していないため、すべて公開No-Goを維持する。

| データセット | 状態 | 公開判定 |
| --- | --- | --- |
| 交通規制情報 | 未着手 | No-Go |
| 断面交通量情報 | 未着手 | No-Go |
| 交通量データ（国土交通省） | 未着手 | No-Go |
| 交差点制御情報 | 未着手 | No-Go |

## Display Levels

### 常時確認可能

- レイヤー名・データセット名
- `静的・月次更新情報`
- 対象年月・作成基準日
- 現在の交通状況ではない旨
- 状態
- JARTIC出典詳細への導線
- 加工時の`RouteGarage加工`

### 1操作以内

- 正式なデータセット名・JARTIC正式名称
- 公開ページURL
- 公開更新日・取得日・検証日・権利確認日
- 上流提供者・追加帰属
- 加工内容
- 欠落・遅延・誤差・位置ずれ
- 利用目的・禁止用途

### 内部運用のみ

- 原本ファイル名・ハッシュ
- 規約文書ハッシュ
- 証跡参照ID
- 非公開契約・許諾情報
- 承認者個人情報
- 内部調査メモ

## Display States

| 状態 | 地図表示 |
| --- | --- |
| 静的参照 | 権利・表示・鮮度ゲート充足時のみ |
| 更新確認中 | 承認済み旧版だけ条件付き |
| 過去版 | 履歴モードのみ |
| 条件付き公開 | 条件を強制できる場合のみ |
| 権利確認中 | 非表示 |
| 提供停止 | 非表示 |
| データなし | 非表示 |
| 取得失敗 | 原則非表示 |
| 検証失敗 | 非表示 |

## Attribution Boundaries

- Google Maps標準帰属を削除、隠蔽、改変しない。
- JARTIC出典・RouteGarage加工表示をGoogle Maps帰属とは別に管理する。
- Google MapsロゴだけでJARTIC出典を代替しない。
- JARTIC出典をGoogleがJARTICデータを提供・保証したように配置しない。
- Google、JARTIC、RouteGarage由来情報を視覚的・意味的に区別する。
- 小画面で両方の帰属を判読できない場合はJARTICレイヤーを表示しない。

## Prohibited Expressions

- リアルタイム
- 現在の交通情報
- 最新交通情報
- 現在の渋滞
- 現在通行止め
- 今の規制
- 最新の規制
- 通行可能です
- 安全です
- 常に正確です
- 公式が保証しています

`最新公開版`を使用する場合も、対象年月と現在情報ではない旨を同時表示する。

## Safety Decisions

- 月次データを現在の渋滞・事故・閉鎖・所要時間・緊急規制として表示しない。
- 走行中は状態・対象年月・静的情報の最小表示だけとする。
- 走行中に詳細展開、履歴比較、レイヤー切替を促さない。
- 状態不明時は走行中相当の安全側表示候補とする。
- 静的レイヤーを音声で現在規制として案内しない。
- 点滅、強い警告音、自動スクロールで状態を伝えない。
- 権利確認中・失効・提供停止の地物を描画しない。

## Accessibility Decisions

- 状態を色だけで表現しない。
- 状態名、意味のあるアイコン、スクリーンリーダー向けラベルを併用する。
- キーボード操作、論理的フォーカス順、フォーカス復帰を要件化する。
- コントラストはWCAG 2.2 AA相当を目標とする。
- 200%ズーム、文字サイズ拡大、ライト・ダークモードを確認する。
- Google Maps帰属はGoogle公式アクセシビリティ要件に従う。

## Sharing / Export Decisions

共有・スクリーンショット・印刷・エクスポート候補には次を含める。

- データセット名
- 対象年月・作成基準日
- JARTIC出典
- RouteGarage加工表示
- 静的情報である旨
- 出力日
- Google Maps由来コンテンツを含む場合のGoogle Maps帰属

次の場合はNo-Go。

- 帰属・対象年月が欠落する
- Google Maps帰属を画像加工で除去する
- 権利台帳でエクスポート未確認・非許可
- 正確な利用者位置・非公開情報・内部証跡を意図せず含む
- 停止・失効中の地物を出力する

## Main Gates

1. 対象データの権利台帳がGo候補または強制可能な条件付きGoである。
2. 対象年月・作成基準日を表示できる。
3. 公開更新日・取得日・検証日を追跡できる。
4. JARTIC出典を表示できる。
5. 加工時に加工表示を表示できる。
6. 追加帰属を必要に応じて表示できる。
7. Google Maps標準帰属を維持できる。
8. Google・JARTIC・RouteGarage由来情報を区別できる。
9. 更新遅延、過去版、権利確認中、停止等を区別できる。
10. 色だけに依存しない。
11. Web・将来モバイル・拡大表示で重要情報を維持できる。
12. 走行中に詳細操作を促さない。
13. 共有・印刷時に出典・対象年月を維持できる。
14. 出典・状態欠落時にレイヤーを停止できる。
15. 人間・法務・運用・安全・アクセシビリティレビューが完了している。

1項目でも未確認・実現不能の場合は保留またはNo-Go。

## Inquiry Status

- JARTIC Jシステム / VICS: `No-Go（外部送信未承認）`
- HERE: `No-Go（external submission not approved）`
- PRマージ・Issue Closeは外部送信承認ではない。
- Issue #113では問い合わせ・許諾取得を行わない。

## Review Status

- PR #114は作成済み。
- PR作成前の差分: mainに対して6 commits / 6 files / behind 0。
- 変更はdocsのみ。
- UI実装、実データ取得、provider採用、APIキー取得、外部送信なし。
- 最新headでmergeability、workflow、status、review threadを確認する。

## Rejected Alternatives

- 出典を詳細画面だけへ隠す案
- `最新`だけで鮮度を表現する案
- Google Maps帰属とJARTIC出典を一つの`提供元`へ統合する案
- 色だけで状態を区別する案
- 権利確認中・失効データを警告付きで表示する案
- 共有・印刷時に帰属を省略する案
- 走行中に詳細パネルを展開可能にする案

## Remaining Tasks

1. 最新headの差分、mergeability、workflow、status、review threadを確認する。
2. 人間・法務・運用・安全・アクセシビリティレビューを受ける。
3. 後続で原本、変換後、履歴、監査メタデータの保持・削除要件を定義する。
4. 実データ候補の選定と第三者権利調査を別Issueで行う。
5. RouteGarage公開利用規約・プライバシーポリシー論点を整理する。

## Branch Cleanup

削除済み:

- `docs/issue-111-jartic-third-party-rights-register`

作業中:

- `docs/issue-113-jartic-display-requirements`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言・採用決定ではない。
- UIモック・実装は行っていない。
- 実データ取得・加工・公開は行っていない。
- Google Maps Platform / JARTICは未採用。
- 仕様・契約確定前に実装しない。
