# Active Issues

## Active

### Issue #135 / PR #148: Webアプリ基盤の最終CI確認

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/148
- Phase: Phase 5 / Implementation
- PR Status: Merged 2026-08-18
- Merge commit: `132df5dcbb2dcb0726bcddd9ebdd8e8b77781e50`
- Issue Status: Open / main push CI確認待ち
- Priority: High

PR #148で以下の不足実装はmainへ反映済みです。

- Next.js App Router root layout / landing
- SafetyNotice
- error / 404
- Tailwind / TypeScript / ESLint
- Unit test 4系統
- Playwright E2E
- root / 404 Security Header
- `.env.example` / Node.js 24.18.1固定
- `package-lock.json`
- read-only GitHub Actions quality gate

PR headに対するGitHub Actionsは以下すべて成功済みです。

- Ubuntu quality
- Windows quality
- Ubuntu/Chromium E2E

`.github/workflows/web-quality.yml`は`push: main`にも設定済みですが、GitHub連携からmain push run一覧を取得できないため、main push CI成功は未確認です。確認できるまではIssue #135をCloseしません。

### Issue #150 / PR #151: ドライブ前チェックリスト・持ち物テンプレート要件

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/150
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/151
- Branch: `docs/issue-150-drive-prep-checklist-requirements`
- Phase: Phase 1 / Requirements
- Status: Open / Human review required
- Priority: High

追加済み:

- 標準テンプレート
- 個人テンプレート
- 今回のチェック
- `UNCHECKED` / `CHECKED`
- テンプレート更新と既存チェックを分離する不変条件
- 0件を100%完了扱いしない進捗ルール
- 基本/長距離/夜間/雨天/ツーリングの初期コンテンツ候補
- SCR-38〜40候補
- XSS/認可/本人限定境界
- 走行中操作禁止・安全保証禁止

Web基盤自体はmainへ反映済みです。Issue #150のPhase 5実装は、PR #151の人間レビュー → canonical統合 → 基本設計 → 詳細設計・テスト仕様の完了後に開始します。

## Recently Completed

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

## Issue #135 Completion Gate

1. App Router/UI/fallback実装: 完了
2. Unit test 4系統: 完了
3. E2E root/404/Header/mobile: 完了
4. `package-lock.json` commit: 完了
5. Ubuntu/Windows quality PR CI成功: 完了
6. Ubuntu/Chromium E2E PR CI成功: 完了
7. PRマージ: 完了
8. mainマージ後のpush CI確認: 未確認

## Issue #150 Phase Gate

1. PR #151で要件本文・MVP delta・画面候補・コンテンツガイドを人間レビュー
2. 未確定事項を確定または明示的に後続へ送る
3. canonical MVP/画面へ統合
4. 基本設計
5. 詳細設計・テスト仕様
6. Phase 5実装

## Upcoming

1. main push CI成功を確認後、Issue #135を完了する。
2. PR #151をレビューする。
3. Issue #150をcanonical統合 → 基本設計 → 詳細設計へ進める。
4. ゲート完了後、チェックリスト機能の最小vertical sliceを実装する。
5. Issue #132/#138/#141の未統合要件も順次canonicalへ統合する。
