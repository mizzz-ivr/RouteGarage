# Handoff（2026-07-23 / Issue #97）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`へ変更済み。
- PR #96は2026-07-23にマージ済み。
- Issue #93はclosed / completed。
- PR #96の作業branchは削除済み。
- 次の高リスク作業としてIssue #97を作成。
- 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較した。
- 現在のゲートはPR作成、Codexレビュー、人間レビュー。
- 実装コード、技術選定、APIキー、契約変更なし。

## Current Issue / Branch

- Issue #97: https://github.com/mizzz-ivr/RouteGarage/issues/97
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

## Provider Findings

### JARTICオープンデータ

- 判定: `用途限定候補`
- 商用利用、複製、公衆送信、加工が公開規約で許容される。
- 出典、加工表示、第三者権利確認が必要。
- 原則月次更新であり、ライブ交通情報として扱わない。
- 交通規制、交通量、交差点制御等の静的・定期更新データ用途に限定する。

### JARTIC Jシステム / VICS

- 判定: `優先問い合わせ候補`
- 渋滞、事故・工事、所要時間、閉鎖、駐車場等をオンライン提供する。
- 基本5分更新、一部1分更新、全国提供メニューがある。
- VICS符号型はVICSセンターとの技術開示契約が必要。
- 再提供、加工、キャッシュ、帰属、SLA、停止条件は契約確認が必要。

### Google Maps Platform Routes API

- 判定: `構成依存候補`
- Google地図・ルート基盤と一体で交通対応ルートを表示する用途に限定して検討する。
- Google Mapsコンテンツの保存、再共有、再ホスト、派生データ化、非Google地図との併用に制限がある。
- 提供元中立の交通情報データベース用途に使わない。
- 地図基盤未決定の現段階では採用順位を確定しない。

### HERE Traffic API v7

- 判定: `優先問い合わせ候補`
- リアルタイムFlow / Incidentsと日本カバレッジを確認。
- キャッシュ、リポジトリ構築、複数利用者への使い回しに制限がある。
- 日本データの上流由来、再提供、加工、他社地図重畳、帰属、SLAを問い合わせる。

### TomTom Traffic API

- 判定: `現時点No-Go`
- Flow / Incidents APIと商用料金導線は確認した。
- 公開Traffic APIカバレッジ表は2022-11-14更新で、日本が掲載されていない。
- 別製品のTraffic Statsに日本があっても、Traffic APIの提供根拠にしない。
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

## Rejected Alternatives

- JARTIC一般ウェブページのスクレイピング再表示
- API利用可能性を包括的な再配布許諾とみなすこと
- Google Routes API結果を独自交通データセットとして保存すること
- HERE / TomTomレスポンスを契約確認なしに長期保存・複数利用者へ再利用すること
- TomTom Traffic Statsの日本対応からTraffic APIの日本対応を推測すること
- オービス・移動式取締り・警察位置データを同時に選定すること

## Risks

- 公開資料を契約書と誤認すること。
- ブランド名だけで上流由来を確認済みと扱うこと。
- 地図基盤との併用制限を見落とすこと。
- キャッシュの権利・削除義務を見落とすこと。
- 提供元更新時刻がない情報をリアルタイム表示すること。
- 規約変更・契約停止時に情報を停止できないこと。
- 位置情報外部送信の利用者同意が不足すること。
- AI比較結果を法務承認・採用決定として扱うこと。

## Remaining Tasks

1. mainとの差分とdocs整合を確認する。
2. PRを作成し、Codexレビューを受ける。
3. 人間レビューを受ける。
4. マージ後にIssue #97を完了する。
5. merged branchのcleanupを確認する。
6. JARTIC Jシステム / VICSとHEREへの問い合わせ票作成Issueへ進む。

## Suggested Next Actions

- PRレビューでは、各候補の公開情報と未確認事項が明確に分離されているかを最優先で確認する。
- PR #97対応のマージ前にデータ提供元、地図基盤、API方式を確定しない。
- Issue #97マージ後は、JARTIC Jシステム / VICSとHEREへの契約・技術問い合わせ項目を別Issueで作成する。
- 交通情報API実装は、契約・権利・上流由来・停止条件が確定するまで作成しない。

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
