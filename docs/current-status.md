# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- Current task: Issue #132 / PR #133
- Feature: テーマ別ドライブコレクション・訪問進捗
- Branch: `docs/issue-132-drive-collection-progress`
- AI生成物: 人間レビュー必須
- 実装・実スポット投入・GPS取得・外部データ取得: 未実施

## Current Issue / PR

- Issue #132: https://github.com/mizzz-ivr/RouteGarage/issues/132
- PR #133: https://github.com/mizzz-ivr/RouteGarage/pull/133
- Main requirements: `docs/requirements/drive-collection-progress-requirements.md`
- Content governance: `docs/content/drive-collection-content-governance.md`
- Screen delta: `docs/screen-design/drive-collection-screen-extension.md`
- MVP delta: `docs/requirements/issue-132-mvp-delta.md`

## PR Status

- State: Open
- Mergeable: true
- Draft: false
- Initial `main` compare: 9 commits / 9 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex自動レビュー: 利用上限により未実施
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

Codex未実施、workflow/statusなしをレビュー完了・CI通過とは扱わない。人間レビュー前に正本統合・実データ投入・実装へ進まない。

## 直近の完了

- Issue #130 / PR #131: 24時間ドライブストーリー投稿・閲覧機能
  - PR #131 merged: 2026-08-07
  - Merge commit: `b6803c2484dc32653dc44b5418cecf46fbd934a4`
- Issue #128 / PR #129: 行きたいスポット保存・ドライブプラン作成
  - PR #129 merged: 2026-08-06

## Product Goal

テーマから次のドライブ先を発見し、保存し、行きたいスポット・ドライブプランへつなぎ、走行後に自分の訪問進捗として記録できる体験を追加する。

競争型スタンプラリーにはせず、出発前の発見と走行後の振り返りを強化する。

## Responsibility Boundaries

| 領域 | 責務 |
| --- | --- |
| ドライブコレクション | 運営がテーマ別に既存スポットをまとめる編集コンテンツ |
| 行きたいスポット | 個人用ブックマーク |
| ドライブプラン | 出発前の予定表 |
| 走行記録 | 実際の走行実績 |
| 訪問記録 | コレクション進捗用の本人自己申告 |
| 達成記録 | 特定コレクション版を完了した個人記録 |

訪問記録を運営確認済みの訪問証明として扱わない。

## Feature Scope

### コレクション

- 運営作成のテーマ別スポット一覧
- 保存・解除
- テーマ・エリア・注意事項
- スポット参照
- `content_revision`による版管理
- `DRAFT` / `REVIEW_REQUIRED` / `PUBLISHED` / `STOPPED` / `ARCHIVED`

### 訪問進捗

- 手動訪問登録・取消
- 任意の訪問日時・個人メモ
- 本人走行記録への任意参照
- `NOT_STARTED` / `IN_PROGRESS` / `COMPLETED`
- 地点状態`NOT_VISITED` / `VISITED` / `UNAVAILABLE`
- 訪問数 / 対象数 / 進捗率

### 達成記録

- 特定`content_revision`単位の達成
- 過去版達成の保持
- 個人用記念バッジ候補
- 公開初期値は本人限定

## Initial Content Themes

優先度A候補:

- 絶景・景観
- 道の駅
- 温泉
- 展望台
- ご当地グルメ
- 海沿いドライブ

その他候補:

- PA / SA
- ダム・橋
- カフェ
- 山・高原
- 歴史・文化
- 夜景
- 季節ドライブ

実在スポット名・画像・説明文はIssue #132では投入しない。

## Version Integrity

- 対象スポット追加・削除・差し替えは`content_revision`更新対象。
- 達成記録は`collection_id + content_revision`へ紐づける。
- 新版公開後も旧版達成を削除しない。
- 現在版進捗と旧版達成を区別する。
- 削除・停止された元スポット情報を過去達成画面へ復元しない。

## Spot Reference Integrity

- コレクションへ元スポット本文・画像・正確位置を恒久複製しない。
- 元スポット停止時は表示・新規訪問登録を止める。
- 該当地点を`UNAVAILABLE`として扱う。
- 安全・権利停止を理由に自動で達成分母を減らして完了扱いにしない。
- 判断不能時は`REVIEW_REQUIRED`または`STOPPED`へ進める。

## Safety / Privacy

- 訪問登録・取消・メモ・プラン追加は停車中または走行後に限定。
- GPS・ジオフェンス・常時位置取得を要求しない。
- ランキング、最速達成、速度・距離競争、ストリークを提供しない。
- 訪問日時は任意。
- 訪問履歴・達成記録は本人限定を初期値とする。
- 達成公開を将来導入しても訪問時刻・順番・正確位置・速度を自動公開しない。
- 自宅・勤務先・車両保管場所等をコレクション対象にしない。

## Content Governance

- 第三者紹介文をコピーしない。
- 権利不明画像を使わない。
- 元スポットの権利・安全・公開状態を継承する。
- 季節・営業時間・通行条件等の変化を考慮する。
- `reviewed_at`と必要に応じて`recheck_due_at`を管理する。
- AI生成案だけで実在スポット紹介を公開しない。

## Added Screens

レビュー用差分として以下を定義済み。

- SCR-28: ドライブコレクション一覧
- SCR-29: ドライブコレクション詳細
- SCR-30: 自分のコレクション進捗

## Source of Truth Integration Policy

既存`mvp-requirements.md`、`screen-list.md`、`screen-flow.md`を大量置換して差分事故を起こさないため、Issue #132ではレビュー用deltaを分離している。

- MVP delta: `docs/requirements/issue-132-mvp-delta.md`
- Screen delta: `docs/screen-design/drive-collection-screen-extension.md`

人間レビュー承認後に既存正本へ統合する。

## Out of Scope

- GPS位置証明
- ジオフェンス自動チェックイン
- リアルタイム位置共有
- ランキング・最速・速度・距離競争
- ストリーク
- 賞金・景品・抽選
- NFT等の外部資産化
- ユーザー生成コレクション
- 外部観光DB・施設API採用
- 実スポットデータ・実画像投入
- DB / API / UI / Storage / CDN実装

## Unresolved Decisions

- コレクション1件の最大スポット数
- テーマ複数選択可否
- 訪問日時粒度
- 訪問取消後の達成記録扱い
- `UNAVAILABLE`と達成分母の最終ルール
- 過去版の表示範囲
- 記念バッジを内部βへ含めるか
- バッジ公開可否
- カバー画像仕様
- 再確認周期
- 季節限定コレクションの公開期間
- 運営編集・レビュー権限モデル

## Required Review

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

## Next Steps

1. PR #133の人間レビューを受ける。
2. `UNAVAILABLE`と達成分母、バッジ採用等を人間判断する。
3. 承認後にMVP/画面正本へdeltaを統合する。
4. データモデル/API境界を後続Issue化する。
5. 実コンテンツはテーマごとに別Issueで一次情報・権利・安全・鮮度を調査する。

## Do Not Proceed

- 実ユーザー訪問履歴・位置情報の取得
- GPS訪問証明
- 実スポット・実画像の無審査投入
- 無断スクレイピング
- 権利不明画像・説明文の転載
- 外部観光DB/provider採用・APIキー取得・契約
- DB / API / UI / Storage実装
- AIだけによる要件承認・コンテンツ公開
