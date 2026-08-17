# Active Issues

## Active

### Issue #146: Web基盤の遅延レビュー指摘を実装前に整合する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/146
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/147
- Phase: Review Follow-up
- Status: Open
- Priority: High

対象:

- PR #143 P1: 承認記録への具体参照
- PR #143 P1: ADR Acceptedとcurrent-status/active-issuesの同期
- PR #144 P1: Unit test file一覧
- PR #144 P2: 404/unknown routeのSecurity Header test
- PR #144 P2: Ubuntu/Windows runner戦略
- PR #144 P2: READMEをIssue #135対象へ追加
- PR #147 P2: Issue #138/#141のcanonical統合タスクを残す
- PR #147 P2: UT-002で未実装routeへの操作要素を禁止する
- PR #147 P2: 320pxで主要コンテンツ欠落を検証する

### Issue #135: Webアプリ基盤初期実装

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: Open / 実装継続中
- `ai: blocked`: 解除済み
- Human review: 必須

PR #145は2026-08-17にmainへマージ済みだが、差分は`package.json`のみであり、Issue #135の完了条件は満たしていない。

mainへ反映済み:

- `package.json`

未実装:

- Next.js App Router
- root layout / landing
- SafetyNotice
- error / 404
- Tailwind / TypeScript / ESLint設定
- Unit test / Playwright E2E
- Security Header
- `.env.example` / Node version固定
- README実装状態更新
- `package-lock.json`
- GitHub Actions quality gate

ガードレール:

- DB/Auth/Maps/Storage/analytics/AI SDKを追加しない
- geolocation/camera/microphoneを要求しない
- 実位置/実走行履歴をfixtureへ使わない
- secretsをRepositoryへ置かない
- Server Component既定
- 実際のworkflow/statusが成功するまでCI成功とは扱わない

## Recently Completed

### Issue #137 / PR #144

- Webアプリ基盤の詳細設計・テスト仕様
- Merged / Closed
- 遅延Codex指摘はIssue #146 / PR #147で追跡

### Issue #139 / PR #143

- ADR-0002を`Accepted`へ整合
- Merged / Closed
- 遅延Codex指摘はIssue #146 / PR #147で追跡

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

## Quality Gate for Issue #135

Issue #135を完了するには次を満たす。

1. Issue #146 / PR #147のレビュー指摘を解消
2. App Router/UI/fallback実装
3. Unit test 4系統
4. E2E root/404/Header/mobile
5. `package-lock.json` commit
6. Ubuntu/Windows quality CI成功
7. Ubuntu/Chromium E2E成功
8. Codexレビュー
9. 人間レビュー

workflow/statusがない状態をCI成功とは扱わない。

## Upcoming

1. PR #147のCodex指摘を解消してマージし、Issue #146を完了する。
2. Issue #135の不足実装をフォローアップPRで完成する。
3. 実CI結果を確認し、失敗があればログから修正する。
4. Issue #138のMVP/画面deltaをcanonicalへ統合する。
5. Issue #141のMVP/画面deltaと人間判断事項をcanonicalへ統合する。
6. Web基盤完了後、要件定義済み機能から最初のユーザー向けvertical sliceを基本設計→詳細設計→実装する。
