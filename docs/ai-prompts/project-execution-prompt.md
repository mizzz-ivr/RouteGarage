# Mystic-Aurora AI-Native Development Execution Protocol

## Version

- Version: 1.0.0
- Intended Use: RouteGarageのIssue/PR継続作業に使用する標準実行プロンプト
- Last Updated: 2026-05-13

## Change History

| Version | Date | Summary |
|---|---|---|
| 1.0.0 | 2026-05-13 | Repository Source of Truth、ログ、ADR、AIプロンプト保存方針を含む初版 |

## Known Limitations

- 本プロンプトは実装を自動的に正当化しない。IssueとRepository Source of Truthの確認が必須。
- 高リスク変更（secrets/auth/billing/infra/production config/migrations/deployment settings）は人間確認が必須。
- 外部情報や法令・規約は最新確認が必要。

---

# Context

Repository:
https://github.com/mizzz-dev/RouteGarage/

Current PR:
{{PR_URL}}

Current Issue:
{{ISSUE_URL}}

Current Status:
- PRは作成済み、またはIssue対応フェーズ
- Repositoryを唯一の記憶源(Source of Truth)として扱う
- 会話だけで完結させない
- 作業内容を必ずRepositoryへ永続化する

---

# Core Mission

以下を必ず実施する。

- Issue駆動で進行
- Repositoryを唯一の記憶源(Source of Truth)として扱う
- 作業内容を必ず永続化
- AI/人間の両方が継続可能な状態を維持
- 暗黙知を禁止
- 長期保守性を最優先
- AIエージェント切り替え可能な状態を維持

---

# Repository Constitution

このRepositoryで最優先される価値:

1. 長期保守性
2. 理解容易性
3. 安全な変更可能性
4. 可観測性
5. ドキュメント整合性
6. AI/人間両対応性
7. 再現性
8. 一貫性
9. コンテキスト継承性
10. 運用安定性

短期速度のために上記を犠牲にしない。

---

# Architectural Invariants

以下を破る変更は禁止。

- 責務分離
- 単方向依存
- 境界明確化
- Domain知識集中
- UI層へのBusiness Logic混入禁止
- Infra層からDomain層への逆依存禁止
- Global state濫用禁止
- 暗黙副作用禁止
- hidden dependency禁止
- circular dependency禁止

変更が必要な場合はADR必須。

---

# Canonical Source Rules

| 情報 | 正本 |
|---|---|
| Project Overview | `docs/project-overview.md` |
| Current Status | `docs/current-status.md` |
| Active Issues | `docs/active-issues.md` |
| Architecture | `docs/architecture/system-overview.md` |
| Operational Logs | `docs/logs/` |
| ADR | `docs/adr/` |
| AI Prompts | `docs/ai-prompts/` |
| Risk Register | `docs/risks/risks.md` |

同一情報を複数箇所へ分散定義しない。重複する場合は正本を明記し、古い文書から誘導する。

---

# Required Execution Steps

## 1. 現状分析

以下を分析する。

- PR内容
- Issue内容
- 関連コード
- 関連ドキュメント
- 現在実装状態
- 未完了タスク
- 技術的負債
- 既知リスク
- architecture影響
- downstream影響

その上で、次にやるべきタスクを優先順位付きで整理する。

## 2. Change Impact Analysis

変更前に以下を整理する。

- 影響範囲
- 依存箇所
- 破壊可能性
- テスト対象
- downstream影響
- rollback可能性
- migration必要性
- observability影響

## 3. 実装戦略整理

実装前に以下を整理する。

- 目的
- 完了条件
- 実装戦略
- 設計理由
- リスク
- テスト方針
- rollback方針
- failure isolation
- degradation strategy
- monitoring方針

---

# Development Rules

- 保守性重視
- 可読性重視
- 拡張性重視
- 型安全性重視
- 過剰実装禁止
- Magic Number禁止
- コメント最小化
- 自己説明的コード
- lint/typecheck/test必須
- hidden side-effect禁止
- dead code禁止
- duplicate logic禁止
- obsolete TODO禁止
- 一時実装放置禁止
- 「動くだけ」の実装禁止

---

# AI Safety Constraints

AIは以下を勝手に変更禁止。

- secrets
- auth
- billing
- infra
- production config
- migrations
- deployment settings

高リスク変更は明示し、人間判断を要求する。

---

# ADR Rules

以下変更時はADR必須。

- DB変更
- API変更
- auth変更
- state management変更
- infra変更
- CI/CD変更
- architecture変更
- directory structure変更
- major dependency変更

---

# Repository Logging Rules

以下を必ずRepositoryへ保存する。

- 作業ログ
- 技術判断
- 実装理由
- Issue対応内容
- AIプロンプト
- テスト結果
- 残課題
- 次回作業内容
- リスク
- ADR
- デバッグ記録
- performance調査
- review結果

---

# Log Requirements

ログには必ず以下を含める。

- Summary
- Background
- Objectives
- Scope
- Technical Decisions
- Rejected Alternatives
- Changed Files
- Test Results
- Risks
- Known Issues
- Remaining Tasks
- Next Actions
- AI Prompts Used
- References

---

# Definition of Done

以下を全て満たして初めて完了。

- 実装または文書更新完了
- testまたは妥当な確認完了
- docs更新
- logs更新
- ADR更新（必要時）
- AI prompts保存
- Issue更新
- PR更新
- 再現手順記録
- rollback確認
- review完了

---

# Final Output Policy

会話上でも結果を出力する。
ただし、最終的な正本(Source of Truth)は必ずRepository内ドキュメントとする。

---

# Final Output Format

## Summary
- 実施概要

## Completed Tasks
- 完了タスク一覧

## Changed Files
- 変更ファイル一覧

## Technical Decisions
- 技術判断

## Rejected Alternatives
- 却下案

## Risks
- リスク

## Remaining Tasks
- 残タスク

## Test Results
- テスト結果

## Documents Updated
- 更新ドキュメント

## Logs
- 作業ログ

## ADRs
- ADR一覧

## AI Prompts Used
- 使用AIプロンプト

## Execution Evidence
- 実行証跡

## Agent Handoff
- 次担当向け引き継ぎ

## Suggested Next Actions
- 次にやるべき作業
