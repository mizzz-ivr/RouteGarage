# 04 Output Policy

## 目的

RouteGarage の作業結果を会話だけで完結させず、Repository を唯一の正本として継続可能な状態に保つ。

## 日本語出力ポリシー

このプロジェクトにおける成果物、ログ、レポート、コメント、ドキュメント、Issue更新、PR更新、AI生成物は原則として日本語で出力する。

対象:

- 作業ログ
- Issueコメント
- PR説明
- ドキュメント
- ADR
- レポート
- AIプロンプト記録
- テストレポート
- handoff
- incident report
- release notes
- root cause analysis
- technical decision records
- architecture explanation

コード識別子、ライブラリ名、フレームワーク名、API名、型名、class/function名、protocol/standard名、commit messageは英語を許容する。

## 基本方針

- 最終報告は会話上にも出力する。
- ただし、正本は必ず Repository 内ドキュメントに保存する。
- Issue / PR / logs / AI prompts / ADR / risks の整合性を保つ。
- AIエージェントのメモリ消失を前提に、次担当者が Repository だけで再開できる状態にする。

## 最終出力の保存先

作業完了時は、以下の形式でログを保存する。

```text
docs/logs/YYYY-MM-DD-issue-{issue-number}.md
docs/logs/YYYY-MM-DD-pr-{pr-number}.md
```

IssueとPRの両方に関係する場合は、Issueログを主とし、PRログまたはPR本文から参照する。

## 必須セクション

ログには以下を必ず含める。

```text
## Summary
## Background
## Objectives
## Scope
## Technical Decisions
## Rejected Alternatives
## Changed Files
## Test Results
## Risks
## Known Issues
## Remaining Tasks
## Next Actions
## AI Prompts Used
## References
```

会話上の最終出力では以下を含める。

```text
## Summary
## Completed Tasks
## Changed Files
## Technical Decisions
## Rejected Alternatives
## Risks
## Remaining Tasks
## Test Results
## Documents Updated
## Logs
## ADRs
## AI Prompts Used
## Execution Evidence
## Agent Handoff
## Branch Cleanup
## Suggested Next Actions
```

## Branch Cleanup

PRがmergeされ、作業branchが不要になった場合はbranch削除まで実施する。

ただし、以下の場合は削除を保留し、その理由をログ・PR・Issueへ記録する。

- rollbackに備えて一時保持が必要
- 後続Issueで同一branchを利用する
- CIまたはレビューが未完了
- mainへの反映確認が未完了
- 作業ログやhandoffが未保存

詳細手順は `docs/runbooks/branch-lifecycle.md` を正本とする。

## Source of Truth

| 情報 | 正本 |
|---|---|
| プロジェクト概要 | `docs/project-overview.md` |
| 現在状態 | `docs/current-status.md` |
| 進行中Issue | `docs/active-issues.md` |
| アーキテクチャ | `docs/architecture/system-overview.md` |
| 作業ログ | `docs/logs/` |
| AIプロンプト | `docs/ai-prompts/` |
| ADR | `docs/adr/` |
| リスク台帳 | `docs/risks/risks.md` |
| API仕様 | `docs/api/` |
| 運用手順 | `docs/runbooks/` |

## 禁止事項

- 会話だけに判断理由を残すこと
- PR本文だけを唯一の作業記録にすること
- Issue完了時にログ未保存のままCloseすること
- AIプロンプトを保存せずにAI生成結果だけ採用すること
- 古いドキュメントと新しいドキュメントを矛盾したまま放置すること
- merge済みで不要なbranchを理由なく放置すること

## 完了判定

作業は以下を満たして初めて完了とする。

- Issueの完了条件を満たしている
- 必要なdocsが更新されている
- 必要なlogsが保存されている
- AI利用時はpromptが保存されている
- リスクが必要に応じて `docs/risks/risks.md` に反映されている
- ADRが必要な変更ではADRが作成されている
- テストまたは確認結果が記録されている
- 次担当者向けの引き継ぎが記録されている
- branch削除または削除保留理由が記録されている
