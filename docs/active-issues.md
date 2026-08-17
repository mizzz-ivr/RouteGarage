# Active Issues

## Active

### Issue #146: Web基盤の遅延レビュー指摘を実装前に整合する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/146
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

完了前にPR #145をReady/Mergeしない。

### Issue #135 / Draft PR #145: Webアプリ基盤初期実装

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/145
- Branch: `feature/issue-135-web-foundation`
- Phase: Phase 5 / Implementation
- Status: Draft / 実装中
- `ai: blocked`: 解除済み
- Human review: 必須

GitHubへ反映済み:

- `package.json`

実装対象:

- Next.js App Router
- root layout / landing
- SafetyNotice
- error / 404
- Tailwind / TypeScript / ESLint
- Unit test / Playwright E2E
- Security Header
- `.env.example` / Node version固定
- README更新
- `package-lock.json`
- GitHub Actions quality gate

ガードレール:

- DB/Auth/Maps/Storage/analytics/AI SDKを追加しない
- geolocation/camera/microphoneを要求しない
- 実位置/実走行履歴をfixtureへ使わない
- secretsをRepositoryへ置かない
- Server Component既定
- 実装/CI未完了のためDraft維持

## Recently Completed

### Issue #137 / PR #144

- Webアプリ基盤の詳細設計・テスト仕様
- Merged / Closed
- 遅延Codex指摘はIssue #146で追跡

### Issue #139 / PR #143

- ADR-0002を`Accepted`へ整合
- Merged / Closed
- 遅延Codex指摘はIssue #146で追跡

### Issue #141 / PR #142

- ドライブ振り返り・統計ダッシュボード要件
- Merged / Closed

### Issue #138 / PR #140

- 愛車の整備・給油・走行距離履歴要件
- Merged / Closed

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

## Quality Gate for PR #145

PR #145をReady/Mergeするには次を満たす。

1. Issue #146のP1/P2を解消
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

1. Issue #146フォローアップPRをマージし、PR #143/#144のthreadをResolve。
2. Draft PR #145の実装を完成。
3. 実CI結果を確認・修正。
4. PR #145マージ後、要件定義済み機能から最初のユーザー向けvertical sliceを設計→実装。
