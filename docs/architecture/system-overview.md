# System Overview

## 目的

RouteGarageのシステム全体像と、現時点で確定しているWebアプリ基盤の境界を整理する。

詳細なWeb基盤設計は`docs/architecture/web-application-foundation-design.md`、技術選定は`docs/adr/ADR-0002-web-application-foundation.md`を参照する。

## 初期リリース構成

```text
User
  └─ Web App
       ├─ app
       ├─ features
       ├─ domain
       ├─ adapters
       └─ shared

External / Backend boundaries
  ├─ Auth        [未選定]
  ├─ Database    [未選定]
  ├─ Maps        [未選定]
  ├─ Storage     [未選定]
  └─ Hosting     [未選定]
```

Web MVPではiOS / Androidを初期対象にしない。

## Web基盤（Issue #134でレビュー中）

- Next.js / React / TypeScript
- App Router
- Tailwind CSS
- Node.js 24 LTS
- npm + `package-lock.json`
- TypeScript strict
- Repository rootの単一Webアプリ
- Server Component既定
- Client Componentは必要なbrowser interactionに限定

## 境界方針

- UI層へBusiness Logicを混入させない。
- provider非依存のDomain知識は`src/domain`へ集約する。
- 外部サービスは`src/adapters`境界を介する。
- featureからAuth / Maps / Storage等のSDKへ直接依存しない。
- provider未選定の間は架空adapterや不要SDKを追加しない。
- 位置情報と公開範囲は横断的な高リスク領域として個別設計を必須にする。

## 初期Web実装で扱うもの

Issue #135で次の基盤のみを実装する。

- root layout
- landing page
- 走行中操作禁止の安全注意
- error / not-found fallback
- environment variable template
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions quality gate

## 初期Web実装で扱わないもの

- DB schema / ORM
- API endpoint / business Server Action
- Auth処理
- Google Maps等のMaps SDK
- geolocation
- Storage / CDN
- 実ユーザー位置情報・走行履歴
- 実スポットコンテンツ
- iOS / Android

## 高リスク領域

- 位置情報・生活拠点推定
- 本格ナビ
- 交通情報・事故情報・PA閉鎖情報
- オービス情報
- 走行記録の公開
- 画像投稿・ストーリー・モデレーション
- 外部providerへのデータ送信

これらはWeb基盤PRへ混在させず、要件・設計・レビュー後に個別実装する。

## 後続ADR

- DB / ORM
- 認証方式
- 地図provider
- Storage / CDN
- Hosting / Monitoring
- CSP詳細
- Web / PWA / Nativeの将来リリース順
