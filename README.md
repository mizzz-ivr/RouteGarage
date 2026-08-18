# RouteGarage

## 概要

RouteGarage は、日本の車好き・ドライブユーザー向けに、ルート閲覧、走行記録、スポット共有、愛車管理、ドライブ計画・発見を一体化して提供するプロダクト構想です。

日常のドライブから長距離ツーリングまで、記録・発見・共有を安全に支援することを目的とします。

## 開発方針

- ウォーターフォール開発
- Issue駆動
- 仕様確定前の実装禁止
- 1PR 1目的
- AI生成物は人間レビュー必須
- PR / Issue / commit / 作業ログは日本語
- 無関係なリファクタリングを混在させない

詳細は `AGENTS.md` と `docs/01_development_process.md` を参照してください。

## 現在フェーズ

**Phase 5 / Implementation**

- ADR-0002: `Accepted`
- Issue #139 / PR #143: 完了
- Issue #137 / PR #144: 完了
- Issue #146: 遅延レビュー正本同期を継続中
- Issue #135 / Draft PR #148: Webアプリ基盤の不足実装をレビュー中

PR #145は2026-08-17にマージ済みですが、実差分は`package.json`のみでした。Issue #135は未完了としてPR #148で実装を継続しています。

## Web基盤

- Next.js App Router
- React
- TypeScript strict
- Tailwind CSS
- Node.js 24 LTS
- npm + `package-lock.json`
- Repository rootの単一Webアプリ
- Server Component既定 / Client Component最小化

設計正本:

- `docs/architecture/web-application-foundation-design.md`
- `docs/architecture/web-application-foundation-detail-design.md`
- `docs/architecture/web-application-foundation-test-spec.md`
- `docs/adr/ADR-0002-web-application-foundation.md`

## PR #148 実装内容

- root layout / landing
- 走行中操作禁止のSafetyNotice
- error / not-found
- 全route Security Header
- Tailwind / TypeScript / ESLint
- Vitest + React Testing Library
- Playwright E2E
- Node.js 24.18.1固定
- `.env.example`
- npm実解決から生成した`package-lock.json`
- read-only GitHub Actions quality gate

初回PR CIではUbuntu/WindowsのqualityとUbuntu/ChromiumのE2Eが成功しています。CI成功は人間レビューの代替にはしません。

## 未確定の技術領域

- DB / ORM
- 認証provider
- Maps / geolocation provider
- Storage / CDN
- Hosting
- Monitoring / Analytics
- 独立API server
- iOS / Android

必要になった時点で個別Issue / ADRで確定します。

## 責務分離

```text
src/app -> src/features -> src/domain
src/app -> src/shared
src/features -> src/shared
src/adapters -> src/domain
```

- `src/app`: routing / layout / composition
- `src/features`: use case UI / application orchestration
- `src/domain`: provider非依存のrule / type
- `src/adapters`: 外部provider境界
- `src/shared`: 共通UI / utility

## 主な機能領域

- スポット・ルート閲覧
- 行きたいスポット
- ドライブプラン
- 走行記録
- ドライブストーリー
- ドライブコレクション・訪問進捗
- ドライブ振り返り・統計
- ガレージ・愛車管理
- 整備・給油・走行距離履歴
- コミュニティ

## 安全性・プライバシー

- 走行中操作を助長しない
- 初期Web基盤ではgeolocation / camera / microphoneを要求しない
- provider未選定SDKを先行導入しない
- secretsや実利用者の位置・走行履歴をRepositoryへ保存しない
- error UIへ内部例外詳細を表示しない

## AI開発プロトコル

- `docs/ai-protocol/README.md`
- `docs/ai-protocol/PROMPT.md`
- `docs/ai-protocol/routegarage-specific-policy.md`
