# Webアプリ基盤 基本設計

## 1. 目的

RouteGarage Web MVPの最初の実装を開始するために、Webアプリケーション基盤の責務、技術選定、依存方向、品質ゲートを定義する。

本設計はIssue #134の成果物であり、後続Issue #135「Webアプリ基盤を初期実装し、PR品質ゲートを構築する」の実装根拠とする。

## 2. 前提

- 初期公開対象はWeb MVPのみとする。
- Repositoryには現時点でアプリケーション実装コードがない。
- DB、Auth、Maps、Storage、CDN、Hostingのproviderは未確定である。
- 位置情報、走行履歴、交通情報等の高リスクデータを初期基盤実装へ持ち込まない。
- 走行中操作を誘発しない安全方針を最初の画面から継承する。
- 要件未確定領域を実装都合で補完しない。

## 3. 採用するWeb基盤

### 3.1 採用

- Framework: Next.js
- UI: React
- Language: TypeScript
- Routing: App Router
- Styling: Tailwind CSS
- Runtime: Node.js 24 LTS
- Package manager: npm
- Lockfile: `package-lock.json`をRepositoryへ保存する
- TypeScript: `strict`を有効にする
- Path alias: `@/*`を`src/*`へ割り当てる

Next.js / React / Tailwindの正確なpackage versionはIssue #135の実装開始時に公式stableを確認して固定し、以後はlockfileを再現性の正本とする。設計文書内で将来の`latest`を固定値として扱わない。

### 3.2 App Routerを採用する理由

- 新規Webアプリであり、旧Pages Routerとの互換性を維持する必要がない。
- Layout / Page / Loading / Error等の責務をroute単位で整理しやすい。
- Server Componentを既定として、client JavaScriptと公開データ面積を必要最小限にできる。
- 将来のserver-side data accessをUIから分離しやすい。

### 3.3 Tailwind CSSを採用する理由

- Web MVPでデザインシステムが未完成でも、小さな差分でUIを組み立てられる。
- CSS runtimeへの依存を増やさず運用できる。
- 後続の共通UIコンポーネント化と段階的なdesign token整理へ移行しやすい。

## 4. 非採用・保留

### 4.1 現時点で採用しない

- Pages Router
- 独立Node.js API server
- Prisma / ORM
- Auth provider SDK
- Maps SDK
- Storage / CDN SDK
- state management library
- component libraryの大規模導入
- analytics / monitoring SDK
- PWA / Service Worker
- iOS / Android共通monorepo

### 4.2 理由

Web基盤PRでprovider・業務データ・配信方式まで同時に決定すると差分と運用リスクが大きくなるため。必要になった時点で個別Issue / ADRで決定する。

## 5. Repository構成

初期実装はRepository rootに単一Next.jsアプリを置く。WebのみのMVP段階ではmonorepo化しない。

```text
/
├─ src/
│  ├─ app/
│  ├─ features/
│  ├─ domain/
│  ├─ adapters/
│  └─ shared/
├─ public/
├─ tests/
├─ .github/workflows/
├─ docs/
├─ package.json
├─ package-lock.json
├─ tsconfig.json
└─ .env.example
```

将来モバイルアプリや独立APIが実際に必要になった場合のみ、別ADRでmonorepo移行を判断する。

## 6. レイヤー責務

### `src/app`

- route定義
- layout / page composition
- loading / error / not-found
- metadata
- HTTP境界に近いcomposition

業務ルールを直接記述しない。

### `src/features`

- ユースケース単位のUI
- form / interaction
- application-level orchestration
- domain ruleの呼び出し

外部SDKへ直接依存しない。

### `src/domain`

- provider非依存の型
- state transition
- validation rule
- 公開可否等の純粋な業務判断

React / Next.js / SDKへ依存しないことを原則とする。

### `src/adapters`

- Auth
- Maps
- Storage
- API client
- server persistence

等の外部境界を置く。provider未選定の間は空実装や架空SDKを追加しない。

### `src/shared`

- 汎用UI
- layout parts
- utility
- 定数
- framework helper

特定feature固有の業務判断を置かない。

## 7. 依存方向

基本方向:

```text
app -> features -> domain
app -> shared
features -> shared
adapters -> domain
```

禁止:

```text
domain -> Next.js / React / provider SDK
shared -> feature固有domain rule
feature -> provider SDK直結
```

外部サービスを利用するfeatureはadapter interfaceを経由する。

## 8. Server / Client Component方針

- Layout / PageはServer Componentを既定とする。
- `use client`は、browser API、event handler、local interactive state等が必要な最小コンポーネントに限定する。
- route全体を都合だけでClient Component化しない。
- server側で解決できる表示データをclientへ重複送信しない。
- 認証導入後のServer Action / Route HandlerはAPIと同等に認証・認可対象とする。

