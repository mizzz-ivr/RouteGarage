# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #141 / PR #142
- Feature: ドライブ振り返り・統計ダッシュボード
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition（機能要件の並行作業）
- AI生成物: 人間レビュー必須
- DB/API/UI実装: 未着手

## Current Feature

- Issue #141: https://github.com/mizzz-ivr/RouteGarage/issues/141
- PR #142: https://github.com/mizzz-ivr/RouteGarage/pull/142
- Requirements: `docs/requirements/drive-review-dashboard-requirements.md`
- Metrics invariants: `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- Codex review clarifications: `docs/requirements/issue-141-review-clarifications.md`
- MVP delta: `docs/requirements/issue-141-mvp-delta.md`
- Screen delta: `docs/screen-design/drive-review-dashboard-screen-extension.md`
- Content guide: `docs/content/drive-review-dashboard-content-guidelines.md`

## Product Goal

本人の既存走行記録・訪問記録・コレクション進捗から、月間/年間/車両別の活動を安全かつプライベートに振り返れる状態を定義する。

本機能は競争・ランキング・運転技術評価を目的としない。

## Core Metrics

- ドライブ回数 = 対象期間の有効走行記録件数。
- 合計距離 = 距離入力済み有効走行記録の実績距離合計。
- 距離未入力を0kmとして補完しない。
- 平均距離の分母 = 距離入力済み有効走行記録件数。
- 分母0では平均値を0kmと表示しない。
- 計画距離/予定距離を実績統計へ混入しない。
- 同一走行記録を二重計上しない。
- 車両参照なし記録を推測で車両へ配分しない。
- 編集/削除/車両参照変更後に関連統計を再評価する。

## Codex Review Hardening

PR #142のCodexレビューでP1 2件 / P2 2件を受け、すべて修正・返信・Resolve済み。

### P1: 月所属を決める基準

- MVPでは日付のみの業務項目`走行日`を月・年所属の正本とする。
- `created_at`、`updated_at`、API受信時刻、閲覧時刻で月所属を決めない。
- 閲覧端末や将来のタイムゾーン設定変更で過去記録を再分類しない。
- 所属変更は`走行日`そのものを訂正した場合だけ行い、旧期間・新期間の双方を再集計する。
- 将来datetimeへ拡張する場合は別要件とする。

### P1: 公開投稿経由の漏えいテスト

公開経路を個別の必須テストとする。

1. 公開プロフィール
2. 公開投稿
3. 公開ストーリー

各正常閲覧レスポンス、serialized props、client state、prefetchデータへ本人限定統計を含めない。

### P2: 距離あり/未入力混在

- 距離入力済み記録が1件以上あれば、その記録群から合計/平均/最長距離を算出する。
- 距離未入力記録も混在する場合は「距離未入力の記録があります」と注記する。
- 全件距離未入力の場合だけ距離系を「距離データなし/算出できません」とする。
- 明示的な0kmは未入力と区別する。

### P2: 車両参照解除

- A→B: A/B双方を再集計。
- A→null: 旧車両Aを再集計し、解除後記録を他車両へ推測配分しない。
- null→B: 新車両Bを再集計。
- 旧車両の回数・距離・最終利用日・利用車両数等の古い派生値を残さない。

## Authorization / Privacy

- 統計ダッシュボードは本人限定。
- 公開プロフィール/投稿/ストーリーへ統計値を自動露出しない。
- 他ユーザーID/統計ID直指定で取得できない。
- 正確な頻出地点、自宅、勤務先、車両保管場所を推測表示しない。
- 停止/削除スポットの本文・画像・正確位置を統計画面から復活させない。

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

## PR #142 Status

- State: Open
- Mergeable: true
- Draft: false
- Latest compare before this status commit: 14 commits / 11 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex review: COMMENTED
- Codex findings: P1 2件 / P2 2件
- Codex findings: 全件修正・返信・Resolve済み
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし（最新headで再確認要）
- Human review: 未完了

workflow/statusが存在しない場合はCI通過とは扱わない。Codexレビュー対応済みでも人間レビューの代替とは扱わない。

## Recently Completed

### Issue #138 / PR #140

- Feature: 愛車の整備・給油・走行距離履歴要件
- Issue: Closed
- PR: Merged 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- Codex P1 3件 / P2 1件はマージ前に対応・Resolve済み
- MVP/画面deltaのcanonical統合は別作業として残る

## Web Foundation Governance

### Issue #139

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/139
- State: Open / `ai: blocked`
- Priority: Critical
- mainのADR-0002は`Status: Proposed`

PR #136がマージ済みという事実だけでADR承認済みと扱わない。

### Issue #137

- Phase 4 / Detail Design
- State: Open / `ai: blocked`
- Issue #139 / ADR-0002 acceptance待ち

### Issue #135

- Phase 5 / Implementation
- State: Open / `ai: blocked`
- Issue #139と#137完了後に開始可否を判断する

## Do Not Proceed

- AI判断だけでADR-0002を`Accepted`へ変更しない。
- Issue #137/#135のBlockedを解除しない。
- Webアプリ/DB/API/UIを実装しない。
- 未選定Auth/Maps/Storage/分析providerを導入しない。
- API keyを取得しない。
- 実ユーザー位置/走行記録をRepositoryへ入れない。

## Human Decisions for Issue #141

1. 任意期間フィルターをMVPへ含めるか。
2. 対象0件月を0としてグラフ描画するか、no-dataとして区別するか。
3. 粗いエリア集計をMVPへ含めるか。
4. 「過去の思い出」セクションをMVPへ含めるか。
5. 車両アーカイブ後の表示名をどう保持するか。
6. 将来の統計共有をロードマップ候補にするか。

## Next Steps

1. PR #142を人間レビューする。
2. 人間承認後、Issue #141のMVP/画面deltaとレビュー補足をcanonicalへ統合する。
3. PR #140由来のGarage deltaも別タスクでcanonical統合する。
4. Issue #139を人間のアーキテクチャレビューで解消する。
5. 承認できる場合、フォローアップPRでADR-0002を`Accepted`へ変更する。
6. Accepted後にIssue #137をunblockして詳細設計を進める。
7. Issue #137完了後、Issue #135でNext.js基盤とGitHub Actionsを実装する。
