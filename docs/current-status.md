# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #141
- Feature: ドライブ振り返り・統計ダッシュボード
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition（機能要件の並行作業）
- AI生成物: 人間レビュー必須
- DB/API/UI実装: 未着手

## Current Feature

- Issue #141: https://github.com/mizzz-ivr/RouteGarage/issues/141
- Requirements: `docs/requirements/drive-review-dashboard-requirements.md`
- Metrics invariants: `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- MVP delta: `docs/requirements/issue-141-mvp-delta.md`
- Screen delta: `docs/screen-design/drive-review-dashboard-screen-extension.md`
- Content guide: `docs/content/drive-review-dashboard-content-guidelines.md`

## Product Goal

本人の既存走行記録・訪問記録・コレクション進捗から、月間/年間/車両別の活動を安全かつプライベートに振り返れる状態を定義する。

本機能は競争・ランキング・運転技術評価を目的としない。

## Feature Scope

### 期間サマリー

候補:

- ドライブ回数
- 合計走行距離
- 平均走行距離
- 最長ドライブ距離
- 記録のある日数
- 利用車両数

期間候補:

- 今月
- 先月
- 今年
- 任意期間

### 月別推移

- 月ごとの走行記録件数
- 月ごとの合計走行距離
- 月初/月末/年跨ぎをユーザー基準日付で扱う
- 0件・欠損・算出不能を区別する

### 車両別振り返り

- 車両別ドライブ回数
- 車両別合計距離
- 車両別最終利用日候補
- 車両参照なし記録を推測配分しない

Issue #138の整備費用・給油履歴・燃費・次回目安は本人限定境界を継承し、本機能へ自動統合しない。

### スポット / コレクション

- 訪問登録数
- 新規訪問スポット数候補
- 最近の訪問登録
- 保存中コレクション進捗への導線
- 達成コレクション数候補

訪問記録は自己申告として扱う。

## Metrics Integrity

- ドライブ回数 = 対象期間の有効走行記録件数。
- 合計距離は距離入力済み有効記録だけを対象とする。
- 距離未入力を0kmとして補完しない。
- 平均距離の分母は距離入力済み有効記録件数。
- 分母0では平均値を0kmと表示しない。
- 計画距離を実績距離へ混入しない。
- 同一走行記録を二重計上しない。
- 編集/削除/車両参照変更後に関連統計を再評価する。

## Authorization / Privacy

- 統計ダッシュボードは本人限定。
- 公開プロフィール/投稿/ストーリーへ統計値を自動露出しない。
- 他ユーザーID/統計ID直指定で取得できない。
- 公開レスポンス/serialized data/client stateへ本人限定統計を混入しない。
- 正確な頻出地点、自宅、勤務先、車両保管場所を推測表示しない。

## Safety

禁止:

- 速度ランキング
- 最速/最短時間
- 走行距離ランキング
- ストリーク
- 「もっと走ろう」「今月は少ない」等の走行量評価
- 運転技術スコア
- 安全運転度

## Screen Delta

候補:

- SCR-35: ドライブ振り返りダッシュボード
- SCR-36: 月別ドライブ振り返り
- SCR-37: 車両別ドライブ振り返り
- SCR-05ホーム: 「今月の振り返り」カード追加候補

正本統合時に採番競合を再確認する。

## Recently Completed

### Issue #138 / PR #140

- Feature: 愛車の整備・給油・走行距離履歴要件
- Issue: Closed
- PR: Merged
- Merged at: 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- Codex P1 3件 / P2 1件はマージ前に対応・Resolve済み

PR #140のMVP/画面deltaは正本統合前提のレビュー成果物であり、canonical MVP/screenへの統合は別作業として残る。

## Web Foundation Governance

### Issue #139

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/139
- State: Open
- Priority: Critical
- `ai: blocked`

PR #136はマージ済みだが、mainのADR-0002は`Status: Proposed`のまま。

マージ事実だけでADR承認済みと扱わない。

### Issue #137

- Phase 4 / Detail Design
- State: Open
- `ai: blocked`
- Issue #139 / ADR-0002 acceptance待ち

### Issue #135

- Phase 5 / Implementation
- State: Open
- `ai: blocked`
- Issue #139と#137完了後に開始可否を判断する

## Do Not Proceed

以下はまだ開始しない。

- ADR-0002をAI判断だけで`Accepted`へ変更
- Issue #137/#135のBlocked解除
- Webアプリ実装
- DB / ORM
- Auth provider
- Maps SDK / geolocation
- Storage / CDN
- 実位置/実走行履歴
- 外部provider/API key取得

## Required Review for Issue #141

- Product
- UX
- Data design
- Security
- Privacy
- Safety
- Operations
- Project owner

## Human Decisions for Issue #141

1. 任意期間フィルターをMVPへ含めるか。
2. 対象0件月を0としてグラフ描画するか、データなしとして区別するか。
3. 粗いエリア集計をMVPへ含めるか。
4. 「過去の思い出」セクションをMVPへ含めるか。
5. 車両アーカイブ後の表示名をどう保持するか。
6. 将来の統計共有をロードマップ候補にするか。

## Next Steps

1. Issue #141の要件PRを作成してレビューする。
2. Codexレビュー指摘を同PR内で処理する。
3. 人間承認後、MVP/画面正本へdeltaを統合する。
4. 別途PR #140由来のGarage delta正本統合作業を行う。
5. Issue #139でADR-0002承認状態を人間判断で整合する。
6. ADR Accepted後にIssue #137を進める。
7. Issue #137完了後にIssue #135でWeb基盤実装とGitHub Actionsを開始する。
