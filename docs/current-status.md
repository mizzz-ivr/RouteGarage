# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Web foundation: Issue #135 / PR #148（main反映済み、main push CI最終確認のみOpen）
- Current product task: Issue #152
- Latest completed requirement: Issue #150 / PR #151
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

PR #145は2026-08-17に`package.json`のみでマージされ、不足分をPR #148で実装しました。PR #148は2026-08-18にmainへマージ済みです。

mainへ反映済み:

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

PR headのCIはUbuntu/Windows quality、Ubuntu/Chromium E2Eの全て成功済みです。

`.github/workflows/web-quality.yml`は`push: main`でも実行する設定ですが、現在のGitHub連携ではmain push run一覧を取得できないため、Issue #135は最終確認待ちとしてOpen維持します。未確認のCIを成功扱いしません。

## Issue #150 / PR #151: ドライブ前チェックリスト・持ち物テンプレート要件

- Phase: Phase 1 / Requirements
- PR #151: Merged 2026-08-19
- Issue #150: Closed
- PR head CI: Ubuntu quality / Windows quality / Chromium E2E 全成功
- Codex review: 利用上限により未実施
- 人間レビューを経てmainへマージ済み

確定済みの主要境界:

- 標準テンプレート / 個人テンプレート / 今回のチェックを別責務とする
- テンプレート更新で既存チェックを暗黙変更しない
- `UNCHECKED` / `CHECKED`
- 0項目を100%完了扱いしない
- `CHECKED`を安全・整備・法的適合・走行可否保証へ変換しない
- 個人テンプレート/今回チェックは本人限定を初期値とする
- 走行中操作禁止を維持する
- GPS/Weather/OBD/通知providerを先取りしない

PR #151で明示された6件の未確定事項は、マージのみを根拠に選択肢を推測確定しません。

## Issue #152: チェックリスト要件のcanonical統合

- Phase: Phase 1 / Requirements integration
- Branch: `docs/issue-152-prep-checklist-canonical-integration`
- Status: 作業中 / 人間レビュー必須

統合対象:

- `docs/requirements/mvp-requirements.md`
- `docs/screen-design/screen-list.md`
- `docs/screen-design/screen-flow.md`

統合済み:

- FR-PREP-01〜17
- チェックリスト固有NFR/AC
- SCR-38 ドライブ前チェックリスト
- SCR-39 チェックテンプレート選択
- SCR-40 個人チェックテンプレート管理
- SCR-05 → SCR-39 → SCR-38/40の主要導線
- `CHECKED`非保証、本人限定、XSS境界、0項目境界、テンプレート/今回チェック分離

未確定のまま後続へ送る事項:

1. 今回チェック履歴をMVPで保持するか
2. テンプレート/項目の件数・文字数上限
3. 項目カテゴリのユーザー編集可否
4. 一括チェック/一括解除
5. 標準テンプレート新版案内
6. ホームの最近使ったテンプレート表示

Issue #152マージ後にPhase 3基本設計Issueを作成します。Phase 4詳細設計・テスト仕様の人間レビュー完了前にPhase 5実装へ進みません。

## Runtime / Package

mainへ反映済みの基盤version:

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
- チェックリストの個人入力を任意HTMLとして扱わない
- チェック完了を安全保証へ変換しない

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

### Issue #150 / #152

Issue #150の要件PR #151は完了。Issue #152でMVP/画面canonical統合を進行中。

## Next Steps

1. Issue #152のcanonical統合PRを人間レビュー・マージする。
2. チェックリスト機能のPhase 3基本設計Issueを作成する。
3. 基本設計レビュー後にPhase 4詳細設計・テスト仕様へ進む。
4. 設計ゲート完了後、SCR-39 → SCR-38を中心とした最小vertical sliceを実装する。
5. Issue #132/#138/#141のcanonical統合も順次進める。
6. main push CIを確認可能になった時点でIssue #135を完了する。
