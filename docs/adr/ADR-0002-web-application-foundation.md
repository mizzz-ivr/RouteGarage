# ADR-0002: Webアプリ基盤にNext.js App Router / TypeScript / Tailwind CSSを採用する

- Status: Accepted
- Date: 2026-08-10
- Accepted: 2026-08-14
- Related: Issue #134 / PR #136 / Issue #139 / PR #143 / Issue #146 / Issue #137 / Issue #135

## Context

RouteGarageは要件定義を先行してきたが、RepositoryにはWebアプリ実装コードがまだ存在しない。

READMEおよび`docs/architecture/system-overview.md`ではNext.js / React / TypeScript / Tailwind CSSが候補として記録されている一方、実装開始に必要な技術選定・runtime・routing・責務分離・quality gateは未確定である。

MVPはWebを初期公開対象としており、DB / Auth / Maps / Storage等は未選定である。そのため、最初の実装ではproviderを固定せず、Web UI基盤と品質ゲートだけを構築する必要がある。

## Decision

Web MVPのアプリ基盤として次を採用する。

- Next.js
- React
- TypeScript (`strict`)
- App Router
- Tailwind CSS
- Node.js 24 LTS
- npm + `package-lock.json`
- Repository rootの単一Webアプリ構成
- Server Componentを既定、Client Componentを必要最小限
- `src/app` / `src/features` / `src/domain` / `src/adapters` / `src/shared`の責務分離

Next.js / React / Tailwind CSSの正確なpackage versionはIssue #135の実装直前に公式stableと互換性を確認して固定し、`package-lock.json`を再現性の正本とする。

DB / ORM / Auth / Maps / Storage / CDN / Hosting / analyticsは本ADRで採用しない。

## Reasons

### Next.js / App Router

- Web MVPの候補として既存Repository方針と整合する。
- 新規アプリのためPages Router互換を維持する必要がない。
- Server Componentを既定にでき、client-side JavaScriptやブラウザへ渡すデータを必要最小限にしやすい。
- layout / page / loading / error / not-foundの責務を明確化しやすい。

### TypeScript strict

- 位置・公開範囲・状態遷移など将来の高リスクdomain ruleを型で追跡しやすくする。
- provider adapterのinterfaceを明示しやすい。

### Tailwind CSS

- 初期MVPで過剰なUI frameworkを導入せず、小さい差分で共通UIを作成できる。
- design system確定前でも段階的にtoken化しやすい。

### npm / single app

- Repositoryに既存package managerやworkspace構成がなく、Webのみが初期対象であるため、追加の運用複雑性を避ける。
- Mobile / 独立APIが実際に必要になった時点でmonorepo化を再評価する。

## Alternatives

### Pages Router

不採用。既存Pages Router資産がなく、新規アプリで互換性維持の利点がない。

### Vite + React SPA

不採用。RouteGarageは将来認証・公開範囲・server-side data accessを持つため、route / server rendering / server boundaryを同じWeb frameworkで管理できる構成を優先する。

### 独立Node.js APIを同時導入

保留。DB/API/Auth仕様が未確定であり、初期Web基盤PRへ含めると責務と差分が大きくなる。

### Monorepo

保留。Web MVPのみの現段階では運用コストが先行する。モバイル・独立APIの実装開始時に再評価する。

### UI component libraryの全面導入

保留。design system要件が固まる前に依存を増やさない。必要なshared componentから小さく実装する。

## Consequences

### Positive

- Issue #137で詳細設計を具体化し、その後Issue #135で実コードを安全に開始できる。
- provider未選定領域を隔離できる。
- Server/Client境界、domain/adapters境界を早期に固定できる。
- lint / typecheck / test / build / E2Eを全feature PRの共通品質ゲートにできる。

### Negative

- DB/Auth/Mapsを使う業務機能は別設計が完了するまで実装できない。
- 将来mobileや独立APIを導入する際にRepository構造の再評価が必要になる可能性がある。
- Tailwindのclass運用ルール・design token詳細は後続で整備が必要。

## Guardrails

- provider未選定のSDKを先行導入しない。
- secretsを`NEXT_PUBLIC_`へ格納しない。
- browser geolocation / camera / microphoneを初期基盤から要求しない。
- 実ユーザー位置・走行履歴をfixtureへ使わない。
- 走行中操作を促すUIを作らない。
- domain層をReact / Next.js / provider SDKへ依存させない。
- featureからprovider SDKへ直接依存させない。

## Quality Gates

Issue #137で具体仕様を確定し、Issue #135で以下をPR必須チェックとして構築する。

- lint
- typecheck
- unit/component test
- production build
- E2E smoke

CI成功を人間レビューの代替にはしない。

## Official References

- Next.js App Router: https://nextjs.org/docs/app
- Next.js Getting Started: https://nextjs.org/docs/app/getting-started
- Tailwind CSS Framework Guides: https://tailwindcss.com/docs/installation/framework-guides
- Node.js release status: https://nodejs.org/en/about/previous-releases

## Acceptance Record

### 2026-08-12: PR #136 merge時の不整合

PR #136は本ADRが`Proposed`のままmainへマージされた。元のAcceptance Gateでは`Accepted`へ変更してからマージすることを必須としていたため、Issue #139で承認状態と実装ゲートの整合を行うことにした。

### 2026-08-14: Web基盤方針の承認

プロジェクトオーナーから「要件定義だけじゃなく実装自体を進めて」と明示指示を受けた。Issue #134 / PR #136で提示済みのWeb基盤技術選定を変更せずに詳細設計・実装へ進む意思決定として、本ADRを`Accepted`へ更新した。

GitHub上の追跡記録はIssue #146を正本とする。Issue #146ではPR #143 / #144の遅延Codexレビューも含め、実装開始前の整合を追跡する。

承認対象は次に限定する。

- Next.js App Router / React / TypeScript / Tailwind CSS
- Node.js 24 LTS + npm
- Repository rootの単一Webアプリ
- Server Component既定 / Client Component最小化
- `app / features / domain / adapters / shared`の責務分離
- provider未選定を維持すること
- security/privacy/safety baseline
- lint / typecheck / unit test / build / E2E / GitHub Actions方針

この承認は次を意味しない。

- DB / ORMの採用
- Auth providerの採用
- Maps / geolocation providerの採用
- Storage / CDN / Hosting / analytics providerの採用
- 外部APIキー取得や契約の承認
- 実位置情報・実走行履歴の利用承認
- 独立した法務・セキュリティ・プライバシー専門レビューの完了

## Implementation Gate After Acceptance

- Issue #139 / PR #143: 完了。ADR-0002をmainで`Accepted`へ反映済み。
- Issue #137 / PR #144: 完了。詳細設計・テスト仕様をmainへ反映済み。
- Issue #146: PR #143 / #144の遅延レビュー指摘を実装前に整合する。
- Issue #135 / Draft PR #145: 実装中。実装・CI・人間レビュー完了までReady/Mergeしない。
- DB/Auth/Maps/Storage等は各領域の設計・承認が完了するまで導入しない。
