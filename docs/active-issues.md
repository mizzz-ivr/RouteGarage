# Active Issues

## Active

### Issue #152: ドライブ前チェックリスト要件のcanonical統合

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/152
- Branch: `docs/issue-152-prep-checklist-canonical-integration`
- Phase: Phase 1 / Requirements integration
- Status: 作業中 / Human review required
- Priority: High

Issue #150 / PR #151で承認・マージされたチェックリスト要件を既存正本へ統合します。

対象:

- `docs/requirements/mvp-requirements.md`
- `docs/screen-design/screen-list.md`
- `docs/screen-design/screen-flow.md`
- `docs/current-status.md`
- `docs/active-issues.md`

統合内容:

- FR-PREP-01〜17
- 標準テンプレート / 個人テンプレート / 今回のチェックの責務分離
- `UNCHECKED` / `CHECKED`
- テンプレート更新で既存チェックを暗黙変更しない不変条件
- 0項目を100%完了扱いしない
- `CHECKED`を安全・整備・法的適合・走行可否保証へ変換しない
- SCR-38〜40
- SCR-05 → SCR-39 → SCR-38/40の導線
- 本人限定/XSS/停止時利用境界

PR #151で未確定として残った以下は、本Issueで推測確定しません。

1. 今回チェック履歴をMVPで保持するか
2. テンプレート/項目の件数・文字数上限
3. 項目カテゴリのユーザー編集可否
4. 一括チェック/一括解除
5. 標準テンプレート新版案内
6. ホームの最近使ったテンプレート表示

Issue #152の人間レビュー・マージ後、Phase 3基本設計へ進みます。

### Issue #135 / PR #148: Webアプリ基盤の最終CI確認

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/148
- Phase: Phase 5 / Implementation
- PR Status: Merged 2026-08-18
- Merge commit: `132df5dcbb2dcb0726bcddd9ebdd8e8b77781e50`
- Issue Status: Open / main push CI確認待ち
- Priority: High

PR #148でWeb基盤実装はmainへ反映済みです。

PR headに対するGitHub Actions:

- Ubuntu quality: success
- Windows quality: success
- Ubuntu/Chromium E2E: success

`.github/workflows/web-quality.yml`は`push: main`にも設定済みですが、現在のGitHub連携からmain push run一覧を取得できないため、main push CI成功は未確認です。確認できるまではIssue #135をCloseしません。

## Recently Completed

### Issue #150 / PR #151

- ドライブ前チェックリスト・持ち物テンプレート要件
- PR #151: Merged 2026-08-19
- Issue #150: Closed
- PR head CI: Ubuntu / Windows quality + Chromium E2E success
- canonical統合はIssue #152へ引き継ぎ

### Issue #146 / PR #149

- Web基盤遅延レビューの追加同期
- PR #149: Merged 2026-08-18
- Issue #146: Closed / completed

### Issue #137 / PR #144

- Webアプリ基盤の詳細設計・テスト仕様
- Merged / Closed

### Issue #139 / PR #143

- ADR-0002を`Accepted`へ整合
- Merged / Closed

### Issue #141 / PR #142

- ドライブ振り返り・統計ダッシュボード要件
- Merged / Closed
- MVP/画面deltaのcanonical統合は未完了

### Issue #138 / PR #140

- 愛車の整備・給油・走行距離履歴要件
- Merged / Closed
- MVP/画面deltaのcanonical統合は未完了

### Issue #132 / PR #133

- テーマ別ドライブコレクション・訪問進捗要件
- Merged / Closed
- `UNAVAILABLE`分母ルール、バッジ採用等の確認後にcanonical統合が必要

## Current Architecture Decision

ADR-0002: `Accepted`

採用:

- Next.js App Router
- React / TypeScript strict
- Tailwind CSS
- Node.js 24 LTS + npm
- Repository rootの単一Webアプリ
- Server Component既定

未選定:

- DB / ORM
- Auth provider
- Maps / geolocation provider
- Storage / CDN
- Hosting
- analytics

## Checklist Phase Gate

1. Issue #150 / PR #151 要件定義: 完了
2. Issue #152 canonical MVP/画面統合: 進行中
3. Phase 3 基本設計: 未開始
4. Phase 4 詳細設計・テスト仕様: 未開始
5. Phase 5 実装: 未開始

基本設計・詳細設計を飛ばして実装しません。

## Issue #135 Completion Gate

1. App Router/UI/fallback実装: 完了
2. Unit test 4系統: 完了
3. E2E root/404/Header/mobile: 完了
4. `package-lock.json` commit: 完了
5. Ubuntu/Windows quality PR CI成功: 完了
6. Ubuntu/Chromium E2E PR CI成功: 完了
7. PRマージ: 完了
8. mainマージ後のpush CI確認: 未確認

## Upcoming

1. Issue #152のcanonical統合PRをレビュー・マージする。
2. チェックリストの基本設計Issueを作成する。
3. 基本設計レビュー後、詳細設計・テスト仕様へ進む。
4. ゲート完了後、SCR-39 → SCR-38の最小vertical sliceを実装する。
5. Issue #132/#138/#141の未統合要件も順次canonicalへ統合する。
6. main push CI確認後、Issue #135を完了する。
