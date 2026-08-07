# Active Issues

## Active

- Issue #132: テーマ別ドライブコレクション・訪問進捗機能の要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/132
  - Branch: `docs/issue-132-drive-collection-progress`
  - Status: In Progress / PR作成前
  - Main document: `docs/requirements/drive-collection-progress-requirements.md`
  - Content governance: `docs/content/drive-collection-content-governance.md`
  - Screen delta: `docs/screen-design/drive-collection-screen-extension.md`
  - MVP delta: `docs/requirements/issue-132-mvp-delta.md`
  - Implementation: 未着手

## Feature Scope

### ドライブコレクション

- RouteGarage運営作成のテーマ別スポット一覧
- 保存・解除
- テーマ・エリア・注意事項
- 既存スポット参照
- `content_revision`による版管理
- `DRAFT` / `REVIEW_REQUIRED` / `PUBLISHED` / `STOPPED` / `ARCHIVED`

### 訪問進捗

- 訪問済みの手動登録・取消
- 任意の訪問日時・個人メモ
- 本人の走行記録への任意参照
- `NOT_STARTED` / `IN_PROGRESS` / `COMPLETED`
- `NOT_VISITED` / `VISITED` / `UNAVAILABLE`
- 訪問数 / 対象数 / 進捗率

### 達成記録

- 特定`content_revision`単位の達成
- 旧版達成保持
- 個人用記念バッジ候補
- 本人限定を初期公開範囲とする

## Current Decisions

- 運営コレクションから開始し、ユーザー生成コレクションは対象外。
- コレクションは元スポットを参照し、本文・画像・正確位置を恒久複製しない。
- 訪問記録は自己申告であり、運営確認済みと表示しない。
- GPS・ジオフェンスを訪問証明として要求しない。
- 走行記録参照は任意で、自動訪問確定しない。
- ランキング・最速・速度・距離競争・ストリークを導入しない。
- 訪問履歴・達成記録は本人限定を初期値とする。
- 構成変更は`content_revision`で管理し、新版公開後も旧版達成を不必要に失わない。

## Content Themes

初期優先候補:

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

実在スポット・画像・説明文はIssue #132では投入しない。

## Safety / Privacy Gates

- 訪問登録・取消・メモ・プラン追加は停車中または走行後に限定。
- GPS・常時位置取得・リアルタイムチェックインなし。
- 訪問日時は任意。
- 正確な移動時刻・順序・位置・速度を自動公開しない。
- 自宅・勤務先・車両保管場所等を対象化しない。
- 走行記録参照から非公開情報を公開画面へ漏らさない。
- 達成を短時間競争へ変質させない。

## Authorization / Integrity Gates

- 保存・訪問記録・メモ・達成記録は本人のみ更新可能。
- 他ユーザーの非公開進捗を取得できない。
- 運営編集権限と一般ユーザー権限を分離する。
- `STOPPED`を一般ユーザー・通常編集操作で解除できない。
- 元スポットの公開状態・認可を表示時に確認する。
- ID直指定で停止済み・非公開情報を取得できない設計へ引き継ぐ。

## Version / Progress Gates

- スポット追加・削除・差し替えは`content_revision`更新対象。
- 達成記録は特定版へ紐づける。
- 新版公開後も旧版達成を保持する。
- 現在版進捗と旧版達成を区別する。
- `eligible_count = 0`を100%達成にしない。
- `UNAVAILABLE`発生時に自動で分母を減らして達成扱いにしない。
- 判断不能時は`REVIEW_REQUIRED`または`STOPPED`。

## Content Governance Gates

- 第三者紹介文をコピーしない。
- 権利不明画像を公開しない。
- カバー画像の権利根拠を追跡する。
- 季節・施設・通行条件を再確認する。
- `reviewed_at`と必要に応じて`recheck_due_at`を管理する。
- AI生成案だけで実在スポット紹介を公開しない。

## Added Screens

レビュー用delta:

- SCR-28: ドライブコレクション一覧
- SCR-29: ドライブコレクション詳細
- SCR-30: 自分のコレクション進捗

既存`screen-list.md` / `screen-flow.md`へは人間レビュー後に統合する。

## Source of Truth Integration

Issue #132では既存正本の大量置換を避け、レビュー用deltaを分離している。

- `docs/requirements/issue-132-mvp-delta.md`
- `docs/screen-design/drive-collection-screen-extension.md`

承認後に`mvp-requirements.md`、`screen-list.md`、`screen-flow.md`へ統合する。

## Out of Scope

- GPS位置証明
- ジオフェンス自動チェックイン
- リアルタイム位置共有
- ランキング・最速・速度・距離競争
- ストリーク
- 賞金・景品・抽選
- NFT等の外部資産化
- ユーザー生成コレクション
- 外部観光DB・施設API採用決定
- 実スポットデータ・画像投入
- DB / API / UI / Storage / CDN実装

## Recently Completed

- Issue #130 / PR #131: 24時間ドライブストーリー投稿・閲覧
  - Merged: 2026-08-07
  - Merge commit: `b6803c2484dc32653dc44b5418cecf46fbd934a4`
- Issue #128 / PR #129: 行きたいスポット保存・ドライブプラン作成
  - Merged: 2026-08-06
- Issue #126 / PR #127: 交通規制情報の項目単位権利・安全表示境界
- Issue #124 / PR #125: 断面交通量情報の項目単位第三者権利・位置表示境界

## Upcoming

1. Issue #132の差分整合性を確認する。
2. PRを作成し、AI支援セルフレビューとCodexレビュー可否を確認する。
3. プロダクト・UX・安全・セキュリティ・プライバシー・運用・コンテンツ・権利/法務レビューを受ける。
4. 承認後にMVP・画面正本へ統合する。
5. データモデル/API境界を後続Issue化する。
6. 実コンテンツはテーマごとに個別調査Issue化する。

## Cross-Cutting Gates

- 仕様・権限・版・進捗・公開境界確定前に実装しない。
- 実利用者の訪問履歴・位置・走行履歴を要件テストへ使用しない。
- 公開Repositoryへ実位置・実訪問履歴・非公開情報を保存しない。
- PRマージをGPS取得・外部データ採用・実装開始承認と扱わない。
- AIだけで要件・実在コンテンツ・権利・安全を承認しない。
