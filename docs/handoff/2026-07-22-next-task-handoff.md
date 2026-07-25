# Handoff（2026-07-25 / Issue #107）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`。
- PR #106はマージ済み。
- Issue #103はclosed / completed、完了コメント追加済み。
- PR #106の作業branchは削除済み。
- 次の優先作業としてIssue #107を作成。
- Google Maps Platform + Routes APIの契約・保存・帰属・監査境界をGoogle公式一次資料ベースで整理。
- C-01の判定は`条件付き候補を維持 / 基本設計前提としては保留`。
- Google Maps Platform / Routes APIの採用、契約、APIキー取得、実装は行っていない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Goを維持。

## Current Issue / Branch

- Issue #107: https://github.com/mizzz-ivr/RouteGarage/issues/107
- Branch: `docs/issue-107-google-routes-contract-boundaries`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #106のマージを確認。
- Issue #103の完了を確認し、完了コメントを追加。
- PR #106の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #107とmain基点の作業branchを作成。
- Google公式のRoutes APIポリシー、Service Specific Terms、Core Services Summary、SLA、Place ID、セキュリティ資料を確認。
- Google Map表示、地図なし表示、非Google地図禁止の境界を整理。
- Place ID、期限付き緯度経度、保存禁止項目、運用メタデータ候補を分類。
- Google Maps ContentとRouteGarage独自データの境界を整理。
- 帰属、利用規約・プライバシー、APIセキュリティ、SLA・縮退要件を整理。
- Issue #107の作業ログ・AIプロンプトログを追加。
- Source of TruthをIssue #103完了・Issue #107進行中へ更新。

## Created Documents

- `docs/reviews/google-routes-contract-storage-attribution-review.md`
- `docs/logs/2026-07-25-issue-107.md`
- `docs/ai-prompts/2026-07-25-issue-107-google-routes-contract-boundaries.md`

## Updated Documents

- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-25

- Routes API Policies and Attributions
  - https://developers.google.com/maps/documentation/routes/policies
- Google Maps Platform Service Specific Terms
  - https://cloud.google.com/maps-platform/terms/maps-service-terms
- Google Maps Platform Core Services Summary
  - https://cloud.google.com/maps-platform/terms/maps-services
- Google Maps Platform SLA
  - https://cloud.google.com/maps-platform/terms/sla
- Place IDs
  - https://developers.google.com/maps/documentation/places/web-service/place-id
- Routes API Web Service Best Practices
  - https://developers.google.com/maps/documentation/routes/web-service-best-practices
- Google Maps Platform Security Guidance
  - https://developers.google.com/maps/api-security-best-practices

## Current Decision

`条件付き候補を維持 / 基本設計前提としては保留`

採用決定ではない。

保留理由:

- 契約主体・請求先住所・EEA / 非EEA適用区分が未確定
- 実際に適用される契約文書・版が未確定
- 30日以内削除、backup削除、通常ログ混入防止の運用が未設計
- Google Maps ContentとRouteGarage独自データの保存境界に対する人間・法務レビューが未完了
- 公開利用規約・プライバシーポリシーが未整備
- APIキー制限、秘密情報管理、障害・縮退方式が未設計

## Display Boundaries

- Routes API結果を地図表示する場合はGoogle Mapを使う。
- Routes API結果は地図なし表示も可能だが、Google Maps帰属を表示する。
- Routes APIのGoogle Maps Contentを非Google地図と組み合わせない。
- Google Maps ContentとRouteGarage独自・第三者コンテンツを視覚的に区別する。
- Googleが指定する第三者帰属を表示できる領域を確保する。

## Storage Boundaries

| データ | 初期方針 |
| --- | --- |
| Place ID | 長期保存候補。定期的な有効性確認が必要 |
| Google出力の緯度・経度 | 適用契約確認後も最大30暦日の期限付き保存候補 |
| polyline | 保存しない |
| distance / duration / staticDuration | 保存しない |
| traffic-aware情報 | 保存しない |
| route response全体 | log / DB / analytics / backupへ保存しない |
| RouteGarage内部request ID | Google Content・正確位置を含まない運用メタデータ候補 |
| HTTP status / latency / retry count | 個人・位置情報を除去した運用メタデータ候補 |
| ユーザー入力・メモ・公開設定 | Google Maps Contentと分離したRouteGarageデータ候補 |

## Technical Decisions

