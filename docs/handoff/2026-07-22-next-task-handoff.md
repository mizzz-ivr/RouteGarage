# Handoff（2026-07-23 / Issue #99）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`。
- PR #98は2026-07-23にマージ済み。
- Issue #97はclosed / completed。
- PR #98の作業branchは削除済み。
- 次の高リスク作業としてIssue #99を作成。
- JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成。
- 問い合わせ共通前提、回答記録、Go / No-Go判定様式を作成。
- 実送信、契約、見積取得、APIキー取得、実装は行っていない。

## Current Issue / Branch

- Issue #99: https://github.com/mizzz-ivr/RouteGarage/issues/99
- Branch: `docs/issue-99-provider-inquiry-templates`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #98のマージを確認。
- Issue #97の完了を確認し、完了コメントを追加。
- PR #98の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #99とmain基点の作業branchを作成。
- JARTIC、VICS、HEREの公式窓口・案内を確認。
- 問い合わせ文書4件を作成。
- Issue #99の作業ログ、AIプロンプトログを作成。
- Source of TruthをIssue #97完了・Issue #99進行中へ更新。

## Created Documents

- `docs/inquiries/traffic-data-provider-inquiry-common.md`
- `docs/inquiries/jartic-vics-contract-technical-inquiry.md`
- `docs/inquiries/here-traffic-api-contract-technical-inquiry.md`
- `docs/inquiries/traffic-data-provider-response-record.md`
- `docs/logs/2026-07-23-issue-99.md`
- `docs/ai-prompts/2026-07-23-issue-99-provider-inquiry-templates.md`

## Official Contact Findings

### JARTIC / VICS

- JARTICのJシステムページには、情報提供事業者専用の問い合わせフォームがある。
- VICS符号型の利用には、JARTIC契約とは別にVICSセンターとの技術開示契約が必要。
- VICSセンターは、JARTICからの委託によりVICS符号型情報を事業者へ提供している。
- VICS一般問い合わせフォームは営利目的の問い合わせを受け付けない旨がある。
- したがって、JARTIC専用窓口からVICS技術開示契約の正式窓口・手順を確認する。

### HERE

- HERE公式Contactには、製品・デモ・商用利用に関する営業問い合わせフォームがある。
- HERE Traffic API v7はFlowとIncidentsのリアルタイム交通情報APIとして案内されている。
- 公開ドキュメントだけでは日本データの上流由来、再提供、加工、キャッシュ、他社地図重畳、SLAを確定しない。

## Technical Decisions

- 問い合わせ票作成と送信を別工程にする。
- 本Issueでは問い合わせを送信しない。
- 提供元ごとに個別問い合わせ票を分ける。
- 共通サービス前提と未確定事項を別文書で管理する。
- 回答の適用規約・契約版、回答者、回答日、有効期限、証跡を記録する。
- 口頭回答、曖昧回答、適用文書・版不明の回答はGo判定に使用しない。
- 回答本文に転載・二次利用制限がある場合、公開Repositoryへ保存しない。
- 採用時は別IssueとADRを作成する。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。

## Safety and Privacy Decisions

- 走行中の注視・操作・能動通知を問い合わせの想定用途に含めない。
- 移動式取締り・警察位置のリアルタイム情報を対象にしない。
- 正確オービス座標・走行中接近通知を許容しない。
- 利用者の位置情報、走行履歴、個人識別子を提供元へ送信する前提を置かない。
- 外部送信が必要な場合は、同意、最小化、保持、削除を別Issueで確定する。
- 判断不能時はNo-Goとする。

## Response / Go-No-Go Gates

基本設計候補へ進めるには、以下を確認する。

1. 契約主体と適用規約・契約書の版
2. 日本国内の対象地域・道路・情報種別
3. Web / モバイル利用者への表示、公衆送信、第三者提供
4. バックエンドからクライアントへの配信
5. 加工、統合、状態判定、競合検出
6. 他社地図への重畳
7. キャッシュ、保存期間、有効期限、削除義務
8. 上流由来、更新時刻、訂正、撤回、無効化
9. 帰属、ロゴ、リンク、エンドユーザー条項
10. SLA、障害通知、規約変更、契約停止時の提供停止
11. セキュリティ、位置情報外部送信、プライバシー条件
12. 監査、問い合わせ、事故・苦情対応の証跡
13. 法務、運用、セキュリティ、プロジェクト責任者の承認

1項目でも安全・権利・運用可否を判断できない場合はNo-Goとする。

## Rejected Alternatives

- 公開資料だけで採用判断する案
- VICS一般問い合わせフォームへ営利目的の契約問い合わせを送る案
- AIが問い合わせを自動送信する案
- 回答本文を許可確認なしに公開Repositoryへ保存する案
- 曖昧回答を条件付きGoとして扱う案
- 問い合わせ作成と同時にAPI・地図基盤を実装する案

## Risks

- 仮定値が確定仕様として提供元へ伝わること。
- JARTICとVICSセンターの責務分界を誤認すること。
- 製品説明を契約上の許諾と誤認すること。
- 回答の転載・公開範囲を誤ること。
- 適用規約・契約版・回答有効期限を記録しないこと。
- 料金だけで安全・権利要件を省略して採用すること。
- 位置情報・プローブデータの外部送信条件を見落とすこと。

## Remaining Tasks

1. branch差分、Markdown、Source of Truthを検証する。
2. PRを作成する。
3. Codexレビューが利用可能なら依頼する。
4. 人間レビューを受ける。
5. 送信先、担当者情報、仮定値を人間が入力する。
6. 法務・運用・セキュリティレビュー後に、問い合わせ送信の明示承認を得る。
7. 問い合わせ送信は別アクションとして実施する。
8. 回答受領後、アクセス制御された保管先へ証跡を保存し、Go / No-Goを再判定する。

## Suggested Next Actions

- 本IssueのPRレビューでは、問い合わせが許諾済み・採用済みを前提にしていないかを最優先で確認する。
- JARTIC / VICSでは契約主体、再提供、加工、キャッシュ、VICS技術開示の責務分界を重点確認する。
- HEREでは日本カバレッジ、上流由来、複数利用者表示、他社地図重畳、キャッシュ、SLA、プライバシーを重点確認する。
- 問い合わせ回答が揃うまで交通情報APIの実装Issueを作成しない。

## Branch Cleanup

削除済み:

- `docs/issue-93-traffic-orbis-legal-operations-review`
- `docs/issue-97-traffic-data-provider-comparison`

作業中:

- `docs/issue-99-provider-inquiry-templates`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言、契約判断、採用決定ではない。
- 問い合わせは未送信。
- データ提供元、地図基盤、API方式、キャッシュ方式は未確定。
- 仕様・契約確定前に実装しない。
