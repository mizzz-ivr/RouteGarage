# Handoff（2026-08-10 / Issue #134）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 3 / Basic Design
- PR #133 / Issue #132は2026-08-10 09:39 JSTに完了。
- Repositoryには現時点でWebアプリ実装コードがない。
- 現在はIssue #134 / PR #136でWeb MVPのアプリ基盤を基本設計中。
- Issue #135を最初の実装Issueとして作成済みだが、PR #136完了までBlocked。

## Current Issue / PR

- Issue #134: https://github.com/mizzz-ivr/RouteGarage/issues/134
- PR #136: https://github.com/mizzz-ivr/RouteGarage/pull/136
- Branch: `docs/issue-134-web-app-foundation-design`
- Design: `docs/architecture/web-application-foundation-design.md`
- ADR: `docs/adr/ADR-0002-web-application-foundation.md`

## Pending Implementation

- Issue #135: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Title: Webアプリ基盤を初期実装し、PR品質ゲートを構築する
- Status: Blocked by #134 / PR #136
- Implementation starts only after PR #136 is approved and merged to main.

## Proposed Web Foundation

- Next.js / React / TypeScript
- App Router
- Tailwind CSS
- Node.js 24 LTS
- npm + `package-lock.json`
- TypeScript strict
- Repository root single Web app
- Server Component default
- Client Component only for required browser interaction

Next.js / React / Tailwindの正確なpackage versionはIssue #135開始時に公式stableを再確認し、lockfileで固定する。

## Layer Boundaries

- `src/app`: routing / layout / composition
- `src/features`: use case UI / application orchestration
- `src/domain`: provider-independent rule / type
- `src/adapters`: Auth / Maps / Storage / API external boundaries
- `src/shared`: reusable UI / utility

Dependency principle:

```text
app -> features -> domain
app -> shared
features -> shared
adapters -> domain
```

Do not allow:

- domain -> React / Next.js / provider SDK
- feature -> provider SDK directly
- shared -> feature-specific business rule

## Issue #135 Scope

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing page
- visible driving-safety notice
- error / not-found fallback
- `.env.example`
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions PR quality gate
- minimal README update

## Issue #135 Out of Scope

- DB / ORM
- Auth
- Maps / geolocation
- Storage / CDN
- real spot data
- real drive history
- drive collection business implementation
- production hosting decision
- iOS / Android

## Safety / Security Baseline

- Do not request geolocation / camera / microphone in foundation scope.
- Do not store secrets in Repository.
- Do not put secrets under `NEXT_PUBLIC_`.
- Do not use real user location or drive history in fixtures.
- Do not introduce unapproved provider SDKs.
- Show stop-before-use / no-driving-operation guidance from initial UI.

## Quality Gate Planned for #135

1. `npm ci`
2. lint
3. typecheck
4. unit/component test
5. production build
6. E2E smoke

CI is not a substitute for human review.

## Review Required for #136

- Product
- Tech lead / architect
- Frontend
- Security
- Privacy
- Safety
- Operations
- Project owner

## Remaining Tasks

1. PR #136を人間レビューする。
2. ADR-0002をAcceptedとしてよいか判断する。
3. 承認後PR #136をmainへマージする。
4. Issue #135の`ai: blocked`を削除し`ai: codex-ready`へ更新する。
5. Issue #135を別feature branch / PRで実装する。
6. 基盤完了後、業務機能ごとに詳細設計・実装へ進む。

## Do Not Proceed Yet

- Do not implement Issue #135 before PR #136 is complete.
- Do not select DB/Auth/Maps/Storage provider in foundation PR.
- Do not acquire API keys or send external data.
- Do not use real location/drive/user data.
