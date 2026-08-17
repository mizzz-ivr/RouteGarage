# Active Issues

## Active

### Issue #135 / Draft PR #148: Webアプリ基盤の不足実装を完成する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/148
- Branch: `feature/issue-135-web-foundation-completion`
- Phase: Phase 5 / Implementation
- Status: Draft / Codex・人間レビュー待ち
- Priority: High

PR #145は2026-08-17にマージ済みですが、実差分は`package.json`のみでした。Issue #135は未完了のため、PR #148で不足実装を継続しています。

PR #148実装済み:

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

初回GitHub Actions:

- Ubuntu quality: 成功
- Windows quality: 成功
- Ubuntu/Chromium E2E: 成功

CI成功は当該headに対する実結果としてのみ扱い、人間レビューの代替にはしません。

### Issue #146: Web基盤の遅延レビュー指摘を整合する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/146
- PR #147: Merged
- 追加フォローアップ: PR作成中
- Status: Open

PR #147がCodex追加指摘の修正前にマージされたため、以下をmainへ追加同期する必要があります。

- UT-002で未実装routeへのリンク・ボタン・CTAを禁止
- 320pxで主要静的コンテンツが欠落しないことをE2E必須化
- Issue #138/#141のcanonical統合タスクを未完了として保持
- PR #145マージ後のIssue #135実状態とPR #148を正本へ反映

## Recently Completed

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

1. App Router/UI/fallback実装
2. Unit test 4系統
3. E2E root/404/Header/mobile
4. `package-lock.json` commit
5. Ubuntu/Windows quality CI成功
6. Ubuntu/Chromium E2E成功
7. Codexレビュー指摘解消
8. 人間レビュー
9. mainマージ後のpush CI確認

## Upcoming

1. PR #148のCodexレビューを確認し、指摘を修正する。
2. Issue #146の追加docs同期PRをマージし、Issue #146を完了する。
3. PR #148を人間レビューし、承認後にマージする。
4. mainのpush CI成功を確認後、Issue #135を完了する。
5. Issue #138のMVP/画面deltaをcanonicalへ統合する。
6. Issue #141のMVP/画面deltaと人間判断事項をcanonicalへ統合する。
7. Web基盤完了後、要件定義済み機能の最初のvertical sliceを設計→実装する。
