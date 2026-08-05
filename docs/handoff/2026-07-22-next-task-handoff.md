# Handoff（2026-08-05 / Issue #128）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #127はマージ済み、Issue #126はcompleted。
- Issue #128 / PR #129として、行きたいスポット保存・ドライブプラン作成機能のMVP要件をレビュー中。
- 本機能は外部provider・本格ナビ・リアルタイム交通情報に依存しない出発前計画機能。
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
- PR作成時`main`比較: 9 commits / 9 files / behind 0
- 変更範囲: docsのみ
- AI支援セルフレビュー: COMMENTで記録済み
- Codex自動レビュー: 現時点で指摘なし
- 未解決review thread: 0件
- GitHub Actions / commit status: workflow・status checkなし
- 人間レビュー: 未実施

CI通過とは扱わない。人間レビュー前にマージ・実装へ進まない。

## Product Goal

スポット探索と走行記録の間に、出発前計画機能を追加する。

1. 気になるスポットを保存する。
2. 保存したスポットを複数地点のプランへ追加する。
3. 地点順・予定・メモを手動で整理する。
4. 公開前に生活拠点・正確位置・個人情報を確認する。
5. 完了後に走行記録の入力補助として参照する。

## Responsibility Boundaries

### 行きたいスポット

- 個人用ブックマーク。
- 元スポットの複製公開機能ではない。
- 個人メモは所有者限定。

### ドライブプラン

- 出発前の予定表。
- 地点、順序、予定日、時刻、滞在予定、メモを管理。
- 通行可能性・交通規制適合性・安全を保証しない。

### 走行記録

- 実際の走行実績。
- 計画値を実績値へ自動変換しない。
- プラン削除で連鎖削除しない。

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

## Main Functional Requirements

### 行きたいスポット

- 閲覧可能なスポットの保存・解除。
- 同一スポットの有効保存は1件。
- 一覧、絞り込み、並び替え。
- 個人メモ。
- ドライブプランへの追加。
- 元スポット停止時の古い本文・位置・画像非表示。

### ドライブプラン

- 作成、編集、削除、複製。
- RouteGarageスポット・自由入力地点。
- 地点の手動並び替え。
- 予定日・時刻・滞在予定・メモ。
- 非公開初期値。
- 公開前レビュー。
- 完了後の走行記録作成導線。

## Provider Independence

- 地点順はユーザーが手動決定。
- 距離・時間は必須にしない。
- 手入力値と外部計算値の由来を分離。
- 外部計算値の失効時に手入力値へ偽装しない。
- provider停止時も、依存しない手動計画部分を不必要に停止しない。

## Spot Reference Integrity

- 元スポット本文・画像・正確位置を恒久スナップショットとして再公開しない。
- 表示時に元スポットの現在状態を確認する。
- 非公開・削除・権利停止・安全停止時は公開表示を停止する。
- プラン経由で失った閲覧権限を復活させない。
- ユーザー固有メモと元スポット由来情報を分離する。

## Safety / Privacy Gates

- 作成・編集・並び替えは停車中または出発前。
- 走行中操作を促さない。
- プランは運転指示ではない。
- 現地標識・道路標示・警察官等の指示を優先。
- 自宅・勤務先・車両保管場所等を正確位置で公開しない。
- 自由入力地点は公開前レビュー対象。
- 公開初期値は`PRIVATE`。
- 外部共有・画像化時も生活拠点保護を継承。

## Added / Updated Screens

### Added

- SCR-21 行きたいスポット一覧
- SCR-22 ドライブプラン一覧
- SCR-23 ドライブプラン作成/編集
- SCR-24 ドライブプラン詳細/公開前確認

### Updated

- SCR-05 ホーム: 最新プラン導線
- SCR-07 ルート閲覧詳細: プラン参照追加候補
- SCR-09 走行記録作成: 完了プラン入力補助
- SCR-12 スポット詳細: 行きたい保存/解除、プラン追加

## Out of Scope

- ターンバイターンナビ、音声案内
- 自動ルート最適化、推奨経路、リアルタイム再探索
- 通行可能性・交通規制適合性の保証
- GPS高頻度トラッキング
- 複数ユーザーのリアルタイム共同編集
- 外部カレンダー・SNS・メッセージ共有
- provider選定、APIキー、契約
- DB / API / UI / Infra実装

## Test Focus

### Normal

- 保存・解除、一覧、プラン追加。
- 手動地点追加・並び替え。
- 状態遷移。
- 公開前レビュー。
- 複製。
- 走行記録への参照。

### Error

- 非公開スポット保存。
- 他ユーザープラン編集。
- 元スポット停止後の古い情報公開。
- 地点0件で確定。
- 中止プラン公開。
- provider値と手入力値の混同。
- 生活拠点の無確認公開。

### Boundary

- 地点0 / 1 / 20 / 21件。
- 重複地点。
- 予定日なし・過去日・日跨ぎ。
- 文字数上限。
- 公開直後の元スポット停止。
- 並び替えと削除の競合。

### Regression

- 本格ナビ対象外。
- 走行中操作禁止。
- 非公開既定・生活拠点保護。
- 元データ停止時の表示停止・削除伝播。
- 走行記録・スポット投稿との責務分離。

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

1. Codexレビューの追加指摘を再確認する。
2. 指摘があれば全関連文書へ反映する。
3. 最新headの差分、mergeability、workflow/statusを再確認する。
4. 人間の必須レビューを受ける。
5. 問題がなければPR #129をマージし、Issue #128完了を確認する。
6. データモデル・API境界の基本設計を後続Issueとして評価する。

## Do Not Proceed

- 実位置情報・実走行履歴・実スポットデータ取得
- 公開Repositoryへの非公開データ保存
- provider採用・APIキー取得・契約
- 自動最適化・通行可否判定実装
- Next.js / Expo / DB / API / Auth / Maps / Infra実装
- 外部問い合わせ・外部共有
