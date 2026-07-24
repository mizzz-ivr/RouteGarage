# Handoff（2026-07-24 / Issue #103）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`。
- PR #102は2026-07-24T03:16:54Zにマージ済み。
- Issue #101はclosed / completed、作業branchは削除済み。
- Issue #101へ完了コメントを追加済み。
- 問い合わせ送信は未承認であり、JARTIC / VICS・HEREともにNo-Goを維持。
- 次の独立作業としてIssue #103を作成。
- Google Maps Platform、JARTIC / VICS、HERE Traffic、Google Routesの組合せ制約を比較。
- 地図・ルート・交通原データ・安全状態・キャッシュ・帰属・障害停止の責務境界を整理。
- 実装、契約、問い合わせ送信、APIキー取得、採用決定は行っていない。

## Current Issue / Branch

- Issue #103: https://github.com/mizzz-ivr/RouteGarage/issues/103
- Branch: `docs/issue-103-map-traffic-combination-comparison`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #102のマージを確認。
- Issue #101の完了を確認し、完了コメントを追加。
- PR #102の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #103とmain基点の作業branchを作成。
- Repository内の地図・交通情報候補を確認。
- Google、JARTIC / VICS、HEREの公式資料を確認。
- 組合せ比較文書を作成。
- Issue #103の作業ログ・AIプロンプトログを作成。
- Source of TruthをIssue #101完了・Issue #103進行中へ更新。

## Created Documents

- `docs/reviews/map-traffic-provider-combination-comparison.md`
- `docs/logs/2026-07-24-issue-103.md`
- `docs/ai-prompts/2026-07-24-issue-103-map-traffic-combination-comparison.md`

## Updated Documents

- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Compared Configurations

| ID | 構成 | 初期評価 |
| --- | --- | --- |
| C-01 | Google Maps Platform + Google Routes API | 条件付き候補 |
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 |
| C-03 | Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| C-04 | Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| C-05 | HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 |
| C-06 | 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。

## Technical Decisions

- Google Maps Platformは優先候補だが未確定のまま維持する。
- Google Routes結果を地図表示する場合はGoogle Mapを使う構成に限定する。
- Google Routes結果を提供元中立の道路・交通データベースへ恒久保存する前提を置かない。
- JARTICオープンデータは静的・定期更新レイヤーに限定し、ライブ交通として扱わない。
- Maps JavaScript APIのカスタムオーバーレイ機能と、第三者交通データの契約許諾を分離する。
- Google Maps上へのJARTIC Jシステム / VICS重畳は要問い合わせとする。
- Google Maps上へのHERE Traffic重畳は、両社の明示許諾までNo-Goとする。
- HERE地図 + HERE Trafficは同一提供元の条件付き候補とするが、日本向け契約、キャッシュ、再提供、SLAを確認する。
- provider adapterは契約制限を回避する仕組みではない。
- providerごとに保存、加工、再配布、有効期限、削除を管理する。
- 採用時は地図、ルート、交通provider、adapter境界について別IssueとADRを作成する。

## Responsibility Boundaries

- 地図描画: 地図提供元
- ルート計算: ルート提供元
- 交通原データ: 交通情報提供元
- 上流由来追跡: 交通情報提供元の情報をRouteGarageが保持
- 表示可否・鮮度・検証・提供停止: RouteGarage。ただし加工許諾の範囲内
- キャッシュ・削除: provider契約ごとにRouteGarageが管理
- 帰属: 各provider要件を同一画面上で明確に分離
- 障害・規約変更・契約停止: provider単位・地域単位・情報種別単位で停止

## Safety and Privacy Decisions

- 情報源、提供元更新時刻、鮮度、検証状態、提供停止を利用者へ表示できない構成はNo-Go。
- 地図と交通情報の道路リンク・位置参照のずれを検出・停止できない構成はNo-Go。
- 利用者位置情報・走行履歴・識別子を複数providerへ無制限に送信しない。
- providerごとの送信目的、項目、保持、削除を特定する。
- 走行中の注視・操作・能動通知を前提にしない。
- 移動式取締り・警察位置リアルタイム情報を扱わない。
- 取締り回避を目的とするルート・表示・通知を扱わない。
- 判断不能時はNo-Goとする。

