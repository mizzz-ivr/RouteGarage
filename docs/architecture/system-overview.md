# System Overview

## 目的

RouteGarageのシステム全体像を、要件定義前の初期構想として整理する。

本ドキュメントは現時点の正本だが、実装設計確定前のため、詳細は後続の基本設計・ADRで更新する。

## 想定構成

```text
User
  ├─ Web App
  ├─ iOS App
  └─ Android App

RouteGarage Backend
  ├─ Auth
  ├─ User/Profile
  ├─ Garage
  ├─ Drive Log
  ├─ Spot
  ├─ Road Info
  ├─ Community
  └─ Media

External Services
  ├─ Google Maps Platform
  ├─ Auth Provider
  ├─ Storage
  └─ Hosting/Monitoring
```

## 技術スタック候補

- Web: Next.js / React / TypeScript / Tailwind CSS
- API: Next.js Route Handlers / Server Actions または Node.js API
- DB: PostgreSQL / Prisma
- Map: Google Maps Platform
- Auth: メール + Googleログイン
- Storage: S3互換またはSupabase Storage等
- Deploy: Vercel系

## 境界方針

- UI層にBusiness Logicを混入させない。
- Domain知識はdomain/service層に集約する。
- Infra層はDomain層へ依存させない。
- Map API、Auth、Storageなど外部サービスはadapter境界を設ける。
- 位置情報と公開範囲は横断的に扱うため、早期に設計方針を固定する。

## 高リスク領域

- 本格ナビ
- 交通情報・事故情報・PA閉鎖情報
- オービス情報
- 走行記録の初期公開
- 画像投稿とモデレーション
- Web / iOS / Android 同時対象化

## 現時点で実装しないもの

- DB schema
- API endpoint
- 画面コンポーネント
- Google Maps API呼び出し
- 認証処理
- モバイルアプリコード

## 後続で必要なADR

- 地図プロバイダー選定
- 認証方式選定
- DB/ORM選定
- Web/PWA/Nativeのリリース順
- 交通情報・オービス情報の扱い方
- 位置情報公開範囲と自宅周辺ぼかし方針
