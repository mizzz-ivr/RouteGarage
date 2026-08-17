# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 5 / Implementation
- Current implementation: Issue #135
- Review follow-up: Issue #146 / PR #147
- AI生成物: 人間レビュー必須

## Web Foundation

### ADR-0002

- Status: `Accepted`
- PR #143で2026-08-14にmainへ反映済み
- 承認追跡と遅延レビュー対応はIssue #146 / PR #147で管理
- DB/Auth/Maps/Storage等のproviderは承認対象外のまま

### Issue #137 / PR #144

- Phase 4 / Detail Design
- Issue: Closed
- PR: Merged
- 詳細設計:
  - `docs/architecture/web-application-foundation-detail-design.md`
  - `docs/architecture/web-application-foundation-test-spec.md`

### Issue #135 / PR #145

- Phase 5 / Implementation
- Issue: Open / Blocked解除済み
- PR #145: 2026-08-17にMerged
- PR #145の実差分: `package.json`のみ
- Issue #135の完了条件: 未達
- App Router / UI / test / CI: 未実装
- `package-lock.json`: 未反映
- GitHub Actions / commit status: 未作成・未実行

PR #145のマージ事実だけでIssue #135を完了扱いしない。実際のコード・テスト・CIが揃うまでPhase 5を継続する。

## Issue #146 / PR #147: 遅延レビュー整合

PR #143 / #144の遅延Codex指摘と、PR #145マージ後の実状態を正本へ同期する。

対応内容:

- プロジェクトオーナー承認の追跡参照をADRへ追加
- ADR Accepted / Issue状態を`current-status` / `active-issues`へ同期
- Unit/Component testファイルを実装対象一覧へ追加
- Security Headerをrootだけでなく404/unknown routeでも検証
- GitHub Actions runner戦略を確定
- README更新をIssue #135の実装対象へ追加
- UT-002で未実装routeへの偽リンク・偽ボタンを禁止
- 320px viewportで主要静的コンテンツ欠落を検証
- Issue #138/#141のcanonical統合タスクを継続管理

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
- Landing + 未実装routeへの操作要素なし
- Error fallback
- 404

### E2E

- `/`表示
- 404表示
- root / 404のSecurity Header
- 320px viewportで主要静的コンテンツ欠落なし

### CI

- quality: `ubuntu-latest` + `windows-latest`
- e2e: `ubuntu-latest` + Chromium
- lint / typecheck / unit / build / E2Eのいずれか失敗で完了不可

## Requirement Integration Backlog

### Issue #138

Garage整備・給油・走行距離履歴のMVP/画面deltaはcanonical未統合。実装前に正本へ統合する。

### Issue #141

ドライブ振り返り・統計ダッシュボードのMVP/画面deltaと人間判断事項はcanonical未統合。実装前に正本へ統合する。

## Next Steps

1. PR #147のP2指摘を解消してマージし、Issue #146を完了する。
2. Issue #135の不足実装をフォローアップPRで追加する。
3. `package-lock.json`を実依存解決から生成する。
4. GitHub Actionsを実行し、lint/typecheck/unit/build/E2Eの失敗を修正する。
5. Codex + 人間レビュー後にIssue #135を完了する。
6. Issue #138/#141のcanonical統合を進める。
7. Web基盤完了後、要件定義済み機能から最初のユーザー向けvertical sliceを基本設計→詳細設計→実装する。
