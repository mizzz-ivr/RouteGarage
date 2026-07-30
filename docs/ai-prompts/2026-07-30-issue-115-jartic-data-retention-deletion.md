# AIプロンプト記録: Issue #115

- 記録日: 2026-07-30
- Repository: `mizzz-ivr/RouteGarage`
- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/115
- Branch: `docs/issue-115-jartic-data-retention-deletion`
- AI利用: ChatGPT
- 人間レビュー: 必須

## ユーザー依頼

> 次のタスク進めて

## 解釈

PR #114 / Issue #113の完了を確認し、Source of Truthで次順位となっていた「原本・変換後・履歴・監査メタデータの保持・削除要件」をIssue駆動で開始する。

## 目的

JARTIC静的レイヤー候補について、次のデータライフサイクル要件を定義する。

- 取得原本
- 正規化・加工後データ
- 表示用データ
- 履歴・過去スナップショット
- 一時ファイル・キャッシュ
- 検索インデックス・配信キャッシュ
- バックアップ・レプリカ
- 品質・権利・公開判定記録
- 監査メタデータ
- 削除墓標・削除完了証跡

## 参照したRepository内Source of Truth

- `docs/ai-protocol/PROMPT.txt`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/reviews/google-maps-jartic-open-data-static-layer-review.md`
- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/ui/jartic-static-layer-display-requirements.md`

## 実行制約

- 日本語でIssue、commit、PR、ログを作成する
- ウォーターフォール・Issue駆動を維持する
- 仕様確定前に実装しない
- AI生成物は人間レビュー必須
- 保存期間の具体値を勝手に決めない
- DB、ストレージ、クラウド、バックアップ製品を選定しない
- 実データを取得・変換・保存・削除しない
- Google Maps Datasets等へアップロードしない
- provider採用、APIキー取得、外部問い合わせを行わない
- 停止、論理削除、物理削除、バックアップ失効を区別する
- 監査証跡を理由にデータ本体を無期限保存しない
- 位置情報、走行履歴、個人情報、秘密情報を公開Repositoryや一般ログへ保存しない
- 判断不能時はNo-Goとする

## 実行内容

1. PR #114のマージを確認
2. Issue #113のcompletedを確認
3. 作業branch削除を確認
4. Issue #113へ完了コメントを追加
5. Issue #115を作成
6. branch `docs/issue-115-jartic-data-retention-deletion`を作成
7. 保持・削除要件文書を追加
8. 作業ログ、Source of Truth、handoffを更新
9. mainとの差分とdocs限定を確認
10. PRを作成しCodex・人間レビューを依頼

## 生成物

- `docs/requirements/jartic-static-layer-data-retention-deletion-requirements.md`
- `docs/ai-prompts/2026-07-30-issue-115-jartic-data-retention-deletion.md`
- `docs/logs/2026-07-30-issue-115.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## 非実施

- 実データ取得・保存・削除
- DB / API / Auth / Infra実装
- ストレージ・バックアップ製品選定
- 保存期間の具体値決定
- Google Maps Datasetsへのアップロード
- provider採用
- 契約・許諾判断
- 外部問い合わせ
- APIキー・トライアル取得

## レビュー重点

- データ本体と監査メタデータが分離されているか
- 原本から派生物・履歴・キャッシュ・バックアップへ削除が伝播するか
- 表示停止が物理削除より先に行われるか
- バックアップ復旧で削除済みデータが再混入しないか
- 削除墓標にデータ本体や秘密情報を含めていないか
- 法的保全が公開・再利用を許可する状態になっていないか
- 具体期間・製品・providerを未確定のまま維持しているか
