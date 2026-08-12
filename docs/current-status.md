# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 3 / Basic Design
- Current task: Issue #134 / PR #136
- Task: Webアプリ基盤の技術選定・基本設計
- Branch: `docs/issue-134-web-app-foundation-design`
- Detail design: Issue #137（Blocked by #134 / PR #136）
- Implementation: Issue #135（Blocked by #134 / #137）
- AI生成物: 人間レビュー必須

## Current Issue / PR

- Issue #134: https://github.com/mizzz-ivr/RouteGarage/issues/134
- PR #136: https://github.com/mizzz-ivr/RouteGarage/pull/136
- Design: `docs/architecture/web-application-foundation-design.md`
- ADR: `docs/adr/ADR-0002-web-application-foundation.md`

## PR Status

- State: Open
- Mergeable: true
- Draft: false
- Changes: docs / README only
- AI支援セルフレビュー: COMMENT済み
- Codex自動レビュー: P1 2件
  - 詳細設計を完了してから#135をunblockする → Issue #137を作成し、#135を#134/#137の両方にBlockedへ修正済み
  - ADRをマージ前にAcceptedへ遷移する → 同一PRの最終commitでAcceptedへ変更する必須ゲートをADRへ追加済み
- Codex review thread: 2件とも返信・解決済み / outdated
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし
- Human review: 未完了

CI通過とは扱わない。PR #136は人間レビューとADR Accepted遷移前にマージしない。

## ADR Acceptance Gate

ADR-0002は現在`Proposed`。

PR #136のマージ必須条件:

1. 必須人間レビューで技術選定を承認する。
2. 同一PR #136の最終commitでADR-0002を`Accepted`へ変更する。
3. Accepted変更後の最終headを再レビューする。
4. 未解決review thread 0件を確認する。
5. Accepted状態のADRがmainへ入るまでIssue #137をunblockしない。
6. Issue #137完了までIssue #135をunblockしない。

## 直近の完了

- Issue #132 / PR #133: テーマ別ドライブコレクション・訪問進捗要件
  - Merged: 2026-08-10 09:39 JST
  - Merge commit: `13bd97b554ad2cc225beeee54dad1d3f6af1aa05`
- Issue #130 / PR #131: 24時間ドライブストーリー要件
- Issue #128 / PR #129: 行きたいスポット・ドライブプラン要件

## Current Design

採用案:

- Next.js / React / TypeScript
- App Router
- Tailwind CSS
- Node.js 24 LTS
- npm + `package-lock.json`
- TypeScript strict
- Repository rootの単一Webアプリ
- Server Component既定 / Client Component最小化

Next.js / React / Tailwindの正確なpackage versionは実装直前に公式stableを再確認し、lockfileで固定する。

## Layer Boundaries

```text
src/app -> src/features -> src/domain
src/app -> src/shared
src/features -> src/shared
src/adapters -> src/domain
```

- `app`: routing / layout / composition
- `features`: use case UI / application orchestration
- `domain`: provider非依存のrule / type
- `adapters`: Auth / Maps / Storage / API等の外部境界
- `shared`: 共通UI / utility

禁止:

- domain -> React / Next.js / provider SDK
- feature -> provider SDK直結
- shared -> feature固有rule

## Next Phase Gate

### Issue #137: 詳細設計

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/137
- Phase: Phase 4 / Detail Design
- Status: Blocked by #134 / PR #136
- Scope: file一覧、package scripts、UI acceptance、security header、unit/E2E cases、GitHub Actions詳細

### Issue #135: 実装

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: Blocked by #134 / #137

Issue #135の対象:

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing page
- 走行中操作禁止の安全注意表示
- 404 / error fallback
- `.env.example`
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions quality gate

## Do Not Implement Yet

PR #136とIssue #137が完了する前にIssue #135を開始しない。

Issue #135でも次は実装しない。

- DB / ORM
- Auth provider
- Maps SDK / geolocation
- Storage / CDN
- 実スポット / 実走行履歴
- ドライブコレクション等の業務機能
- 本番Hosting
- iOS / Android

## Safety / Privacy Baseline

- 初期UIから「走行中は操作しない」を表示する。
- geolocation / camera / microphoneを要求しない。
- secretsをRepositoryへ保存しない。
- `NEXT_PUBLIC_`へ秘密情報を置かない。
- 実ユーザー位置・走行履歴をfixtureへ使用しない。
- provider未選定のSDKを先行導入しない。

## Quality Gate

Issue #137で具体仕様を確定し、Issue #135で実装する。

1. `npm ci`
2. lint
3. typecheck
4. unit/component test
5. production build
6. E2E smoke

CI成功を人間レビューの代替にしない。

## Required Review for #136

- プロダクト
- テックリード / アーキテクト
- フロントエンド
- セキュリティ
- プライバシー
- 安全
- 運用
- プロジェクト責任者

## Next Steps

1. PR #136を人間レビューする。
2. ADR-0002をAcceptedとしてよいか判断する。
3. 承認後、同一PRでADRをAcceptedへ変更し最終headを再レビューする。
4. PR #136をmainへマージする。
5. Issue #137の`ai: blocked`を解除して詳細設計を進める。
6. Issue #137完了後、Issue #135の`ai: blocked`を解除し`ai: codex-ready`へ更新する。
7. Issue #135で初めて実コードとGitHub Actionsを追加する。
