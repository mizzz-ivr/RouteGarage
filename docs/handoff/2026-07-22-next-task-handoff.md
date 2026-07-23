# Handoff（2026-07-23 / Issue #97）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`へ変更済み。
- PR #96はマージ済み、Issue #93はclosed / completed、作業branchは削除済み。
- Issue #97で交通情報データ提供元候補を比較し、PR #98を作成した。
- 現在のゲートはCodexレビューと人間レビュー。
- 実装コード、技術選定、APIキー、契約変更なし。

## Current Issue / PR / Branch

- Issue #97: https://github.com/mizzz-ivr/RouteGarage/issues/97
- PR #98: https://github.com/mizzz-ivr/RouteGarage/pull/98
- Branch: `docs/issue-97-traffic-data-provider-comparison`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #96のマージとIssue #93の完了を確認。
- Issue #93へ完了記録を追加。
- PR #96の作業branch削除を確認。
- Repository正式URLを`mizzz-ivr/RouteGarage`として確認。
- Issue #97とmain基点の作業branchを作成。
- JARTIC、VICS、Google、HERE、TomTomの公式資料を確認。
- `docs/reviews/traffic-data-provider-comparison.md`を追加。
- Issue #97の作業ログ、AIプロンプトログを追加。
- Source of TruthをIssue #93完了、Issue #97進行中へ更新。
- main比較でbehind 0、docs 6ファイルのみを確認。
- PR #98を作成。

## Provider Findings

### JARTICオープンデータ

- 判定: `用途限定候補`
- 商用利用、複製、公衆送信、加工が公開規約で許容される。
- 出典、加工表示、第三者権利確認が必要。
- 原則月次更新であり、ライブ交通情報として扱わない。

### JARTIC Jシステム / VICS

- 判定: `優先問い合わせ候補`
- 渋滞、事故・工事、所要時間、閉鎖、駐車場等をオンライン提供する。
- 基本5分更新、一部1分更新、全国提供メニューがある。
- VICS符号型はVICSセンターとの技術開示契約が必要。
- 再提供、加工、キャッシュ、帰属、SLA、停止条件は契約確認が必要。

### Google Maps Platform Routes API

- 判定: `構成依存候補`
- Google地図・ルート基盤と一体の場合のみ検討する。
- 保存、再共有、再ホスト、派生データ化、非Google地図との併用に制限がある。
- 提供元中立の交通情報データベース用途には使わない。

### HERE Traffic API v7

- 判定: `優先問い合わせ候補`
- リアルタイムFlow / Incidentsと日本カバレッジを確認。
- キャッシュ、リポジトリ構築、複数利用者への使い回しに制限がある。
- 日本データの上流由来、再提供、加工、他社地図重畳、帰属、SLAを問い合わせる。

### TomTom Traffic API

- 判定: `現時点No-Go`
- Flow / Incidents APIと商用料金導線は確認した。
- 公開Traffic APIカバレッジ表は2022-11-14更新で、日本が掲載されていない。
- 現行日本カバレッジと契約条件の書面確認後に再評価する。

## Technical Decisions

- 本比較でデータ提供元を採用しない。
- 公開製品ページと契約上の許諾を区別する。
- 一般ウェブサイト、オープンデータ、API、個別契約の条件を混同しない。
- 上流由来、調達経路、再提供経路を候補ごとに追跡する。
- キャッシュ、加工、再提供、他社地図重畳は明示的な許諾確認を必須とする。
- 判断不能時はNo-Goとする。
- 移動式取締り・警察位置のリアルタイム情報は比較対象外とする。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。

## Go / No-Go Gates

基本設計へ進めるには、候補ごとに以下を確認する。

1. 契約主体と適用規約・契約書の版
2. 日本国内の対象地域・道路・情報種別
3. 利用者への表示、公衆送信、第三者提供
4. 他社地図への重畳
5. 加工、統合、派生状態判定
6. キャッシュ、保存期間、有効期限、削除義務
7. 提供元更新時刻、訂正、撤回
8. 帰属、ロゴ、リンク、サプライヤー表記
9. 規約変更、契約停止、障害時の提供停止
10. 監査、問い合わせ、苦情、誤情報対応の証跡
11. 位置情報・プローブデータの同意とプライバシー
12. 走行安全・取締り回避防止要件との整合
13. 法務・運用責任者・人間レビュアーの承認

1項目でも判断不能で安全な表示可否を確認できない場合はNo-Goとする。

## Validation Results

- main比較: PR作成前時点で6 commits / 6 files / behind 0
- 変更ファイル: docsのみ
- 新規Markdown: すべて非空
- Source of Truth: Issue #93完了、Issue #97進行中で整合
- Repository正式所有者: `mizzz-ivr`を現在状態へ反映
- PR #96 branch cleanup: 削除済み
- 候補別の公式資料、確認事項、未確認事項: 記録済み
- データ提供元採用、契約、APIキー取得、実装変更: なし
- ローカル`validate-docs.sh`: 実行環境のDNS制約により未実施
- GitHub connectorによるファイル内容・差分・branch比較: 確認済み

## Remaining Tasks

1. PR #98のCodexレビューを確認し、指摘があれば修正する。
2. 人間レビューを受ける。
3. マージ後にIssue #97を完了する。
4. `docs/issue-97-traffic-data-provider-comparison`のcleanupを確認する。
5. JARTIC Jシステム / VICSとHEREへの問い合わせ票作成Issueへ進む。

## Suggested Next Actions

- PR #98では、公開情報と契約上の未確認事項が明確に分離されているかを最優先で確認する。
- PR #98マージ前にデータ提供元、地図基盤、API方式を確定しない。
- 交通情報API実装は、契約・権利・上流由来・停止条件が確定するまで開始しない。

## Branch Cleanup

削除済み:

- `docs/issue-93-traffic-orbis-legal-operations-review`

作業中:

- `docs/issue-97-traffic-data-provider-comparison`

既存の削除確認候補:

- `docs/issue-87-source-of-truth-sync`
- `docs/issue-89-traffic-orbis-requirements`
- `docs/issue-91-traffic-source-freshness-fix`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言、契約判断、採用決定ではない。
- 公開資料で確認できない事項を推測で許容しない。
- データ提供元、地図基盤、API方式、キャッシュ方式は未確定。
- 仕様確定前に実装しない。
