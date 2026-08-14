# Webアプリ基盤 初期実装詳細設計

- Issue: #137
- 後続実装: Issue #135
- Phase: 4 / Detail Design
- ADR: ADR-0002 `Accepted`
- 更新日: 2026-08-14

## 1. 目的

Issue #135で実装担当が追加の技術選定を行わず、RouteGarageの最小Web基盤を小さい差分で構築できる状態を定義する。

本設計ではWebアプリ基盤と品質ゲートのみを扱い、DB/Auth/Maps/Storage等の業務providerは採用しない。

## 2. 採用runtime / package

2026-08-14時点の公式stableと既知互換性を確認し、初期実装では次を固定する。

### Runtime

- Node.js: `24.18.1` LTS
- npm: Node.js 24系同梱npmを使用
- `.nvmrc`: `24.18.1`
- `package.json.engines.node`: `24.18.1`

### Application

- `next`: `16.2.12`
- `react`: `19.2.8`
- `react-dom`: `19.2.8`
- `tailwindcss`: `4.3.3`
- `@tailwindcss/postcss`: `4.3.3`

### Development / Quality

- `typescript`: `6.0.3`
- `eslint`: `9.39.5`
- `eslint-config-next`: `16.2.12`
- `vitest`: `4.1.10`
- `@testing-library/react`: `16.3.2`
- `@testing-library/jest-dom`: `6.10.0`
- `jsdom`: `30.0.1`
- `@playwright/test`: `1.62.0`

型定義packageはNode/Reactの対象majorに合わせ、`npm install`時にlockfileへ固定する。初回実装PRでは`package-lock.json`を必ずcommitし、以後のCIは`npm ci`を使用する。

### Version選定上の注意

- Next.js 16.3系は2026-08-14確認時点でpreview/canaryを含むため採用しない。
- TypeScript 7.0.2はNext.js 16.2系でCompiler API検出に既知の互換問題があるため採用せず、6.0.3へ固定する。
- ESLint 10系はNext.js 16系の依存pluginで互換問題が報告されているため、初期基盤は9.39.5へ固定する。
- package更新はIssue #135へ無関係に混ぜず、後続dependency updateとして扱う。

## 3. 初期ファイル構成

Issue #135で追加・変更する対象は次に限定する。

```text
/
├─ .env.example
├─ .nvmrc
├─ package.json
├─ package-lock.json
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ eslint.config.mjs
├─ vitest.config.ts
├─ vitest.setup.ts
├─ playwright.config.ts
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ error.tsx
│  │  └─ not-found.tsx
│  └─ shared/
│     └─ ui/
│        └─ safety-notice.tsx
├─ tests/
│  └─ e2e/
│     └─ home.spec.ts
└─ .github/
   └─ workflows/
      └─ web-quality.yml
```

`src/features` / `src/domain` / `src/adapters`は、実体がない空ディレクトリを作成しない。最初の業務機能で責務が発生した時点で追加する。

## 4. package scripts

`package.json`へ次を定義する。

```text
npm run dev       -> next dev
npm run build     -> next build
npm run start     -> next start
npm run lint      -> eslint .
npm run typecheck -> tsc --noEmit
npm test          -> vitest run
npm run test:e2e  -> playwright test
```

Windows / Linux双方で実行できるよう、shell依存の`&&`やUnix専用commandをpackage scriptへ入れない。

## 5. TypeScript

- `strict: true`
- `noEmit: true`
- App Router向けNext.js pluginを使用
- `@/*` -> `./src/*`のpath aliasを設定
- `next-env.d.ts`はNext.js生成物として`.gitignore`対象とする
- `ignoreBuildErrors`は使用しない
- 型エラーは`typecheck`と`next build`の双方で失敗させる

## 6. App Router責務

### `src/app/layout.tsx`

- `<html lang="ja">`
- metadataに`RouteGarage`と最小descriptionを定義
- `globals.css`を読み込む
- root shellとしてchildrenを描画する
- client stateを持たないServer Componentとする

