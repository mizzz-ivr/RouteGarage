# Webアプリ基盤 テスト・CI詳細仕様

- Issue: #137
- 後続実装: #135
- 更新日: 2026-08-14

## 1. 目的

Webアプリ基盤の正常系・異常系・境界値・回帰を、実装者の追加判断なしで確認できるテスト仕様として固定する。

## 2. Unit / Component

Vitest + React Testing Library + jsdomを使用する。

### UT-001 SafetyNotice
- `走行中は操作しないでください`を含む注意文が表示される
- dismiss操作を持たない

### UT-002 Landing
- `RouteGarage` headingが存在する
- サービス説明が存在する
- SafetyNoticeが存在する
- 未実装routeを指す操作要素を置かない

### UT-003 Error fallback
- 一般的なエラー文言が表示される
- 内部例外詳細を画面へ表示しない
- 再試行buttonが存在する
- clickで`reset`が呼ばれる

### UT-004 404
- 404であることが分かる
- トップへ戻るlinkが存在する

## 3. Configuration

### CFG-001 TypeScript
- `strict: true`
- `noEmit: true`
- build時の型エラー無視を設定しない

### CFG-002 Response headers
production serverのroot responseで以下を確認する。
- `X-Content-Type-Options = nosniff`
- `Referrer-Policy = strict-origin-when-cross-origin`
- `X-Frame-Options = DENY`
- `Permissions-Policy`に`geolocation=()` / `camera=()` / `microphone=()`を含む

### CFG-003 Environment
- `.env.example`に接続用の実値を置かない
- 公開用環境変数へ機密用途の値を定義しない
- provider固有設定を追加しない

### CFG-004 Dependency
`package.json`にDB/Auth/Maps/Storage/analytics/AI用SDKを追加しない。

## 4. E2E Smoke

Playwright Chromiumを使用する。

### E2E-001 `/`
- HTTP 200
- `RouteGarage` heading表示
- SafetyNotice表示
- console errorなし

### E2E-002 404
- 存在しないpathで404 UI表示
- トップへのlinkが操作可能

### E2E-003 Response headers
root responseでCFG-002のheaderを確認する。

### E2E-004 Mobile
viewport 320x800でrootを表示する。
- 横スクロールなし
- heading/SafetyNoticeが視認可能
- 主要コンテンツが欠落しない

## 5. 異常系

- TypeScript error時に`npm run typecheck` / `npm run build`が失敗する
- lint error時に`npm run lint`が非0終了する
- unit/E2E failureを成功扱いしない
- production server起動失敗時にE2Eをskipしない

## 6. 境界値

- viewport 320px / 1280px
- root `/`
- unknown `/__e2e-not-found__`
- `prefers-reduced-motion: reduce`

## 7. 回帰

- rootからgeolocation/camera/microphone APIを呼ばない
- 実位置・実走行データをfixtureへ追加しない
- DB/Auth/Maps/Storage provider依存を追加しない
- root/pageを不要にClient Component化しない
- `error.tsx`以外に不要な`use client`を増やさない

## 8. GitHub Actions

workflow: `.github/workflows/web-quality.yml`

### Trigger
- `pull_request`
- `push` to `main`

### Job `quality`
1. checkout
2. setup-node `24.18.1`, npm cache
3. `npm ci`
4. `npm run lint`
5. `npm run typecheck`
6. `npm test`
7. `npm run build`

### Job `e2e`
`quality`成功後:
1. checkout
2. setup-node `24.18.1`, npm cache
3. `npm ci`
4. `npx playwright install --with-deps chromium`
5. `npm run build`
6. `npm run test:e2e`

CIはrepository内容の読み取りだけで成立する構成とする。

## 9. Playwright config

- testDir: `tests/e2e`
- Chromiumのみ
- CI retry: 1 / local retry: 0
- screenshot: failureのみ
- trace: first retry
- baseURL: `http://127.0.0.1:3000`
- webServer: `npm run start -- -p 3000`
- localのみ既存server再利用可

## 10. Local quality gate

PR前に個別実行する。

```text
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Windows / Linuxで同じnpm scriptsを使用する。

## 11. 性能・安全回帰

- landingだけのためにClient Componentを増やさない
- 外部font/image/scriptを追加しない
- analyticsを追加しない
- 初期表示で外部network requestを発生させない
- error UIに内部情報を表示しない

## 12. 完了条件

- 上記caseがIssue #135のコードへ対応付けられている
- GitHub Actionsが実際に起動し、結果を確認する
- workflow/statusがない状態をCI成功と表現しない
- failure時はログ原因を特定してIssue #135内で修正する
