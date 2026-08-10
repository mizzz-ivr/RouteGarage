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

**Phase 3 / Basic Design**

- Issue #134: Webアプリ基盤の技術選定・基本設計
- Issue #135: Webアプリ基盤初期実装（#134完了までBlocked）

Repositoryには現時点でWebアプリ実装コードはありません。

## Web基盤設計（Issue #134でレビュー中）

- Framework: Next.js
- UI: React
- Language: TypeScript
- Routing: App Router
- Styling: Tailwind CSS
- Runtime: Node.js 24 LTS
- Package manager: npm
- TypeScript: strict
- Web MVPはRepository rootの単一アプリ構成
- Server Componentを既定とし、Client Componentを必要最小限にする

設計正本:

- `docs/architecture/web-application-foundation-design.md`
- `docs/adr/ADR-0002-web-application-foundation.md`

## 未確定の技術領域

次はWeb基盤PRで先取りしません。

- DB / ORM
- 認証provider
- Maps provider
- Storage / CDN
- Hosting
- Monitoring / Analytics
- 独立API server
- iOS / Android

必要になった時点で個別Issue / ADRで確定します。

## 想定責務分離

```text
src/app -> src/features -> src/domain
src/app -> src/shared
src/features -> src/shared
src/adapters -> src/domain
```

- `src/app`: routing / layout / composition
- `src/features`: use case UI / application orchestration
- `src/domain`: provider非依存のrule / type
- `src/adapters`: Auth / Maps / Storage / API等の外部境界
- `src/shared`: 共通UI / utility

## 主な機能領域

- スポット・ルート閲覧
- 行きたいスポット
- ドライブプラン
- 走行記録
- ドライブストーリー
- ドライブコレクション・訪問進捗
- ガレージ・愛車管理
- コミュニティ
- 交通・道路参考情報

各機能は要件・設計Issueが完了した範囲から段階的に実装します。

## 安全性・プライバシー

- 走行中操作を助長しない
- 位置情報は目的限定・最小保持
- 生活拠点推定につながる情報はぼかし・非公開制御を前提とする
- 実装基盤段階ではgeolocation / camera / microphoneを要求しない
- provider未選定SDKを先行導入しない
- secretsや実利用者の位置・走行履歴をRepositoryへ保存しない

## 最初の実装Issue

Issue #135ではWebアプリの土台だけを実装します。

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing page
- 走行中操作禁止の安全注意表示
- error / not-found fallback
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions PR quality gate

DB / Auth / Maps / Storage / 業務機能は含めません。

## AI開発プロトコル

- `docs/ai-protocol/README.md`
- `docs/ai-protocol/PROMPT.md`
- `docs/ai-protocol/routegarage-specific-policy.md`
