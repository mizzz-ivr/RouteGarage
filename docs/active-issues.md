# Active Issues

## Active

### Issue #141 / PR #142: ドライブ振り返り・統計ダッシュボード機能の要件定義

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/141
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/142
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition
- Status: Human Review
- Priority: High

成果物:

- `docs/requirements/drive-review-dashboard-requirements.md`
- `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- `docs/requirements/issue-141-review-clarifications.md`
- `docs/requirements/issue-141-mvp-delta.md`
- `docs/screen-design/drive-review-dashboard-screen-extension.md`
- `docs/content/drive-review-dashboard-content-guidelines.md`

主要スコープ:

- 期間サマリー
- 月別推移
- 車両別振り返り
- 訪問/コレクション振り返り
- 最近の走行記録
- 次のドライブへの手動導線

主要ガードレール:

- 本人限定
- 距離未入力を0km扱いしない
- 計画値を実績へ混ぜない
- 二重計上しない
- 正確な頻出地点を出さない
- ランキング/速度/最短時間/ストリークを出さない
- 走行量を煽らない

Codexレビュー:

- P1: 月所属基準未確定 → `走行日`をMVPの月/年所属正本として固定
- P1: 公開投稿経由の漏えいテスト不足 → 公開プロフィール/投稿/ストーリーを独立必須テスト化
- P2: 距離あり/未入力混在表示 → 算出値 + 欠損注記、全件未入力時だけデータなし
- P2: 車両参照解除時の再集計 → A→null/null→Bを明示し旧車両派生値を再評価
- 全4件を修正・返信・Resolve済み
- 未解決review thread: 0
- Human review: 未完了

### Issue #139: ADR-0002承認状態と実装ゲート整合

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/139
- Priority: Critical
- Status: Open / `ai: blocked`
- PR #136はマージ済みだがmainのADR-0002は`Status: Proposed`
- 人間レビューで承認できる場合のみフォローアップPRで`Accepted`へ更新する
- Acceptedがmainへ入るまでIssue #137をunblockしない

### Issue #137: Webアプリ基盤初期実装の詳細設計・テスト仕様

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/137
- Phase: Phase 4 / Detail Design
- Status: Blocked by Issue #139 / ADR-0002 acceptance
- Labels: `ai: blocked`, `ai: human-review-required`

### Issue #135: Webアプリ基盤を初期実装し、PR品質ゲートを構築する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: Blocked by Issue #139 / #137
- Labels: `ai: blocked`, `ai: human-review-required`

## Recently Completed

### Issue #138 / PR #140: 愛車の整備・給油・走行距離履歴

- Issue #138: Closed
- PR #140: Merged 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- MVP/画面deltaのcanonical統合は別作業として残る

### Issue #134 / PR #136

- PR #136: Merged 2026-08-12 09:08 JST
- ADR-0002はmain上で`Proposed`のためIssue #139で整合する

## Issue #141 Human Decisions

1. 任意期間フィルターをMVPへ含めるか。
2. 0件月を0表示するか、no-dataとして区別するか。
3. 粗いエリア集計をMVPへ含めるか。
4. 「過去の思い出」をMVPへ含めるか。
5. 車両アーカイブ後の表示名方針。
6. 将来の統計共有をロードマップ候補にするか。

## Cross-Cutting Gates

- Issue #141の承認だけでDB/API/UI実装へ進まない。
- `Proposed` ADRのままIssue #137/#135を開始しない。
- provider未選定SDKを先行導入しない。
- 実位置・実走行履歴・実ユーザー画像をfixtureへ使用しない。
- secretsをRepositoryへ保存しない。
- CI成功を人間レビューの代替にしない。

## Upcoming

1. PR #142の人間レビュー。
2. 承認後、Issue #141 delta/レビュー補足をcanonicalへ統合。
3. PR #140由来Garage deltaもcanonical統合。
4. Issue #139を人間レビューで解消。
5. ADR Accepted後、Issue #137を進める。
6. Issue #137完了後、Issue #135でWeb基盤/品質ゲートを実装する。
