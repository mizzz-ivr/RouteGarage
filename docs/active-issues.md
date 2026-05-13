# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

## Active

### Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/5
- Status: In Progress
- Phase: 0-project-setup
- Area: project-management
- Priority: high
- Assignee: mizzz-dev

#### 目的

Issue #3 / PR #4 で整備したAI-Native開発プロトコルに対して、完全版として提示された日本語出力ポリシー、Branch Lifecycle、PR/Commit/Security/Testing/Observability/Release/Environment/API/Logging/Monitoring/Reliability/RCA/Technical Debt/Repository Health などの運用ルールをRepositoryの正本へ反映する。

#### 完了条件

- 全成果物を日本語中心で作成する方針が正本に明記されている
- 完全版プロトコルの主要ルールが `docs/ai-prompts/project-execution-prompt.md` に反映されている
- Branch Lifecycle Rules がRepository内に保存されている
- Final Output Format に Branch Cleanup が含まれている
- `docs/current-status.md` と `docs/active-issues.md` が現在状態と一致している
- 作業ログが `docs/logs/` に保存されている

## Recently Completed

### Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/3
- Status: Completed
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/4

### Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/1
- Status: Completed
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/2

## Upcoming Candidates

- RouteGarage MVP要件定義を作成する
- RouteGarage画面一覧・画面遷移を定義する
- RouteGarage基本アーキテクチャを設計する
- ナビ・交通情報・オービス情報のリスク評価を行う
- 位置情報プライバシーと自宅周辺ぼかし方針を設計する

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- 完了Issueは Recently Completed へ移動し、必要に応じてログへ詳細を保存する。