## Inquiry Status

### JARTIC / VICS

`No-Go（外部送信未承認）`

### HERE

`No-Go（external submission not approved）`

- PRマージ・Issue Closeは外部送信承認ではない。
- Issue #101で作成した台帳の未入力・未承認項目が残っている。
- 本Issueでは問い合わせを送信しない。

## Go / No-Go Gates

基本設計候補へ進めるには、以下を確認する。

1. 地図・交通providerそれぞれの契約主体、適用規約、版
2. Web / mobile / backend利用、複数利用者表示、公衆送信
3. 他社地図重畳または同一provider利用の許諾
4. 加工、状態判定、競合検出、派生情報の許諾
5. 上流由来、更新時刻、訂正、撤回、無効化
6. キャッシュ、履歴、監査メタデータ、削除義務
7. 帰属、ロゴ、リンク、エンドユーザー条項
8. 道路リンク・位置参照・座標変換の責任主体
9. provider・地域・情報種別単位の停止方式
10. 利用者位置情報・走行履歴・識別子の外部送信条件
11. SLA、障害通知、サポート、緊急連絡、責任分界
12. 法務、運用、セキュリティ・プライバシー、プロジェクト責任者の承認

1項目でも判断できない場合はNo-Goまたは保留とする。

## Rejected Alternatives

- Google Maps Platformの優先候補表記を採用決定として扱う案
- カスタムオーバーレイが実装可能であることを契約許諾とみなす案
- HERE TrafficをGoogle Mapsへ無条件に重畳する案
- JARTIC / VICS道路リンクをGoogle道路ネットワークへ無許可で変換する案
- 複数providerの原レスポンスを恒久保存して共通API化する案
- provider adapterで契約制限を回避できるとみなす案
- Repositoryに未定義の地図providerを本Issueで追加する案

## Risks

- Google Maps Contentと非Googleデータの出所・帰属が混在すること。
- VICS道路リンクとGoogle道路ネットワークがずれること。
- HERE TrafficとGoogle地図の契約・責任分界が不明なこと。
- キャッシュ・履歴・監査保存が代替データベース作成となること。
- provider切替時に別providerコンテンツを移植できると誤認すること。
- 複数providerへの位置情報送信でプライバシー影響が拡大すること。
- 規約変更・契約停止時に一部providerだけを停止できないこと。

## Tool Operation Incident

branch作成時のツール選択ミスによりIssue #104・#105を誤作成した。

- Issue #104: `誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- Issue #105: `誤作成Issue（作業対象外）`として`not_planned`でクローズ済み。
- 正式な作業対象はIssue #103のみ。
- branch作成ツールのスキーマを再取得し、正しいbranchをmainから作成済み。

## Remaining Tasks

1. mainとの差分、Markdown、組合せ判定、禁止事項を検証する。
2. PRを作成する。
3. Codexレビューが利用可能なら依頼する。
4. 人間レビューを受ける。
5. 問い合わせ送信が別途承認された場合、C-03 / C-05の契約条件を提供元へ確認する。
6. provider選定時にADRを作成する。
7. provider確定後にprovider adapter・保存境界・縮退方式の基本設計へ進む。

## Branch Cleanup

削除済み:

- `docs/issue-99-provider-inquiry-templates`
- `docs/issue-101-provider-submission-review`

作業中:

- `docs/issue-103-map-traffic-combination-comparison`

## 注意事項

- AI生成内容は人間レビュー必須。
- 公開製品説明は契約上の許諾ではない。
- 問い合わせは未送信。
- 法的助言、契約判断、採用決定ではない。
- 地図、ルート、交通provider、API方式、キャッシュ方式は未確定。
- 仕様・契約確定前に実装しない。
