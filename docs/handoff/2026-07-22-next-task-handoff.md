# Handoff（2026-08-07 / Issue #132）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #131は2026-08-07にマージ済み、Issue #130はcompleted。
- 現在はIssue #132として`ドライブコレクション`と訪問進捗の要件を定義中。
- 機能だけでなく、運営が継続的に作るテーマ別コンテンツの公開・権利・鮮度・安全レビューも対象。
- GPSチェックイン、ランキング、最速競争、実スポット投入、実装は行っていない。

## Current Issue / Branch

- Issue #132: https://github.com/mizzz-ivr/RouteGarage/issues/132
- Branch: `docs/issue-132-drive-collection-progress`
- Main requirements: `docs/requirements/drive-collection-progress-requirements.md`
- Content governance: `docs/content/drive-collection-content-governance.md`
- MVP delta: `docs/requirements/issue-132-mvp-delta.md`
- Screen delta: `docs/screen-design/drive-collection-screen-extension.md`

## Product Goal

1. テーマからドライブ先候補を見つける。
2. コレクションを保存する。
3. 個別スポットを行きたい・ドライブプランへ追加する。
4. 走行後に訪問済みを自己申告で記録する。
5. 自分の進捗を確認する。
6. 特定コレクション版の達成を個人記録として残す。

## Responsibility Boundaries

- ドライブコレクション: 運営編集コンテンツ。
- 行きたいスポット: 個人用ブックマーク。
- ドライブプラン: 出発前予定。
- 走行記録: 実走行実績。
- 訪問記録: コレクション進捗用の本人自己申告。
- 達成記録: 特定コレクション版の完了事実。

訪問記録を運営確認済みの訪問証明にしない。

## Collection State

- `DRAFT`
- `REVIEW_REQUIRED`
- `PUBLISHED`
- `STOPPED`
- `ARCHIVED`

`STOPPED`を最優先とする。

## User Progress

- `NOT_STARTED`
- `IN_PROGRESS`
- `COMPLETED`

地点状態:

- `NOT_VISITED`
- `VISITED`
- `UNAVAILABLE`

## Version Model

- 構成変更は`content_revision`で識別。
- 達成記録は`collection_id + content_revision`へ紐づける。
- 新版公開後も旧版達成を不必要に削除しない。
- 現在版進捗と旧版達成を区別する。
- 停止済み元スポットの本文・画像・正確位置を旧版達成から復元表示しない。

## Functional Scope

### コレクション

- テーマ別スポット一覧
- 保存・解除
- テーマ・エリア・注意事項
- 表示順
- 版管理
- 公開・停止・アーカイブ

### 訪問進捗

- 手動訪問登録・取消
- 任意の訪問日時
- 所有者限定メモ
- 本人走行記録への任意参照
- 進捗率

### 達成

- 特定版の完了記録
- 過去版達成保持
- 個人用記念バッジ候補

## Initial Content Themes

優先度A:

- 絶景・景観
- 道の駅
- 温泉
- 展望台
- ご当地グルメ
- 海沿いドライブ

候補:

- PA / SA
- ダム・橋
- カフェ
- 山・高原
- 歴史・文化
- 夜景
- 季節ドライブ

Issue #132ではテーマ分類と制作ルールだけを定義し、実在スポット・実画像は投入しない。

## Safety / Privacy

- 訪問登録・取消・メモ・プラン追加は停車中または走行後に限定。
- GPS・ジオフェンス・常時位置取得を要求しない。
- ランキング、最速、速度・距離競争、ストリークなし。
- 訪問日時は任意。
- 訪問履歴・達成記録は本人限定を初期値とする。
- 将来バッジ公開時も訪問時刻・順序・正確位置・速度を自動公開しない。
- 自宅・勤務先・車両保管場所等を対象化しない。

## Reference Integrity

- 元スポット情報を恒久複製しない。
- 元スポット停止時は表示と新規訪問登録を止める。
- 該当地点は`UNAVAILABLE`。
- 自動で達成分母を減らして完了扱いにしない。
- 判断不能時は`REVIEW_REQUIRED`または`STOPPED`。

## Content Governance

- 第三者説明文をコピーしない。
- 権利不明画像を使わない。
- カバー画像の権利根拠を記録する。
- 元スポットの権利・安全・公開状態を継承する。
- 季節・施設・通行条件を再確認する。
- `reviewed_at`と必要に応じて`recheck_due_at`を管理する。
- AI生成案だけで実在スポット紹介を公開しない。

## Added Screen Delta

- SCR-28 ドライブコレクション一覧
- SCR-29 ドライブコレクション詳細
- SCR-30 自分のコレクション進捗

## Source of Truth Integration Policy

既存MVP・画面正本を大量置換しないため、レビュー用deltaを作成している。

- `docs/requirements/issue-132-mvp-delta.md`
- `docs/screen-design/drive-collection-screen-extension.md`

人間レビュー承認後に:

- `docs/requirements/mvp-requirements.md`
- `docs/screen-design/screen-list.md`
- `docs/screen-design/screen-flow.md`

へ統合する。

## Out of Scope

- GPS位置証明
- ジオフェンス自動チェックイン
- リアルタイム位置共有
- ランキング・最速・速度・距離競争
- ストリーク
- 賞金・景品・抽選
- NFT等の外部資産化
- ユーザー生成コレクション
- 実スポット・実画像投入
- 外部観光DB/provider採用
- DB / API / UI / Storage / CDN実装

## Review Required

- プロダクト
- UX
- 安全
- セキュリティ
- プライバシー
- 運用
- コンテンツ編集
- 権利・法務
- データ・API設計
- プロジェクト責任者

## Remaining Tasks

1. Issue #132のrequirements / content governance / MVP delta / screen deltaをレビューする。
2. PRを作成しmergeability・thread・workflow/statusを確認する。
3. AI支援セルフレビューをCOMMENTとして記録する。
4. Codexレビューが利用可能なら実施する。
5. 人間レビュー後にMVP・画面正本へ統合する。
6. データモデル/API境界を後続Issue化する。
7. 実コンテンツ調査はテーマごとに個別Issue化する。

## Do Not Proceed

- 実ユーザー訪問履歴・位置・走行記録の利用
- GPSチェックイン
- 無断スクレイピング
- 第三者説明文の転載
- 権利不明画像利用
- 外部データ採用・APIキー取得・契約
- DB / API / UI / Storage実装
- AIだけによる要件承認・コンテンツ公開
