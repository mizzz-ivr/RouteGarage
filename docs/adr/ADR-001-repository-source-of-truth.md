# ADR-001: Repository Source of Truthを明確化する

## Status

Accepted

## Context

RouteGarageは、Codexを主なAI開発支援として利用し、複数のAIエージェントや人間が継続的に作業する前提で開発する。

会話、PR本文、Issueコメントだけに判断理由や現在状態を残すと、AIのセッション切り替えや担当者変更時にコンテキストが失われる。

そのため、Repository内のドキュメントをSource of Truthとして定義する必要がある。

## Decision

以下をSource of Truthとして採用する。

| 情報 | 正本 |
|---|---|
| プロジェクト概要 | `docs/project-overview.md` |
| 現在状態 | `docs/current-status.md` |
| 進行中Issue | `docs/active-issues.md` |
| アーキテクチャ概要 | `docs/architecture/system-overview.md` |
| 作業ログ | `docs/logs/` |
| AIプロンプト | `docs/ai-prompts/` |
| ADR | `docs/adr/` |
| リスク台帳 | `docs/risks/risks.md` |

既存の `docs/00_project_overview.md` は初期作成時の概要として残し、今後のAI/人間向け正本は `docs/project-overview.md` とする。

既存の `docs/ai/prompts/project-execution-prompt.md` は互換用に残し、今後の正本は `docs/ai-prompts/project-execution-prompt.md` とする。

## Rejected Alternatives

### 代替案1: READMEを唯一の正本にする

却下理由:
READMEが肥大化し、AIが必要情報を抽出しにくくなる。用途別に正本を分割した方が保守しやすい。

### 代替案2: Issue / PRを正本にする

却下理由:
Issue / PRは履歴管理には有効だが、現在状態を短時間で把握する正本には向かない。Close済み情報が増えるほど探索コストが上がる。

### 代替案3: 会話ログを正本にする

却下理由:
AIセッション消失や共有困難性があり、長期保守に向かない。

## Consequences

### 良い影響

- AIエージェントが短時間で状況把握できる。
- 判断理由と現在状態がRepositoryに残る。
- Issue/PR/Docsの整合性を追いやすくなる。

### 悪い影響

- ドキュメント更新コストが増える。
- 正本ファイルを更新し忘れると古い情報が残る。

## Follow-up

- Issue作成・完了時に `docs/active-issues.md` を更新する。
- 重要判断時はADRを追加する。
- 重大リスクは `docs/risks/risks.md` に追加する。
- 作業完了時は `docs/logs/` にログを保存する。
