# Active Issues

## Active

- Issue #130: 24時間ドライブストーリー投稿・閲覧機能の要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/130
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/131
  - Branch: `docs/issue-130-drive-story-requirements`
  - Status: In Progress / PR #131人間レビュー待ち
  - Main document: `docs/requirements/drive-story-requirements.md`
  - Expiration invariants: `docs/requirements/drive-story-expiration-invariants.md`
  - Implementation: 未着手

## Feature Scope

### 投稿

- JPEG / PNG画像と短文
- 下書き
- 公開前確認
- 公開・非公開化・削除要求
- 公開スポット・本人の公開走行記録・本人の公開車両プロフィールへの任意参照

### 閲覧

- 公開中ストーリー一覧
- 投稿者単位閲覧
- 前後移動
- 残り時間または公開時刻
- 通報
- 個別非表示
- 投稿者単位ミュート候補

### 状態

ライフサイクル:

- `DRAFT`
- `PUBLISHED`
- `EXPIRED`
- `DELETED`

公開状態:

- `PRIVATE`
- `PUBLIC_REVIEW_REQUIRED`
- `PUBLIC`
- `STOPPED`

`STOPPED`を最優先する。

## Current Decisions

- RouteGarage内の名称は`ドライブストーリー`。
- 通常投稿・走行記録・ストーリーを別責務にする。
- `published_at`は初回公開成功時の不変時刻。
- `expires_at = published_at + 24 hours`。
- 保存・比較はUTC基準。
- 期限処理は閲覧時・画像配信認可時にも判定する。
- 非公開化・再公開・編集・再レビューで期限を延長しない。
- `EXPIRED`を同一IDで再公開しない。
- 期限切れと物理削除・通報証跡保持を分離する。
- 公開初期値は`PRIVATE`。
- 公開は`PUBLIC_REVIEW_REQUIRED`を経由する。
- 未解決通報を期限切れとともに破棄しない。
- 参照先停止時に閲覧権限を復活させない。

## Safety / Privacy Gates

- 投稿・公開・非公開化・削除は停車中または走行後に限定。
- 走行中の撮影・投稿を促さない。
- 現在地を自動取得・付与しない。
- 正確座標をストーリーへ直接保存・公開しない。
- EXIF除去失敗時は公開しない。
- 人物、ナンバープレート、表札、生活拠点、反射物等を公開前確認。
- 公開時刻と粗いエリアによる現在地推定リスクを説明。
- スクリーンショット等により期限後も残り得ることを説明。
- 個別閲覧者一覧を提供しない。

## Authorization / Integrity Gates

- 下書き・非公開ストーリーは投稿者本人だけが閲覧・編集できる。
- 他ユーザーは編集・削除・再公開できない。
- `STOPPED`を投稿者が解除できない。
- 期限切れ・削除・停止済みURLから画像を取得できないことを後続設計で担保する。
- 参照先の認可を閲覧時に確認する。
- 参照先本文・画像・正確位置を恒久複製しない。
- 管理者操作を権限分離・監査対象とする。

## Expiration Gates

- 公開前レビューでは期限を開始しない。
- 初回公開成功時に`published_at`と`expires_at`を一度だけ設定する候補。
- 非公開化しても期限を停止しない。
- 再公開を提供する場合も元の期限までに限定する。
- 公開API再試行・二重クリック・ジョブ再実行で期限を延長しない。
- 期限到達と再公開が競合した場合は期限到達を優先する。
- 期限切れ内容の再共有は新しいストーリーとして公開前確認をやり直す。

## Moderation / Retention Gates

- 公開ストーリーから2操作以内で通報。
- 期限切れ後も通報案件を維持。
- 公開停止を物理削除より先に行う。
- 投稿者削除より管理者停止・法務・運用上認められた証跡保全を優先できる候補。
- 24時間を物理削除完了として案内しない。
- 通常保持期間、削除SLA、通報証跡保持期間は未確定。

## Added Screens

- SCR-25: ドライブストーリー作成/公開前確認
- SCR-26: ドライブストーリー閲覧
- SCR-27: 自分のドライブストーリー管理

## PR #131 Review Status

- State: Open / mergeable / not draft
- PR作成時`main`比較: 9 commits / 9 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex自動レビュー: 利用上限により未実施
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

Codex未実施・workflow/statusなしのため、レビュー完了・CI通過とは扱わない。

## Out of Scope

- 動画・音声、ライブ配信
- リアルタイム現在地共有
- 走行中自動投稿
- 返信、DM、コメント、リアクション
- 閲覧者一覧
- フォロー限定公開
- 外部SNS自動共有
- 高度編集
- 推薦・ランキング
- DB / API / Storage / CDN / UI実装

## Recently Completed

- Issue #128 / PR #129: 行きたいスポット保存・ドライブプラン作成
  - Merged: 2026-08-06
  - Merge commit: `82153f0007c0a05cd99cbed3b5fe7a6f878c7594`
- Issue #126 / PR #127: 交通規制情報の項目単位権利・安全表示境界
- Issue #124 / PR #125: 断面交通量情報の項目単位第三者権利・位置表示境界
- Issue #121 / PR #123: JARTIC静的レイヤー保持期間・再確認期限・削除SLA
- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護

## Upcoming

1. 最新headの差分、mergeability、workflow/status、review threadを再確認する。
2. 期限不変条件、状態競合、認可、参照停止を人間レビューする。
3. プロダクト・UX・安全・セキュリティ・プライバシー・運用・モデレーション・法務レビューを受ける。
4. 承認後にデータモデル、期限処理、画像処理、通報運用、保持・削除を後続Issue化する。

## Cross-Cutting Gates

- 仕様・権限・公開・期限・削除境界確定前に実装しない。
- 実利用者の画像・位置・走行履歴を要件テストへ使用しない。
- 公開Repositoryへ画像・位置情報・非公開証跡を保存しない。
- PRマージを実装開始・外部送信・Storage/CDN採用承認と扱わない。
- AI判定だけで公開可否・違反・要件承認を確定しない。
- AI生成物は人間レビュー必須。
