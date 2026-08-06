# Handoff（2026-08-05 / Issue #128）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- Issue #128 / PR #129として、行きたいスポット保存・ドライブプラン作成機能をレビュー中。
- 外部provider・本格ナビ・リアルタイム交通情報に依存しない出発前計画機能。
- 実位置情報、実走行履歴、実スポットデータ、実装、provider契約、外部問い合わせは扱っていない。

## Current Issue / PR / Branch

- Issue #128: https://github.com/mizzz-ivr/RouteGarage/issues/128
- PR #129: https://github.com/mizzz-ivr/RouteGarage/pull/129
- Branch: `docs/issue-128-drive-plan-requirements`
- Main document: `docs/requirements/want-to-go-spots-and-drive-plan-requirements.md`
- MVP source: `docs/requirements/mvp-requirements.md`
- Screen list: `docs/screen-design/screen-list.md`
- Screen flow: `docs/screen-design/screen-flow.md`
- Work log: `docs/logs/2026-08-05-issue-128.md`
- AI prompt log: `docs/ai-prompts/2026-08-05-issue-128-drive-plan-requirements.md`

## PR Status

- State: Open
- Mergeable: true
- Draft: false
- Latest compare before Source of Truth sync: 13 commits / 9 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex review: P2指摘1件を修正・返信・解決済み
- Codex fix: SCR-24の所有者操作へ停車中利用制約を追加し、公開閲覧表示と所有者操作を分離
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

CI通過とは扱わない。人間レビュー前にマージ・実装へ進まない。

## Product Goal

1. 気になるスポットを保存する。
2. 保存したスポットを複数地点のプランへ追加する。
3. 地点順・予定・メモを手動で整理する。
4. 公開前に生活拠点・正確位置・個人情報を確認する。
5. 完了後に走行記録の入力補助として参照する。

## Responsibility Boundaries

- 行きたいスポット: 個人用ブックマーク。
- ドライブプラン: 出発前の予定表。
- 走行記録: 実際の走行実績。
- provider: 将来の経路・距離・時間計算。現時点未確定。

計画値を実績値へ自動変換しない。

## State Model

### Plan State

- `DRAFT`
- `CONFIRMED`
- `COMPLETED`
- `CANCELED`

### Publication State

- `PRIVATE`
- `PUBLIC_REVIEW_REQUIRED`
- `PUBLIC`
- `STOPPED`

`STOPPED`を最優先する。

## Functional Scope

### 行きたいスポット

- 保存・解除、一覧、絞り込み、並び替え。
- 所有者限定の個人メモ。
- ドライブプランへの追加。
- 元スポット停止時の古い本文・位置・画像非表示。

### ドライブプラン

- 作成、編集、削除、複製。
- RouteGarageスポット・自由入力地点。
- 地点の手動並び替え。
- 予定日・時刻・滞在予定・メモ。
- 非公開初期値、公開前レビュー。
- 完了後の走行記録作成導線。

## Safety / Privacy Gates

- SCR-23とSCR-24の所有者操作は停車中、出発前、または走行後に限定する。
- SCR-24の公開閲覧表示と所有者操作を分離する。
- 走行中操作を促さない。
- プランは運転指示・通行保証ではない。
- 現地標識・道路標示・警察官等の指示を優先する。
- 自宅・勤務先・車両保管場所等を正確位置で公開しない。
- 自由入力地点は公開前レビュー対象。
- 公開初期値は`PRIVATE`。
- 外部共有・画像化時も生活拠点保護を継承する。

## Spot Reference Integrity

- 元スポット本文・画像・正確位置を恒久複製して再公開しない。
- 非公開・削除・権利停止・安全停止時は公開表示を停止する。
- プラン経由で失った閲覧権限を復活させない。
- 個人メモと元スポット由来情報を分離する。

## Provider Independence

- 地点順はユーザーが手動決定。
- 距離・時間は必須にしない。
- 手入力値と外部計算値の由来を分離。
- provider値を手入力値へ偽装しない。
- provider停止時も手動計画部分を不必要に停止しない。

## Added / Updated Screens

- SCR-21 行きたいスポット一覧
- SCR-22 ドライブプラン一覧
- SCR-23 ドライブプラン作成/編集
- SCR-24 ドライブプラン詳細/公開前確認
- SCR-05 / 07 / 09 / 12を接続更新

SCR-24の公開レビュー、非公開化、完了、中止、複製、走行記録作成には停車中利用警告を必須とする。

## Out of Scope

- ターンバイターンナビ・音声案内
- 自動ルート最適化・リアルタイム再探索
- 通行可能性・交通規制適合性の保証
- GPS高頻度トラッキング
- リアルタイム共同編集
- 外部共有実装
- provider選定・APIキー・契約
- DB / API / UI / Infra実装

## Review Required

- プロダクト
- UX
- 安全
- セキュリティ
- プライバシー
- 運用
- データ・API設計
- プロジェクト責任者

AI生成内容だけで承認・実装開始へ進まない。

## Remaining Tasks

1. 最新headの差分、mergeability、workflow/status、review threadを確認する。
2. 人間の必須レビューを受ける。
3. 問題がなければPR #129をマージしIssue #128完了を確認する。
4. データモデル・API境界設計を後続Issueとして評価する。

## Do Not Proceed

- 実位置情報・実走行履歴・実スポットデータ取得
- 公開Repositoryへの非公開データ保存
- provider採用・APIキー取得・契約
- 自動最適化・通行可否判定実装
- Next.js / Expo / DB / API / Auth / Maps / Infra実装
- 外部問い合わせ・外部共有
