# Branch Lifecycle Runbook

## 目的

RouteGarageで作業branchを安全に作成・利用・削除し、不要branchの放置を防ぐ。

## 基本方針

- 1Issue / 1PR / 1目的を原則とする。
- branch名は目的が分かる短い名前にする。
- merge済みで不要なbranchは削除する。
- rollbackや継続作業の必要がある場合は削除を保留し、理由をIssueまたはPRに記録する。

## 推奨命名

```text
feature/{short-name}
fix/{short-name}
docs/{short-name}
refactor/{short-name}
chore/{short-name}
```

例:

```text
docs/complete-ai-native-protocol
```

## 削除条件

以下をすべて満たす場合、branchを削除する。

- PRがmerge済み
- mainへの反映を確認済み
- CIまたは必要な確認が完了済み
- docs/logsが保存済み
- Issue/PRに完了情報が記録済み
- rollbackのためにbranchを残す必要がない
- 後続Issueで同じbranchを利用しない

## 削除保留条件

以下に該当する場合は削除を保留する。

- rollback検証中
- CIまたはレビューが未完了
- 追加修正予定が同じPRに残っている
- main反映確認が未完了
- 作業ログやhandoffが未保存

保留する場合は、理由と再確認予定をIssueまたはPRに記録する。

## remote branch削除手順

GitHub上でPR merge後に削除ボタンから削除する。

CLIで削除する場合:

```bash
git push origin --delete <branch-name>
```

## local branch削除手順

```bash
git checkout main
git pull origin main
git branch -d <branch-name>
```

強制削除が必要な場合:

```bash
git branch -D <branch-name>
```

強制削除は、merge済み・不要であることを確認してから行う。

## 完了コメントに含める内容

- 削除対象branch
- remote branch削除有無
- local branch削除有無
- 削除理由
- rollback必要性確認結果
- 削除を保留した場合は保留理由

## 注意点

- production rollback手段としてbranchを使う運用は避ける。
- rollbackは原則としてrevert PRやtag/releaseで管理する。
- branch削除前にSource of Truth、logs、handoffが保存されていることを確認する。
