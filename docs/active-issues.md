# Active Issues

## Active

- Issue #128: 行きたいスポット保存・ドライブプラン作成機能の要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/128
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/129
  - Branch: `docs/issue-128-drive-plan-requirements`
  - Status: In Progress / PR #129人間レビュー待ち
  - Main document: `docs/requirements/want-to-go-spots-and-drive-plan-requirements.md`
  - Implementation: 未着手

## Feature Scope

### 行きたいスポット

- 保存・解除、一覧、絞り込み、並び替え
- 所有者限定の個人メモ
- ドライブプランへの追加
- 元スポット停止時の古い情報非表示

### ドライブプラン

- タイトル、予定日、概要メモ
- RouteGarageスポット・自由入力地点
- 地点の追加・削除・手動並び替え
- `DRAFT` / `CONFIRMED` / `COMPLETED` / `CANCELED`
- `PRIVATE`を既定とする公開範囲
- `PUBLIC_REVIEW_REQUIRED`を経由する公開
- 複製、走行記録作成への参照

## Current Decisions

- 行きたいスポット、ドライブプラン、走行記録を別責務にする。
- プランは出発前の予定表で、運転指示・通行保証ではない。
- 地点順は手動で決め、自動最適化しない。
- 手入力値と将来provider計算値を区別する。
- 公開初期値は`PRIVATE`。
- 元スポット停止時は古い本文・位置・画像を公開しない。
- 公開停止を物理削除より先に行う。

## Added Screens

- SCR-21: 行きたいスポット一覧
- SCR-22: ドライブプラン一覧
- SCR-23: ドライブプラン作成/編集
- SCR-24: ドライブプラン詳細/公開前確認

## Safety / Privacy Gates

- SCR-23とSCR-24の所有者操作は停車中、出発前、または走行後に限定する。
- SCR-24の公開閲覧表示と所有者操作を分離する。
- 自宅・勤務先・車両保管場所等の正確位置を公開しない。
- 自由入力地点は公開前レビュー対象。
- 外部共有・画像化時も生活拠点保護を継承する。
- 元スポット停止時は公開表示・再生成を停止する。
- 現地標識・道路標示・警察官等の指示を優先する。

## Authorization / Integrity Gates

- 非公開の保存・個人メモ・プランは所有者だけが閲覧できる。
- 他ユーザーの非公開スポットを保存できない。
- 元スポットの閲覧権限をプラン経由で復活させない。
- 公開閲覧者は編集できない。
- 管理者停止は所有者の公開操作より優先する。
- 元スポット本文・画像・正確位置を恒久複製して公開しない。

## PR #129 Review Status

- State: Open / mergeable / not draft
- Latest `main` compare: 13 commits / 9 files / behind 0（Codex修正前後の確認値）
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex review: P2指摘1件を修正・返信・解決済み
- Codex fix: SCR-24所有者操作の停車中利用制約、公開閲覧との責務分離
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

## Out of Scope

- ターンバイターンナビ・音声案内
- 自動ルート最適化・リアルタイム再探索
- 通行可能性・交通規制適合性の保証
- GPS高頻度トラッキング
- リアルタイム共同編集
- 外部共有実装
- provider選定・APIキー・契約
- DB / API / UI / Infra実装

## Recently Completed

- Issue #126 / PR #127: 交通規制情報の項目単位権利・安全表示境界
- Issue #124 / PR #125: 断面交通量情報の項目単位第三者権利・位置表示境界
- Issue #121 / PR #123: JARTIC静的レイヤー保持期間・再確認期限・削除SLA
- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護

## Upcoming

1. 最新headの差分、mergeability、workflow/status、review threadを確認する。
2. 人間・プロダクト・UX・安全・セキュリティ・プライバシー・運用レビューを受ける。
3. 問題がなければPR #129をマージしIssue #128完了を確認する。
4. データモデル・API境界設計を後続Issue化する。

## Cross-Cutting Gates

- 仕様・権限・公開・削除境界確定前に実装しない。
- 実利用者の位置・走行履歴を要件テストへ使用しない。
- 公開Repositoryへ位置情報・非公開データを保存しない。
- PRマージをprovider採用・実装開始・外部送信承認と扱わない。
- CI workflow/statusがないためCI通過とは扱わない。
- AI生成物は人間レビュー必須。
