# Project Overview

## 目的

RouteGarage は、日本向けの車好き・ドライブユーザー向けに、ナビ、走行記録、スポット共有、道路メモ、ガレージ管理、コミュニティを統合するプロダクトである。

## 対象ユーザー

- 車での移動やドライブを日常的に行うユーザー
- PA / SA、道の駅、絶景スポットを探したいユーザー
- 愛車、カスタム、メンテナンス履歴を残したいユーザー
- 車好き同士で投稿、コメント、いいね、フォローを行いたいユーザー

## 主要機能領域

- ルート案内・ナビ
- 走行記録
- スポット共有
- 道路メモ
- 交通情報・事故情報・PA閉鎖情報
- オービス情報
- ガレージ・愛車管理
- カスタム記録
- コメント・いいね・フォロー
- 画像投稿

## 開発方針

- ウォーターフォール開発を採用する。
- 要件定義、設計、実装、テスト、リリース判定を段階的に進める。
- RepositoryをSource of Truthとして扱い、会話だけに知識を残さない。
- Codexを主なAI開発支援として利用するが、最終判断は人間が行う。

## 技術スタック予定

- Frontend: Next.js / React / TypeScript / Tailwind CSS
- Backend: Next.js Route Handlers / Server Actions を候補とする
- Database: PostgreSQL / Prisma を候補とする
- Map: Google Maps Platform を優先候補とする
- Auth: メール + Googleログインを想定する
- Deploy: Vercel系を候補とする

詳細は要件定義・基本設計フェーズで確定する。

## 重要制約

- 走行中操作を助長しない。
- 位置情報プライバシーを最優先する。
- 自宅周辺ぼかしをMVPから考慮する。
- 交通情報・事故情報・PA閉鎖情報は正確性、更新遅延、責任範囲を明確にする。
- オービス情報は取締り回避目的ではなく、安全運転支援として扱う。
- 違法改造を助長しない。

## 参照

- 初期概要: `docs/00_project_overview.md`
- 現在状態: `docs/current-status.md`
- 進行中Issue: `docs/active-issues.md`
- リスク台帳: `docs/risks/risks.md`
