# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Web foundation: Issue #135 / PR #148
- Current product requirements: Issue #150
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

### Issue #135 / PR #148

PR #145は2026-08-17にマージされましたが、実差分は`package.json`のみでした。Issue #135の完了条件は未達のため、PR #148で不足実装を継続しています。

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

2026-08-18時点:

- PR #148: Open / Ready for Review / mergeable
- Codex review: 利用上限により実行不可
- Human review: 未完了
- 初回CI成功は当該headに対する結果であり、人間レビューの代替ではない

### Issue #146 / PR #149

- PR #149: 2026-08-18にMerged
- Issue #146: Closed / completed
- PR #147マージ後にmainへ入り切らなかったUT-002、320px E2E条件、未統合要件、PR #145/#148実状態を正本へ追加同期済み

## Issue #150: ドライブ前チェックリスト・持ち物テンプレート

- Phase: Phase 1 / Requirements
- Branch: `docs/issue-150-drive-prep-checklist-requirements`
- Status: 要件定義中 / 人間レビュー必須

目的:

- 出発前/停車中の忘れ物・準備確認を支援する
- 基本/長距離/夜間/雨天/ツーリング等のテンプレート候補を提供する
- 個人テンプレートを本人限定で管理する
- `CHECKED`を安全・整備・走行可否保証へ変換しない
- GPS/Weather/OBD/通知providerを先取りしない

主要要件:

- 標準テンプレート / 個人テンプレート / 今回のチェックを別責務とする
- テンプレート更新で既存チェックを暗黙変更しない
- `UNCHECKED` / `CHECKED`のみをMVP状態候補とする
- 0項目を100%完了扱いしない
- 個人テンプレート/チェックは本人限定
- 走行中操作禁止を維持する

レビュー用資料:

- `docs/requirements/drive-prep-checklist-requirements.md`
- `docs/requirements/issue-150-mvp-delta.md`
- `docs/screen-design/drive-prep-checklist-screen-extension.md`
- `docs/content/drive-prep-checklist-content-guidelines.md`

Phase 5実装は、Issue #150の人間レビュー、canonical統合、基本設計、詳細設計、Web基盤PR #148のmain反映が完了するまで開始しない。

## Runtime / Package

PR #148で採用している基盤version:

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

`package-lock.json`はnpm実解決結果をcommitし、CIは`npm ci`を使用する。

## Safety / Security / Privacy

- 走行中操作禁止をroot UIへ表示する
- geolocation / camera / microphoneを要求しない
- DB/Auth/Maps/Storage/analytics/AI SDKを未承認のまま導入しない
- secretsをRepositoryやclient公開envへ置かない
- 実ユーザー位置・実走行履歴をfixtureへ使わない
- error UIへ内部例外詳細を表示しない
- Server Componentを既定とする
- Security Headerは全routeへ適用し、root/404双方をE2E検証する
- Issue #150では個人入力を任意HTMLとして扱わず、チェック完了を安全保証へ変換しない

## Test Gate

### Web Foundation Unit

- SafetyNotice
- Landing + 未実装routeへの操作要素なし
- Error fallback
- 404

### Web Foundation E2E

- `/`表示
- 404表示
- root / 404のSecurity Header
- 320px viewportで主要静的コンテンツ欠落なし

### CI

- quality: `ubuntu-latest` + `windows-latest`
- e2e: `ubuntu-latest` + Chromium
- 最終workflowは`contents: read`のみ

## Requirement Integration Backlog

### Issue #132

Drive Collectionはレビュー用deltaのまま。`UNAVAILABLE`分母ルール、バッジ採用等の未確定事項を人間レビューで確定してからcanonical統合する。

### Issue #138

Garage整備・給油・走行距離履歴のMVP/画面deltaはcanonical未統合。実装前に正本へ統合する。

### Issue #141

ドライブ振り返り・統計ダッシュボードのMVP/画面deltaと人間判断事項はcanonical未統合。実装前に正本へ統合する。

### Issue #150

チェックリスト要件はPhase 1レビュー用deltaとして作成中。レビュー完了後にcanonical統合へ進む。

## Next Steps

1. PR #148を人間レビューし、承認後にマージする。
2. main push CI成功後にIssue #135を完了する。
3. Issue #150要件PRをレビューし、未確定事項を確定する。
4. Issue #150のcanonical統合 → 基本設計 → 詳細設計へ進む。
5. Web基盤と設計ゲート完了後、ドライブ前チェックリストの最初のvertical sliceを実装する。
6. Issue #132/#138/#141のcanonical統合も順次進める。
