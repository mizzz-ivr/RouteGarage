# Handoff（2026-08-06 / Issue #130）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #129は2026-08-06にマージ済み、Issue #128はcompleted。
- 現在はIssue #130 / PR #131として、画像・短文を24時間限定で共有する`ドライブストーリー`の要件をレビュー中。
- 通常投稿・走行記録とは別責務にする。
- 走行中投稿、現在地共有、返信・DM・動画等は対象外。
- 実画像、実位置情報、実装、Storage/CDN採用、外部送信は行っていない。

## Current Issue / PR / Branch

- Issue #130: https://github.com/mizzz-ivr/RouteGarage/issues/130
- PR #131: https://github.com/mizzz-ivr/RouteGarage/pull/131
- Branch: `docs/issue-130-drive-story-requirements`
- Main document: `docs/requirements/drive-story-requirements.md`
- Expiration invariants: `docs/requirements/drive-story-expiration-invariants.md`
- MVP source: `docs/requirements/mvp-requirements.md`
- Screen list: `docs/screen-design/screen-list.md`
- Screen flow: `docs/screen-design/screen-flow.md`
- Work log: `docs/logs/2026-08-06-issue-130.md`
- AI prompt log: `docs/ai-prompts/2026-08-06-issue-130-drive-story-requirements.md`

## PR Status

- State: Open
- Mergeable: true
- Draft: false
- PR作成時比較: 9 commits / 9 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex自動レビュー: 利用上限により未実施
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

Codex未実施・workflow/statusなしをレビュー完了・CI通過とは扱わない。

## Product Goal

1. 停車中または走行後に画像・短文の下書きを作成する。
2. EXIF、映り込み、生活拠点、公開範囲を確認する。
3. 公開時刻から24時間限定で共有する。
4. 公開中ストーリーをホーム・コミュニティから閲覧する。
5. 不適切コンテンツを通報・非表示にする。
6. 期限到達時に一般公開を停止する。

## Responsibility Boundaries

- ドライブストーリー: 24時間限定の画像・短文共有。
- 通常投稿: 継続公開・保存を前提とする投稿。
- 走行記録: 実際の走行実績。
- スポット: 場所情報・説明・画像を持つ共有対象。
- 参照リンク: 公開済みコンテンツへの関連付け。

ストーリーを通常投稿・走行記録へ自動変換しない。

## State Model

### Lifecycle

- `DRAFT`
- `PUBLISHED`
- `EXPIRED`
- `DELETED`

### Visibility

- `PRIVATE`
- `PUBLIC_REVIEW_REQUIRED`
- `PUBLIC`
- `STOPPED`

`STOPPED`を最優先する。

## Expiration Invariants

- `published_at`は初回公開成功時の不変UTC時刻。
- `expires_at = published_at + 24 hours`。
- 公開前レビュー開始時には期限を開始しない。
- 初回公開成功時に期限値を一度だけ設定する候補。
- 非公開化で期限を停止・延長しない。
- 再公開を許可する場合も元の`expires_at`までに限定する。
- 再公開、編集、参照変更、再レビュー、API再試行で期限を再計算しない。
- `EXPIRED`から同一ストーリーIDを再公開しない。
- 期限切れ内容の再共有は新規ストーリーとして公開前確認をやり直す。
- バッチだけでなく閲覧時・画像配信認可時にも期限判定する。
- 24時間は公開期間であり、物理削除・内部保持期間ではない。
- 未解決通報を期限切れとともに破棄しない。

## Functional Scope

- JPEG / PNG画像と短文。
- 下書き、公開前確認、公開、非公開化、削除要求。
- 公開中ストーリー一覧、投稿者単位閲覧、前後移動。
- 公開時刻・残り時間表示。
- 公開スポット、本人公開走行記録、本人公開車両プロフィールへの任意参照。
- 通報、個別非表示、投稿者単位ミュート候補。

## Safety / Privacy Gates

- 投稿・公開・非公開化・削除は停車中または走行後に限定。
- 走行中の撮影・投稿を促さない。
- 現在地を自動取得・付与しない。
- 正確座標をストーリーへ直接保存・公開しない。
- 粗いエリアまたは公開済み参照だけを候補とする。
- 公開初期値は`PRIVATE`。
- `PUBLIC_REVIEW_REQUIRED`を経由する。
- EXIF除去失敗時は公開No-Go。
- 人物、ナンバープレート、表札、生活拠点、反射物等を公開前確認。
- スクリーンショット等により期限後も残り得ることを説明。
- 閲覧者一覧を提供しない。

## Reference Integrity

- 参照先本文・画像・正確位置を恒久複製しない。
- 非公開・削除・権利停止・安全停止時はリンク・名称・サムネイル・位置表示を停止。
- 参照解除後にストーリー独自画像・短文の公開可否を再判定。
- 公開できない場合は`STOPPED`。
- 失った閲覧権限をストーリー経由で復活させない。

## Moderation / Retention

- 公開ストーリーから2操作以内で通報。
- 期限切れ後も未解決通報を維持。
- 公開停止を物理削除より先に実施。
- 投稿者削除より管理者停止・法務・運用上認められた証跡保全を優先できる候補。
- 24時間を物理削除完了として案内しない。
- 通常保持期間、削除SLA、通報証跡保持期間は法務・運用レビュー後に確定。

## Added / Updated Screens

- SCR-25 ドライブストーリー作成/公開前確認
- SCR-26 ドライブストーリー閲覧
- SCR-27 自分のドライブストーリー管理
- SCR-05 / 10 / 12 / 13 / 16 / 17 / 19 / 20を接続更新

## Out of Scope

- 動画・音声ストーリー
- ライブ配信
- リアルタイム現在地共有
- 走行中自動投稿
- 返信、DM、コメント、リアクション、閲覧者一覧
- フォロー限定公開
- 外部SNS自動共有
- 高度編集
- 推薦・ランキング
- DB / API / Storage / CDN / UI実装

## Review Required

- プロダクト
- UX
- 安全
- セキュリティ
- プライバシー
- 運用
- モデレーション
- データ・API設計
- 法務
- プロジェクト責任者

AI生成内容だけで承認・公開版採用・実装開始へ進まない。

## Remaining Tasks

1. 最新headの差分、mergeability、workflow/status、review threadを確認する。
2. 期限不変条件・状態競合・認可・参照停止を人間レビューする。
3. 保持・削除・通報証跡を法務・運用レビューする。
4. 承認後にデータモデル・期限処理・画像処理・通報運用・保持削除を後続Issue化する。

## Do Not Proceed

- 実画像・実位置情報・実走行履歴取得
- 公開Repositoryへの画像・非公開証跡保存
- Storage / CDN / 通知provider採用
- APIキー取得・契約・外部送信
- Next.js / DB / API / Auth / Storage / CDN実装
- AIだけによる要件承認・公開判定・モデレーション確定