### `src/app/page.tsx`

Server Componentとする。

表示内容:

1. サービス名 `RouteGarage`
2. 「ドライブの計画・記録・愛車管理をひとつにまとめる」趣旨の最小説明
3. `SafetyNotice`
4. 現在準備中の機能カテゴリを説明する静的セクション
   - ドライブ
   - ガレージ
   - 振り返り

未実装routeへの偽リンク・偽ボタンは置かない。
実在spot、実位置、実ユーザー、実走行記録を表示しない。

### `src/app/error.tsx`

- Next.js error boundary要件に従い`'use client'`を付ける
- error詳細やstack traceを画面へ露出しない
- 「画面を表示できませんでした」等の一般メッセージと`reset()`による再試行を提供
- client componentはこの必要範囲に限定する

### `src/app/not-found.tsx`

- 404を明示
- トップへ戻る`Link`を提供
- 存在しないコンテンツを推測表示しない

## 7. 共通Safety Notice

`src/shared/ui/safety-notice.tsx`をServer Componentとして実装する。

必須表示:

- `走行中は操作しないでください。安全な場所に停車してから操作してください。`

要件:

- landingの初回viewport内または主要説明直下で視認できる
- 色だけに依存せず、見出し/本文でも注意であることが分かる
- dismiss不可
- animation不要

## 8. CSS / UI

Tailwind CSS v4をPostCSS経由で利用する。

`globals.css`では次を担当する。

- Tailwind import
- body背景/文字色の最低限token
- focus-visibleの視認性
- reduced motion尊重

初期基盤ではcomponent library、icon library、font provider、animation libraryを追加しない。

UIはレスポンシブで、320px幅から横スクロールを発生させない。

## 9. Security headers

`next.config.ts`の`headers()`で全routeに次を設定する。

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy: geolocation=(), camera=(), microphone=()`

CSPはHosting、nonce/hash、Next.js script挙動を含む別設計が必要なため本Issueでは設定しない。CSP未設定を恒久方針にはしない。

## 10. Environment boundary

`.env.example`は秘密値を持たず、初期Web基盤では必須環境変数がないことだけをコメントで示す。

禁止:

- API keyのダミー実値
- token / secretの例示値
- `NEXT_PUBLIC_`へsecret用途の変数を定義
- 実ユーザー/実位置に紐づくfixture

## 11. Accessibility

最低受け入れ条件:

- `lang="ja"`
- heading階層を飛ばさない
- interactive elementはkeyboard操作可能
- `focus-visible`を消さない
- error retry buttonはbutton要素
- 404のトップ導線はlink要素
- 安全注意を色だけで伝えない
- 320px幅で主要テキスト/操作が欠落しない

## 12. Dependency boundary

Issue #135では以下をpackageへ追加しない。

- DB / ORM client
- Auth SDK
- Maps SDK
- geolocation wrapper
- Storage / CDN SDK
- analytics SDK
- AI SDK
- UI component framework

Next.js / React / testing / lint / Tailwind以外の依存追加は原則Issue分離する。

## 13. Failure behavior

- lint/typecheck/unit/build/E2Eのいずれか失敗でCIを失敗させる
- build errorをignoreしない
- test failureをallow-failureにしない
- E2E起動失敗をskip扱いしない
- runtime error画面へ内部例外詳細を表示しない

## 14. Rollback

Issue #135の実装PR単位でRevertする。

本IssueではDB migration/provider設定を行わないため、rollback時にデータmigrationは不要。

## 15. Issue #135開始条件

次をすべて確認した後にIssue #135の`ai: blocked`を解除する。

1. ADR-0002がmainで`Accepted`
2. 本詳細設計がmainへマージ済み
3. 本Issue #137がClosed
4. 未解決のP1/P0レビュー指摘がない
5. package/runtimeの採用versionが実装時点でも利用可能であることを再確認
