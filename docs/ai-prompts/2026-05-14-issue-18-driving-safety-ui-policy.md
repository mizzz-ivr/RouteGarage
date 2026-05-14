# AIプロンプトログ（2026-05-14 / Issue #18）

## ユーザー依頼（要約）
- `docs/ai-protocol/PROMPT.txt` を最優先ルールとして遵守。
- Issue #18に基づき、RouteGarageの「走行中操作を助長しないUI/UX詳細方針」を定義。
- 実装コード追加や技術確定は禁止。
- 指定ドキュメントを参照し、指定ドキュメント群を更新。
- 完了条件（禁止操作整理、停車中導線整理、誤認防止方針、未確定時の保守的方針など）を満たす。

## AIの作業方針
1. 既存要件・画面設計・位置情報ポリシーとの整合を最優先。
2. 仕様未確定点は断定せず「未確定事項」として明記。
3. 安全性・プライバシー・商用運用観点（規約、説明責任、監査、サポート）を含める。
4. Source of Truth（`current-status`/`active-issues`）をIssue #18に同期。

## 生成・更新対象
- 新規: `docs/policies/driving-safety-ui-policy.md`
- 新規: `docs/logs/2026-05-14-issue-18.md`
- 新規: `docs/ai-prompts/2026-05-14-issue-18-driving-safety-ui-policy.md`
- 更新: `docs/current-status.md`
- 更新: `docs/active-issues.md`
