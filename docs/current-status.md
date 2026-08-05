# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition
- 開発手法: ウォーターフォール
- AI生成物: 人間レビュー必須
- 現在の主目的: 行きたいスポット保存・ドライブプラン作成機能の要件レビュー
- 実装、実データ取得、provider採用、APIキー取得、契約、外部問い合わせ: 未実施

## Current Issue / PR

- Issue #128: https://github.com/mizzz-ivr/RouteGarage/issues/128
- PR #129: https://github.com/mizzz-ivr/RouteGarage/pull/129
- Branch: `docs/issue-128-drive-plan-requirements`
- Main document: `docs/requirements/want-to-go-spots-and-drive-plan-requirements.md`
- MVP source: `docs/requirements/mvp-requirements.md`
- Screen source: `docs/screen-design/screen-list.md`
- Flow source: `docs/screen-design/screen-flow.md`

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

CI通過とは扱わない。人間レビュー完了前にマージ・実装へ進まない。

## Feature Decision

行きたいスポット保存とドライブプラン作成をWeb MVPへ追加する要件候補とする。

### 行きたいスポット

- スポット詳細から保存・解除
- 一覧、絞り込み、並び替え
- 所有者限定の個人メモ
- ドライブプランへの追加
- 元スポット停止時の古い本文・位置・画像の非表示

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
| 行きたいスポット | 後で見返す個人用ブックマーク |
| ドライブプラン | 出発前の地点・順序・予定・メモ管理 |
| 走行記録 | 実際に走行した実績管理 |
| ルートprovider | 将来の経路・距離・時間計算。現時点未確定 |

計画値を実績値として自動確定しない。

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

## Safety / Privacy

- 作成・編集・並び替えは停車中または出発前利用とする。
- プランは運転指示・通行可能性の保証ではない。
- 地点順は手動で決め、自動最適化しない。
- 自宅・勤務先・車両保管場所等の正確位置を公開しない。
- 自由入力地点は公開前レビュー対象とする。
- 公開範囲の初期値は`PRIVATE`とする。
- 外部共有・画像化時も生活拠点保護を継承する。
- 現地標識、道路標示、警察官、道路管理者等の指示を優先する。

## Spot Reference Integrity

- 元スポットの本文・画像・正確位置を恒久スナップショットとして再公開しない。
- 非公開、削除、権利停止、安全停止時は古い情報を非表示にする。
- 公開プランは表示停止を先に行う。
- 所有者固有メモと元スポット由来情報を分離する。
- 元スポットへの閲覧権限を失った場合、プラン経由で復活させない。

## Provider Independence

- 距離・時間はMVP必須項目にしない。
- 手入力値には由来を持たせる。
- 将来の外部計算値はprovider・計算日時・条件・版を区別する。
- provider値を手入力値へ自動変換しない。
- 外部サービス停止時も、依存しない手動計画部分を不必要に停止しない。

## Added Screens

- SCR-21: 行きたいスポット一覧
- SCR-22: ドライブプラン一覧
- SCR-23: ドライブプラン作成/編集
- SCR-24: ドライブプラン詳細/公開前確認

Updated:

- SCR-05: 最新プラン導線
- SCR-07: プランへの参照追加候補
- SCR-09: 完了プランからの入力補助
- SCR-12: 行きたい保存・解除、プラン追加

## Out of Scope

- ターンバイターンナビ、音声案内
- 自動ルート最適化、推奨経路、リアルタイム再探索
- 通行可能性・交通規制適合性の保証
- GPS高頻度トラッキング
- リアルタイム共同編集
- 外部カレンダー・SNS・メッセージ共有
- provider選定、APIキー取得、契約
- DB / API / UI / Infra実装

## Unresolved Decisions

- 地点数・文字数等の最終上限
- 論理削除・復元期間
- 内部βで`PUBLIC`を有効化するか
- 自由入力地点の公開可能な位置粒度
- 地点単位停止とプラン全体停止の優先規則
- 公開プラン一覧への掲載可否
- 更新通知方式
- 将来provider値を採用する場合の契約・保持条件

## Required Review

- プロダクト
- UX
- 安全
- セキュリティ
- プライバシー
- 運用
- データ・API設計
- プロジェクト責任者

## Recently Completed

- Issue #126 / PR #127: 交通規制情報の項目単位権利・安全表示境界
- Issue #124 / PR #125: 断面交通量情報の項目単位第三者権利・位置表示境界
- Issue #121 / PR #123: JARTIC静的レイヤー保持期間・再確認期限・削除SLA
- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護

## Next Steps

1. Codexレビューの追加指摘を再確認する。
2. 指摘があれば要件・MVP・画面・Source of Truthへ反映する。
3. 最新headの差分、mergeability、workflow/statusを確認する。
4. 人間の必須レビューを受ける。
5. 問題がなければPR #129をマージし、Issue #128完了を確認する。
6. 後続としてデータモデル・API境界の基本設計Issueを検討する。

## Do Not Proceed

- 実位置情報・走行履歴・実スポットデータ取得
- 公開Repositoryへの位置情報・非公開データ保存
- provider採用・APIキー取得・契約
- 自動最適化・通行可否判定実装
- Next.js / Expo / DB / API / Auth / Maps / Infra実装
- 外部問い合わせ・外部共有
- AIだけによる要件承認・実装開始
