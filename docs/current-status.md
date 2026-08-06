# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- Current task: Issue #128 / PR #129
- Feature: 行きたいスポット保存・ドライブプラン作成
- AI生成物: 人間レビュー必須
- 実装・実データ・provider契約・外部問い合わせ: 未実施

## Issue / PR

- Issue #128: https://github.com/mizzz-ivr/RouteGarage/issues/128
- PR #129: https://github.com/mizzz-ivr/RouteGarage/pull/129
- Branch: `docs/issue-128-drive-plan-requirements`
- Main document: `docs/requirements/want-to-go-spots-and-drive-plan-requirements.md`

## PR Status

- State: Open
- Mergeable: true
- Draft: false
- Latest `main` compare: 13 commits / 9 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex review: P2指摘1件を修正・返信・解決済み
- Codex fix: SCR-24の所有者操作へ停車中利用制約を追加し、公開閲覧表示と所有者操作を分離
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未実施

CI通過とは扱わない。人間レビュー前にマージ・実装へ進まない。

## Feature Scope

### 行きたいスポット

- 保存・解除
- 一覧、絞り込み、並び替え
- 所有者限定の個人メモ
- ドライブプランへの追加
- 元スポット停止時の古い本文・位置・画像非表示

### ドライブプラン

- タイトル、予定日、概要メモ
- RouteGarageスポット・自由入力地点
- 地点の追加・削除・手動並び替え
- `DRAFT` / `CONFIRMED` / `COMPLETED` / `CANCELED`
- `PRIVATE`を既定とする公開範囲
- `PUBLIC_REVIEW_REQUIRED`を経由する公開
- 非公開下書きとしての複製
- 完了後の走行記録作成への参照

## Responsibility Boundaries

| 領域 | 責務 |
| --- | --- |
| 行きたいスポット | 個人用ブックマーク |
| ドライブプラン | 出発前の予定表 |
| 走行記録 | 実走行の実績 |
| provider | 将来の経路・距離・時間計算。未確定 |

計画値を実績値として自動確定しない。

## Safety / Privacy

- 作成・編集・並び替え・公開・完了・中止・複製・走行記録作成は停車中、出発前、または走行後に行う。
- SCR-24の公開閲覧表示と所有者操作を分離する。
- プランは運転指示・通行可能性の保証ではない。
- 地点順は手動で決め、自動最適化しない。
- 自宅・勤務先・車両保管場所等の正確位置を公開しない。
- 自由入力地点は公開前レビュー対象とする。
- 公開初期値は`PRIVATE`。
- 現地標識・道路標示・警察官・道路管理者等の指示を優先する。

## Spot Reference Integrity

- 元スポット本文・画像・正確位置を恒久複製して再公開しない。
- 非公開・削除・権利停止・安全停止時は古い情報を非表示にする。
- 公開プランは表示停止を先に行う。
- 個人メモと元スポット由来情報を分離する。
- 失った閲覧権限をプラン経由で復活させない。

## Provider Independence

- 距離・時間は必須にしない。
- 手入力値と外部計算値の由来を分離する。
- provider値を手入力値へ自動変換しない。
- provider停止時も手動計画部分を不必要に停止しない。

## Added Screens

- SCR-21: 行きたいスポット一覧
- SCR-22: ドライブプラン一覧
- SCR-23: ドライブプラン作成/編集
- SCR-24: ドライブプラン詳細/公開前確認

SCR-24の所有者操作には停車中利用警告を必須とする。

## Out of Scope

- ターンバイターンナビ・音声案内
- 自動ルート最適化・推奨経路・リアルタイム再探索
- 通行可能性・交通規制適合性の保証
- GPS高頻度トラッキング
- リアルタイム共同編集
- 外部カレンダー・SNS・メッセージ共有
- provider選定・APIキー・契約
- DB / API / UI / Infra実装

## Unresolved Decisions

- 地点数・文字数等の最終上限
- 論理削除・復元期間
- 内部βで`PUBLIC`を有効化するか
- 自由入力地点の公開可能な位置粒度
- 地点単位停止とプラン全体停止の優先規則
- 公開プラン一覧への掲載可否
- データモデル・API・競合制御

## Required Review

- プロダクト
- UX
- 安全
- セキュリティ
- プライバシー
- 運用
- データ・API設計
- プロジェクト責任者

## Next Steps

1. 最新headのmergeability、thread、workflow/statusを再確認する。
2. 人間の必須レビューを受ける。
3. 問題がなければPR #129をマージしIssue #128完了を確認する。
4. データモデル・API境界設計を後続Issueとして評価する。

## Do Not Proceed

- 実位置情報・走行履歴・実スポットデータ取得
- 公開Repositoryへの位置情報・非公開データ保存
- provider採用・APIキー取得・契約
- 自動最適化・通行可否判定実装
- Next.js / Expo / DB / API / Auth / Maps / Infra実装
- AIだけによる要件承認・実装開始
