# Webアプリ基盤 テスト・CI詳細仕様

- Issue: #137
- Follow-up: #146
- 後続実装: #135 / Draft PR #145
- 更新日: 2026-08-14

## Unit / Component

Vitest + React Testing Library + jsdomを使用する。

- UT-001 `src/shared/ui/safety-notice.test.tsx`: 安全注意を表示しdismiss不可
- UT-002 `src/app/page.test.tsx`: RouteGarage、説明、SafetyNoticeを表示
- UT-003 `src/app/error.test.tsx`: 一般エラー表示、内部詳細非露出、reset呼び出し
- UT-004 `src/app/not-found.test.tsx`: 404表示とトップへのlink

テスト未検出を成功扱いする設定は使用しない。

## Configuration

### TypeScript

- `strict: true`
- `noEmit: true`
- build時の型エラー無視を設定しない

### Security Header

production serverの次の2経路で同一Headerを確認する。

1. `/`
2. `/__e2e-not-found__`（404）

必須:

- `X-Content-Type-Options = nosniff`
- `Referrer-Policy = strict-origin-when-cross-origin`
- `X-Frame-Options = DENY`
- `Permissions-Policy`に`geolocation=()` / `camera=()` / `microphone=()`を含む

rootだけの検証では全route適用を保証できないため、404 responseの検証も必須とする。

### Environment / Dependency

- `.env.example`に接続用実値を置かない
- DB/Auth/Maps/Storage/analytics/AI用SDKを追加しない

## E2E Smoke

Playwright Chromiumを使用する。

### E2E-001 `/`

- HTTP 200
- `RouteGarage` heading表示
- SafetyNotice表示
- console errorなし

### E2E-002 404

- `/__e2e-not-found__`で404 UI表示
- トップへのlinkが操作可能

### E2E-003 Security Header

`/`と`/__e2e-not-found__`の双方で必須Headerを検証する。

### E2E-004 Mobile

viewport 320x800で横スクロールがなく、heading/SafetyNoticeが視認できる。

## 異常系・回帰

- TypeScript errorでtypecheck/buildを失敗させる
- lint errorでlintを失敗させる
- unit/E2E failureを成功扱いしない
- production server起動失敗時にE2Eをskipしない
- geolocation/camera/microphone APIを初期画面から呼ばない
- 実位置・実走行データをfixtureへ追加しない
- root/pageを不要にClient Component化しない

## GitHub Actions runner戦略

workflow: `.github/workflows/web-quality.yml`

Trigger:

- `pull_request`
- `push` to `main`

Repositoryへの書き込み権限は持たせない。

### quality

OS互換性を検証するため、次のmatrixを必須とする。

- `ubuntu-latest`
- `windows-latest`

両runnerでNode.js `24.18.1`を使い、次を実行する。

- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

片方でも失敗したらquality失敗とする。

### e2e

`quality`全成功後、`ubuntu-latest` + Chromiumで実行する。

- `npm ci`
- Chromium setup
- `npm run build`
- `npm run test:e2e`

Windowsはquality matrixで検証し、browser E2E matrixは初期基盤では行わない。

## Playwright

- testDir: `tests/e2e`
- Chromiumのみ
- CI retry: 1 / local retry: 0
- screenshot: failureのみ
- trace: first retry
- baseURL: `http://127.0.0.1:3000`
- production serverをport 3000で起動する

## Local quality gate

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run test:e2e`

Windows / Linuxで同じnpm scriptsを使用する。

## 完了条件

- UT-001〜004のfileが存在する
- E2E-001〜004が実装される
- Headerはrootと404の双方で検証される
- qualityはUbuntu/Windowsで実行される
- e2eはUbuntu/Chromiumで実行される
- GitHub Actionsの実結果を確認する
- workflow/statusがない状態をCI成功と表現しない
