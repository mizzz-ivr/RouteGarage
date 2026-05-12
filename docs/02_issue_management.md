# 02 Issue Management

## Issue作成ルール
- 1Issue 1目的を原則とする。
- 目的、背景、対応内容、完了条件、対象外を必須記載。
- requirement → design_task → feature_request の順で起票する。

## ラベル運用
- 種別: `type:requirement` / `type:design` / `type:feature` / `type:bug`
- 優先度: `priority:high` / `priority:medium` / `priority:low`
- 状態: `status:ready` / `status:blocked` / `status:review`
- 領域: `area:navigation` `area:safety` `area:privacy` など

## マイルストーン運用
- フェーズ単位で設定（例: `M1 要件定義完了`）。
- Issueは必ずいずれかのマイルストーンに紐づける。
- 完了基準を満たさないIssueは次マイルストーンへ繰り越さない。

## Project運用
- Board列の基本: Backlog / Ready / In Progress / Review / Done
- In Progress は担当者1名・同時着手数を制限する。
- Done移動は完了コメントとPRリンク確認後に実施する。

## Assignee設定
- 着手時に必ずAssigneeを設定。
- 未割当Issueは実行対象にしない。
- レビュー担当を明示してレビュー待ちを可視化する。

## 完了コメントルール
- 実施内容の要約
- 完了条件の充足状況
- テスト結果
- 残課題（あれば次Issue化）
