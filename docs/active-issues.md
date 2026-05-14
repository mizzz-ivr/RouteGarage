# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

## Active

### Issue #14: Source of Truth上のIssue番号・URL表記を整合する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/14
- Status: In Progress
- Phase: 1-requirements-definition
- Area: privacy / safety / policy
- Priority: high
- Assignee: mizzz-dev

#### 目的

PR #13で追加・更新された位置情報・走行履歴データポリシー関連docsのIssue番号・URL・現在状態の不整合を修正し、Repository Source of Truthを正しい状態へ整合する。

#### 完了条件

- `docs/policies/location-and-drive-log-data-policy.md` の対象Issue表記がIssue #12へ整合している
- `docs/logs/` と `docs/ai-prompts/` のIssue番号・URL表記がIssue #12へ整合している
- `docs/current-status.md` と `docs/active-issues.md` がIssue #12完了後 / Issue #14進行中の状態になっている
- 未置換のIssue URLプレースホルダーが残っていない
- branch cleanupの削除または保留理由が記録されている

### Issue #10: RouteGarage MVP画面一覧・画面遷移を定義する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/10
- Status: In Progress
- Phase: 1-requirements-definition
- Area: product-design / screen-design
- Priority: high
- Assignee: mizzz-dev

#### 目的

MVP要件定義（Issue #8）を根拠として、初回リリースに必要な画面一覧、画面遷移、主要導線、画面責務を確定し、後続の基本設計Issueへ接続する。

#### 完了条件

- `docs/screen-design/screen-list.md` が作成されている
- `docs/screen-design/screen-flow.md` が作成されている
- 走行中操作を防ぐ画面方針が明記されている
- 位置情報/走行履歴/画像投稿/コミュニティ投稿のプライバシー配慮が画面単位で整理されている
- 交通情報/オービス情報が参考情報であることを誤認しない表示方針になっている
- `docs/logs/` と `docs/ai-prompts/` に作業記録が保存されている
- `docs/current-status.md` と `docs/active-issues.md` が更新されている

## Recently Completed

### Issue #12: 位置情報・走行履歴データポリシーを定義する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/12
- Status: Completed
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/13


### Issue #8: RouteGarage MVP要件定義を作成する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/8
- Status: Completed

### Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/5
- Status: Completed

### Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/3
- Status: Completed
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/4

### Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/1
- Status: Completed
- Related PR: https://github.com/mizzz-dev/RouteGarage/pull/2

## Upcoming Candidates

- RouteGarage基本アーキテクチャを設計する
- ナビ・交通情報・オービス情報の法務/規約観点レビューを行う
- 位置情報プライバシーと自宅周辺ぼかし方針を設計する
- 画像投稿モデレーション運用設計を行う
- 監査ログ要件の定義を行う

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- 完了Issueは Recently Completed へ移動し、必要に応じてログへ詳細を保存する。
