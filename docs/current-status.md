# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 5 / Implementation
- Current implementation: Issue #135 / Draft PR #148
- Review follow-up: Issue #146
- AI生成物: 人間レビュー必須

## Web Foundation

### ADR-0002

- Status: `Accepted`
- PR #143でmainへ反映済み
- DB/Auth/Maps/Storage等のproviderは承認対象外のまま

### Issue #137 / PR #144

- Phase 4 / Detail Design
- Issue: Closed
- PR: Merged
- 詳細設計:
  - `docs/architecture/web-application-foundation-detail-design.md`
  - `docs/architecture/web-application-foundation-test-spec.md`

### Issue #135

PR #145は2026-08-17にマージされましたが、実差分は`package.json`のみでした。Issue #135の完了条件は未達のため、Draft PR #148で不足実装を継続しています。

PR #148:

- App Router root layout / landing
- SafetyNotice
- error / not-found
- Tailwind / TypeScript / ESLint / Vitest / Playwright
- root / 404 Security Header
- Unit test 4系統
- E2E root / 404 / Header / 320px
- `.env.example` / `.nvmrc`
- npm実解決から生成した`package-lock.json`
- read-only GitHub Actions

初回PR CI:

- `quality (ubuntu-latest)`: 成功
- `quality (windows-latest)`: 成功
- `e2e (ubuntu-latest / Chromium)`: 成功

この成功はPR #148の当該headに対する結果であり、人間レビューの代替ではありません。PR #148はCodex・人間レビュー完了までDraftを維持します。

## Issue #146: 遅延レビュー整合

PR #147はマージ済みですが、Codexの追加P2 3件を修正する前のheadがmainへ入りました。そのため追加docs同期を実施します。

追加同期:

- UT-002で未実装routeへのリンク・ボタン・CTAを禁止
- 320pxでドライブ / ガレージ / 振り返りの主要静的コンテンツ欠落を検証
- Issue #138/#141のcanonical統合タスクを未完了として保持
- PR #145マージ後のIssue #135実状態とPR #148を正本へ同期

## Runtime / Package

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

`package-lock.json`はnpm実解決結果をcommitし、CIは`npm ci`を使用します。

## Safety / Security / Privacy

- 走行中操作禁止をroot UIへ表示する
- geolocation / camera / microphoneを要求しない
- DB/Auth/Maps/Storage/analytics/AI SDKを導入しない
- secretsをRepositoryやclient公開envへ置かない
- 実ユーザー位置・実走行履歴をfixtureへ使わない
- error UIへ内部例外詳細を表示しない
- Server Componentを既定とする
- Security Headerは全routeへ適用し、root/404双方をE2E検証する

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
- 最終workflowは`contents: read`のみ

## Requirement Integration Backlog

### Issue #138

Garage整備・給油・走行距離履歴のMVP/画面deltaはcanonical未統合。実装前に正本へ統合する。

### Issue #141

ドライブ振り返り・統計ダッシュボードのMVP/画面deltaと人間判断事項はcanonical未統合。実装前に正本へ統合する。

## Next Steps

1. PR #148のCodexレビューを確認し、指摘を修正する。
2. Issue #146の追加docs同期PRをマージする。
3. PR #148を人間レビューし、承認後にマージする。
4. main push CI成功後にIssue #135を完了する。
5. Issue #138/#141のcanonical統合を進める。
6. Web基盤完了後、要件定義済み機能から最初のユーザー向けvertical sliceを基本設計→詳細設計→実装する。
