# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

## Active

### Issue #8: RouteGarage MVP要件定義を作成する

- URL: https://github.com/mizzz-dev/RouteGarage/issues/8
- Status: In Progress
- Phase: 1-requirements-definition
- Area: project-management / requirements
- Priority: high
- Assignee: mizzz-dev

#### 目的

初回リリースに向けて、MVPで実現する機能、対象外機能、受け入れ条件、非機能要件、主要リスクを定義し、実装前提を凍結する。

#### 完了条件

- `docs/requirements/mvp-requirements.md` が作成されている
- MVPに含める機能・含めない機能が明確である
- 機能要件と非機能要件が分離されている
- 安全性、位置情報プライバシー、交通情報、オービス情報、画像投稿、コミュニティに関するリスクが明記されている
- 受け入れ条件がレビュー可能な粒度で記載されている
- 後続Issueへ展開できる粒度になっている
- `docs/current-status.md` と `docs/active-issues.md` が更新されている
- 作業ログが `docs/logs/` に保存されている

## Recently Completed

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

- RouteGarage画面一覧・画面遷移を定義する
- RouteGarage基本アーキテクチャを設計する
- ナビ・交通情報・オービス情報の法務/規約観点レビューを行う
- 位置情報プライバシーと自宅周辺ぼかし方針を設計する
- 画像投稿モデレーション運用設計を行う

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- 完了Issueは Recently Completed へ移動し、必要に応じてログへ詳細を保存する。
