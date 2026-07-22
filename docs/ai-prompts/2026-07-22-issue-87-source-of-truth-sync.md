# AIプロンプトログ（2026-07-22 / Issue #87）

## ユーザー依頼

- Build Web Apps、Expo、Linear、Notion、Visualize、GitHubを利用して次の作業を進める。
- 直前に作成済みのIssue #87を起点として、Source of Truth更新を実行する。
- `docs/ai-protocol/PROMPT.txt` を最優先ルールとして扱う。

## Target

- Repository: https://github.com/mizzz-dev/RouteGarage
- Issue: https://github.com/mizzz-dev/RouteGarage/issues/87
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/86
- Related Issue: https://github.com/mizzz-dev/RouteGarage/issues/85

## 作業方針

1. Repository内docsをSource of Truthとして確認する。
2. Issue #87の対象範囲に限定する。
3. `docs/current-status.md` と `docs/active-issues.md` をPR #86後の状態へ同期する。
4. 作業ログ、AIプロンプトログ、handoffを保存する。
5. 実装コード、技術スタック、DB/API/Auth/Infra/Deployment/Monitoringは変更しない。
6. Build Web Apps / Expoは適用可否のみ確認し、仕様確定前の実装を行わない。
7. Linear / Notionは既存RouteGarage項目がある場合のみ同期し、存在しない場合は重複管理を新規作成しない。
8. PRを作成し、人間レビュー可能な状態にする。

## 生成・更新対象

- 更新: `docs/current-status.md`
- 更新: `docs/active-issues.md`
- 新規: `docs/logs/2026-07-22-issue-87.md`
- 新規: `docs/ai-prompts/2026-07-22-issue-87-source-of-truth-sync.md`
- 新規: `docs/handoff/2026-07-22-next-task-handoff.md`

## 禁止事項

- Next.js / Expo初期構築
- DB/API/Auth/Infra/Deployment/Monitoringの決定
- 高リスク領域の仕様確定
- 無関係なリファクタリング
- AI生成物の無レビュー確定