## 9. 初期画面責務

Issue #135では次のみ実装する。

### Root page

- RouteGarageの短いサービス説明
- 停車中・走行後利用を促す安全注意
- 今後追加予定機能への説明
- 実データや現在地を表示しない

### Fallback

- `not-found`
- root error boundary候補
- loading表示が必要なroute導入時の共通方針

業務機能のmock画面を大量に作らない。

## 10. 環境変数・秘密情報

- `.env*`の実値をRepositoryへ保存しない。
- `.env.example`には変数名と用途説明だけを置く。
- `NEXT_PUBLIC_`はブラウザ公開してよい値だけに限定する。
- secretsを`NEXT_PUBLIC_`へ格納しない。
- Issue #135では外部providerを使わないため、必須secretを作らない。

## 11. Security baseline

初期実装で低リスクかつprovider非依存なheaderを候補とする。

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy`は少なくともgeolocation / camera / microphoneを既定deny候補とする

完全なCSPはNext.jsのscript / nonce / hosting方式と合わせて別Issueで設計し、未検証のCSPを初期PRへ無理に混在させない。

## 12. Safety / Privacy baseline

- root画面から「走行中は操作しない」を確認できること。
- browser geolocation APIを呼ばない。
- camera / microphone permissionを要求しない。
- 実ユーザー画像・位置・走行履歴をfixtureへ使用しない。
- 交通情報・オービス・通行可否のダミー表示を行わない。
- 公開Repositoryのfixtureは架空データだけとする。

## 13. Error handling

- 404は専用表示を持つ。
- 予期しない例外で内部情報・stack traceを利用者へ表示しない。
- fallback UIは再試行またはホームへ戻る安全な導線を持つ。
- 外部provider未導入のため、provider障害UIはIssue #135へ含めない。

## 14. Accessibility baseline

- semantic HTMLを優先する。
- keyboard操作可能なinteractive elementを用いる。
- focus indicatorを消さない。
- 色だけで状態を表現しない。
- heading階層を崩さない。
- reduced motionを阻害する必須animationを導入しない。

## 15. Test strategy

### Unit / Component

- Vitest
- React Testing Library

初期対象:

- safety notice表示
- root pageの主要ランドマーク
- shared UIの最低限の振る舞い

### E2E smoke

- Playwright

初期対象:

- `/`が200相当で表示される
- タイトル / 安全注意が表示される
- 未定義routeで404 UIが表示される

E2Eを大量に追加せず、基盤が起動可能であることのsmokeに限定する。

## 16. Quality gates

`package.json`に少なくとも次を用意する。

```text
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

PR CIでは原則:

1. Node 24 LTS
2. `npm ci`
3. lint
4. typecheck
5. unit test
6. build
7. E2E smoke

を実行する。

依存キャッシュはlockfileをkeyにし、CI成功を人間レビューの代替にはしない。

## 17. Dependency policy

- 新規dependencyはIssue目的に必要なものだけ追加する。
- package追加理由をPR本文へ記載する。
- wildcard / unpinned install結果だけに依存せず`package-lock.json`をcommitする。
- major version updateは機能PRへ混在させない。
- 未使用dependencyを残さない。

## 18. 実装ステップ

Issue #135で次の順に実装する。

1. Next.js / TypeScript / Tailwind bootstrap
2. Node / npm / TypeScript設定
3. root layout / root page
4. safety notice shared UI
5. not-found / error fallback
6. unit test
7. E2E smoke
8. GitHub Actions quality gate
9. README更新
10. build / lint / typecheck / test / E2E結果をPRへ記録

## 19. 影響範囲

Issue #134はdocsのみ。

Issue #135ではWebアプリ基盤とCIを追加するが、DB / Auth / Maps / Storage / 業務データには影響しない。

## 20. 未確定・後続

- Next.js / React / Tailwindの正確なversion: Issue #135開始時に公式stableを確認してlock
- CSP詳細
- Hosting
- Observability
- DB / ORM
- Auth
- Maps
- Storage / CDN
- API境界
- Design system詳細

これらをIssue #135で先取りしない。

## 21. 受け入れ条件

- Web基盤技術の採用理由・代替案・依存方向がレビュー可能である。
- provider未選定領域を実装で固定していない。
- Node 24 LTS / npm / lockfile方針が明示されている。
- Server Component既定・Client最小化が明示されている。
- tests / CI / security / accessibility / safetyの最低基準がある。
- Issue #135がこの設計だけを根拠に実装開始できる。
