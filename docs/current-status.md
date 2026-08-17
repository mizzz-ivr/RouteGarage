# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 5 / Implementation
- Current implementation: Issue #135 / Draft PR #145
- Branch: `feature/issue-135-web-foundation`
- Review follow-up: Issue #146
- AI生成物: 人間レビュー必須

## Web Foundation

### ADR-0002

- Status: `Accepted`
- PR #143で2026-08-14にmainへ反映済み
- 承認追跡と遅延レビュー対応はIssue #146を正本とする
- DB/Auth/Maps/Storage等のproviderは承認対象外のまま

### Issue #137 / PR #144

- Phase 4 / Detail Design
- Issue: Closed
- PR: Merged
- 詳細設計:
  - `docs/architecture/web-application-foundation-detail-design.md`
  - `docs/architecture/web-application-foundation-test-spec.md`

### Issue #135 / Draft PR #145

- Phase 5 / Implementation
- Issue: Open / Blocked解除済み
- PR: Draft / Open
- Branch: `feature/issue-135-web-foundation`
- GitHubへ反映済み: `package.json`
- App Router / UI / test / CI: 実装継続中
- `package-lock.json`: 未反映
- GitHub Actions / commit status: 現時点で未作成・未実行

workflow/statusが存在しないためCI通過とは扱わない。PR #145は実装・CI・レビュー完了までDraftを維持する。

## Issue #146: 遅延レビュー整合

PR #143 / #144のCodexレビューがマージ後に返却されたため、以下を実装前に整合する。

### PR #143

- P1: プロジェクトオーナー承認の追跡参照をADRへ追加
- P1: ADR Accepted / Issue状態を`current-status` / `active-issues`へ同期

### PR #144

- P1: Unit/Component testファイルを実装対象一覧へ追加
- P2: Security Headerをrootだけでなく404/unknown routeでも検証
- P2: GitHub Actions runner戦略を確定
- P2: README更新をIssue #135の実装対象へ追加

Issue #146完了前にPR #145をReady/Mergeしない。

## Runtime / Package

Issue #135では次を初期固定する。

- Node.js 24.18.1 LTS
- Next.js 16.2.12
- React / React DOM 19.2.8
- Tailwind CSS 4.3.3
- TypeScript 6.0.3
- ESLint 9.39.5
- Vitest 4.1.10
- React Testing Library 16.3.2
- jest-dom 7.0.0
- Playwright 1.62.0

`package-lock.json`を生成・commit後、CIは`npm ci`へ固定する。

## Initial Implementation Scope

- App Router root layout / landing
- SafetyNotice
- error / not-found fallback
- Tailwind / TypeScript / ESLint config
- Vitest / React Testing Library
- Playwright E2E
- Security Header
- `.env.example` / Node runtime固定
- README更新
- GitHub Actions quality gate

## Safety / Security / Privacy

- 走行中操作禁止をroot UIへ表示する
- geolocation / camera / microphoneを要求しない
- DB/Auth/Maps/Storage/analytics/AI SDKを導入しない
- secretsをRepositoryやclient公開envへ置かない
- 実ユーザー位置・実走行履歴をfixtureへ使わない
- error UIへ内部例外詳細を表示しない
- Server Componentを既定とする

## Test Gate

### Unit

- SafetyNotice
- Landing
- Error fallback
- 404

### E2E

- `/`表示
- 404表示
- root / 404のSecurity Header
- 320px viewport

### CI

- quality: `ubuntu-latest` + `windows-latest`
- e2e: `ubuntu-latest` + Chromium
- lint / typecheck / unit / build / E2Eのいずれか失敗でマージ不可

## Current Tooling Constraint

GitHub連携から`.tsx`等のソースコードを直接書き込む操作が安全チェックで拒否されている。未反映分は詳細設計に基づく実装bundleとして作成し、必須file存在、未承認provider混入なし、安全注意、CI write権限なしを静的確認済み。

この制約により未反映コードを完了扱いしない。GitHubへ実差分が入ってCIが実行されるまでPR #145はDraftを維持する。

## Recently Completed

- Issue #141 / PR #142: ドライブ振り返り・統計ダッシュボード要件
- Issue #138 / PR #140: 愛車の整備・給油・走行距離履歴要件
- Issue #139 / PR #143: ADR承認状態整合
- Issue #137 / PR #144: Web基盤詳細設計・テスト仕様

## Next Steps

1. Issue #146の正本同期をPR化し、遅延Codex指摘をResolveする。
2. PR #145へApp Router / UI / test / CI / lockfileを反映する。
3. 実際のGitHub Actions結果を確認し、失敗があればログから修正する。
4. Codex + 人間レビュー後にPR #145をReadyへ変更する。
5. Web基盤完了後、既に要件定義済みのDrive Collection等から最初のユーザー向けvertical sliceを基本設計→詳細設計→実装する。
