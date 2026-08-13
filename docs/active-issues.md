# Active Issues

## Active

### Issue #141: ドライブ振り返り・統計ダッシュボード機能の要件定義

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/141
- Branch: `docs/issue-141-drive-review-dashboard-requirements`
- Phase: Phase 1 / Requirements Definition
- Status: Requirements Draft
- Priority: High

成果物:

- `docs/requirements/drive-review-dashboard-requirements.md`
- `docs/requirements/drive-review-dashboard-metrics-invariants.md`
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

### Issue #139: ADR-0002承認状態と実装ゲート整合

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/139
- Priority: Critical
- Area: Architecture / Project Management
- Status: Open / `ai: blocked`

背景:

- PR #136は2026-08-12 09:08 JSTにmainへマージ済み。
- mainのADR-0002は`Status: Proposed`のまま。
- ADR自身はマージ前の人間レビューと`Accepted`遷移を必須条件としていた。

方針:

- PRマージ済みという理由だけでADR承認済み扱いしない。
- 人間レビューで承認できる場合、フォローアップPRで`Accepted`へ更新する。
- Acceptedがmainへ入るまでIssue #137をunblockしない。
- Issue #137完了までIssue #135をunblockしない。

### Issue #137: Webアプリ基盤初期実装の詳細設計・テスト仕様

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/137
- Phase: Phase 4 / Detail Design
- Status: **Blocked by Issue #139 / ADR-0002 acceptance**
- Labels: `ai: blocked`, `ai: human-review-required`

詳細化予定:

- 初期作成ファイル一覧
- Node / package / npm scripts
- landing / safety / error / 404 acceptance
- env / security headers
- Vitest / RTL cases
- Playwright smoke cases
- GitHub Actions trigger / jobs / failure behavior

### Issue #135: Webアプリ基盤を初期実装し、PR品質ゲートを構築する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: **Blocked by Issue #139 / #137**
- Labels: `ai: blocked`, `ai: human-review-required`

実装予定:

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing
- 安全注意表示
- error / not-found fallback
- `.env.example`
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions quality gate

## Recently Completed

### Issue #138 / PR #140: 愛車の整備・給油・走行距離履歴

- Issue #138: Closed
- PR #140: Merged 2026-08-13 09:36 JST
- Merge commit: `fe3520c57811b19e2c3a925d59db1b3bef2df3fb`
- Codex P1 3件 / P2 1件は対応・Resolve済み
- MVP/画面deltaのcanonical統合は別作業として残る

### Issue #134 / PR #136: Webアプリ基盤の技術選定・基本設計

- PR #136 merged: 2026-08-12 09:08 JST
- Merge commit: `f20f157b396ccca49210b791849dbaef510c0bad`
- ADR-0002はmain上で`Proposed`のため、承認状態はIssue #139で整合する

### その他

- Issue #132 / PR #133: テーマ別ドライブコレクション・訪問進捗要件
- Issue #130 / PR #131: 24時間ドライブストーリー
- Issue #128 / PR #129: 行きたいスポット・ドライブプラン

## Issue #141 Review Decisions

人間レビューで特に確認する。

1. 任意期間フィルターをMVPへ含めるか。
2. 0件月をグラフで0表示するか、データなしとして区別するか。
3. 粗いエリア集計をMVPへ含めるか。
4. 過去の思い出セクションをMVPへ含めるか。
5. 車両アーカイブ後の表示名方針。
6. 将来の統計共有をロードマップ候補にするか。

## Cross-Cutting Gates

- Issue #141の承認だけでDB/API/UI実装へ進まない。
- `Proposed` ADRのままIssue #137/#135を開始しない。
- provider未選定SDKを先行導入しない。
- 実位置・実走行履歴・実ユーザー画像をfixtureへ使用しない。
- geolocation / camera / microphoneをWeb基盤から要求しない。
- secretsをRepositoryへ保存しない。
- CI成功を人間レビューの代替にしない。
- 統計値を運転技術評価/競争機能へ拡張しない。

## Upcoming

1. Issue #141要件PRを作成する。
2. Codexレビューを実施し、指摘を同PR内で解消する。
3. 人間承認後、MVP/画面正本へdeltaを統合する。
4. PR #140由来のGarage delta canonical統合を別タスク化する。
5. Issue #139でADR-0002の承認状態を整合する。
6. ADR Accepted後にIssue #137をunblockする。
7. Issue #137詳細設計完了後、Issue #135でWeb基盤/品質ゲートを実装する。
