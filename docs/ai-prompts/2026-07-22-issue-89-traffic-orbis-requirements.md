# AIプロンプトログ（2026-07-22 / Issue #89）

## ユーザー依頼

- 次のタスクを進める。
- RepositoryをSource of Truthとして継続する。
- 仕様確定前の実装を行わない。

## Target Issue

https://github.com/mizzz-dev/RouteGarage/issues/89

## 作業目的

交通情報・オービス情報について、正確性限界表示、情報区分、走行安全、法令・情報提供元規約、縮退運用、問い合わせ・監査の要件を定義する。

## 参照したRepository docs

- `docs/ai-protocol/PROMPT.txt`
- `docs/requirements/mvp-requirements.md`
- `docs/policies/driving-safety-ui-policy.md`
- `docs/risks/risks.md`
- `docs/current-status.md`
- `docs/active-issues.md`

## 参照した公式資料

- 警察庁「やめよう！運転中のスマートフォン・携帯電話等使用」
- JARTIC 利用規約
- JARTIC 各種情報の提供（オープンデータ）

## 実装禁止事項

- Next.js / Expo実装
- DB/API/Auth/Infra/Deployment/Monitoring設計・実装
- 交通情報API・地図API・データ提供元の確定
- オービス位置データの収集
- 適法性の最終断定

## 生成・更新対象

- 新規: `docs/policies/traffic-and-orbis-information-policy.md`
- 更新: `docs/current-status.md`
- 更新: `docs/active-issues.md`
- 新規: `docs/logs/2026-07-22-issue-89.md`
- 新規: `docs/ai-prompts/2026-07-22-issue-89-traffic-orbis-requirements.md`
- 新規: `docs/handoff/2026-07-22-next-task-handoff.md`

## 完了条件

- 情報区分・状態区分・禁止事項・縮退運用・規約確認・監査要件が文書化される。
- Source of TruthがIssue #89進行中を示す。
- 未確定事項と後続Issueが分離される。
- 実装コードを追加しない。