- Google Map表示と地図なし表示を分ける。
- 非Google地図との併用をNo-Goとする。
- Place ID以外の長期保存を許可済みと扱わない。
- Google出力緯度経度の期限付き保存を採用する場合も、30日以内削除とbackup削除を必須とする。
- Routes APIのpolyline、distance、duration、traffic情報を走行履歴・分析DBへ保存しない。
- Google Routes結果から長期交通統計、学習データ、検索インデックス、共通ルートDBを作成しない。
- 走行記録はユーザー自身の計測データとしてGoogle Routes結果と分離する。
- SLAとRouteGarage利用者向けSLOを同一視しない。
- 採用時は別IssueとADRを作成する。

## Safety and Privacy Decisions

- origin / destination等の正確な位置を通常ログへ保存しない。
- APIキー・認証情報をRepository、client log、エラーへ記録しない。
- HTTPSとAPIキー制限を必須要件候補とする。
- Googleへの送信履歴とRouteGarageの走行履歴を長期結合しない。
- 自宅・職場・生活圏に関係する地点の送信必要性、同意、代替手段を別途レビューする。
- 走行中の注視・操作・能動通知を前提にしない。
- ルート情報を安全判断の唯一の根拠にしない。
- 取締り回避目的のルート・表示・通知を扱わない。
- 判断不能時はNo-Goとする。

## Go / No-Go Gates

1. 契約主体、請求先住所、EEA / 非EEA適用区分
2. 適用Terms、Service Specific Terms、Policiesの文書名・版
3. Google Map表示、地図なし表示、非Google地図禁止
4. Google Maps帰属と第三者帰属のUI
5. Place ID以外の長期保存禁止
6. Google出力緯度経度の30日以内削除
7. polyline、distance、duration、traffic情報の永続化防止
8. backup、analytics、debug dumpへの混入防止
9. RouteGarage独自データとの物理・論理分離
10. 公開利用規約・プライバシーポリシー
11. 位置情報の送信目的・同意・保持
12. APIキー制限、HTTPS、秘密情報管理
13. quota、障害、規約変更、feature停止の運用
14. SLAとRouteGarage SLOの分離
15. 法務、運用、セキュリティ・プライバシー、プロジェクト責任者の承認

1項目でも未確認の場合は保留またはNo-Go。

## Rejected Alternatives

- Google Maps Platformの優先候補表記を採用決定として扱う案
- Routes APIレスポンス全体を走行履歴へ保存する案
- polyline、distance、duration、traffic情報を長期分析する案
- Google Routes結果を非Google地図へ表示する案
- API失敗時に保存済みルート結果を無期限再表示する案
- request / response全体をデバッグログへ保存する案
- Google SLAをRouteGarageの利用者向け保証として表示する案

## Risks

- 契約主体の請求先住所によって適用規約が変わること。
- 公開ポリシーの更新を見落とすこと。
- Google出力座標とユーザー登録座標を混同すること。
- backup、analytics、debug dumpへGoogle Maps Contentが残ること。
- Google Maps Contentと独自・第三者データの帰属が混在すること。
- Place ID以外を長期保存可能と誤認すること。
- 位置情報送信と走行履歴を長期結合し、生活圏推定リスクを高めること。

## Inquiry Status

### JARTIC / VICS

`No-Go（外部送信未承認）`

### HERE

`No-Go（external submission not approved）`

- PRマージ・Issue Closeは外部送信承認ではない。
- 本Issueでは問い合わせを送信しない。

## Remaining Tasks

1. mainとの差分、Markdown、保存分類、禁止事項を検証する。
2. PRを作成する。
3. Codexレビューが利用可能なら依頼する。
4. 人間レビューを受ける。
5. C-02 Google Maps + JARTICオープンデータの静的レイヤー・帰属・履歴保存レビューを行う。
6. Google Maps Platformを採用候補として絞る場合、契約主体・請求・適用文書を確認する。
7. provider選定時にADRを作成する。
8. provider確定後に基本設計へ進む。

## Branch Cleanup

削除済み:

- `docs/issue-99-provider-inquiry-templates`
- `docs/issue-101-provider-submission-review`
- `docs/issue-103-map-traffic-combination-comparison`

作業中:

- `docs/issue-107-google-routes-contract-boundaries`

## Tool Operation Incident

- Issue #104・#105は過去のbranch作成時のツール選択ミスによる誤作成。
- 両Issueは`not_planned`でクローズ済み。
- 正式な進行中IssueはIssue #107のみ。

## 注意事項

- AI生成内容は人間レビュー必須。
- 公開製品説明は契約上の許諾ではない。
- Google Maps Platform / Routes APIは未採用。
- 法的助言、契約判断、採用決定ではない。
- APIキー、技術構成、DB、API、認証、インフラは未確定。
- 仕様・契約確定前に実装しない。
