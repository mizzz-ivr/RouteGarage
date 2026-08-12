# Active Issues

## Active

### Issue #134 / PR #136: Webアプリ基盤の技術選定・基本設計

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/134
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/136
- Branch: `docs/issue-134-web-app-foundation-design`
- Phase: Phase 3 / Basic Design
- Status: PR Review
- Design: `docs/architecture/web-application-foundation-design.md`
- ADR: `docs/adr/ADR-0002-web-application-foundation.md`

設計対象:

- Next.js / React / TypeScript
- App Router
- Tailwind CSS
- Node.js 24 LTS
- npm / package-lock
- Server Component既定
- `app / features / domain / adapters / shared`責務分離
- environment / security baseline
- lint / typecheck / test / build / E2E / CI

### Issue #137: Webアプリ基盤初期実装の詳細設計・テスト仕様

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/137
- Phase: Phase 4 / Detail Design
- Status: **Blocked by #134 / PR #136**
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

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: **Blocked by #134 / #137**
- Labels: `ai: blocked`, `ai: human-review-required`

実装予定:

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing
- 安全注意表示
- error / not-found fallback
- `.env.example`
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions quality gate

PR #136とIssue #137が完了するまで実装開始しない。

## Recently Completed

- Issue #132 / PR #133: テーマ別ドライブコレクション・訪問進捗要件
  - Merged: 2026-08-10 09:39 JST
  - Merge commit: `13bd97b554ad2cc225beeee54dad1d3f6af1aa05`
- Issue #130 / PR #131: 24時間ドライブストーリー
- Issue #128 / PR #129: 行きたいスポット・ドライブプラン

## Design Decisions Under Review

- Web MVPはRepository rootの単一Next.jsアプリとする。
- 初期段階でmonorepo化しない。
- App Routerを採用する。
- Server Componentを既定とし、`use client`を最小化する。
- domainはReact / Next.js / provider SDKへ依存させない。
- featureからprovider SDKへ直接依存させない。
- DB/Auth/Maps/Storage/Hostingは別Issue/ADRまで未選定のまま維持する。
- Node.js 24 LTS + npm + package-lockを初期runtime/package方針とする。

## Cross-Cutting Gates

- PR #136の設計承認前にIssue #137を確定しない。
- Issue #137の詳細設計承認前にIssue #135を実装しない。
- provider未選定SDKを先行導入しない。
- 実位置・走行履歴・ユーザー画像をfixtureへ使用しない。
- geolocation / camera / microphoneを初期基盤で要求しない。
- secretsをRepositoryへ保存しない。
- CI成功を人間レビューの代替にしない。
- 業務機能をWeb基盤PRへ混在させない。

## Upcoming

1. PR #136の人間レビュー。
2. 承認後PR #136をmainへマージ。
3. Issue #137をunblockして詳細設計PRを作成。
4. Issue #137完了後Issue #135を`ai: codex-ready`へ更新。
5. Issue #135でWeb基盤とGitHub Actionsを実装。
6. 基盤完了後、各機能の詳細設計・実装Issueへ進む。
