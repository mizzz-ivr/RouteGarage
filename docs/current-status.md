# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: Issue #10としてMVP画面一覧・画面遷移・主要導線を定義し、後続の基本設計へ接続する

## 完了済み

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加
- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- PR #4: AI-Native開発プロトコルとSource of Truthを整備
- Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する
- Issue #8: RouteGarage MVP要件定義を作成する（要件正本を作成済み）

## 進行中

- Issue #10: RouteGarage MVP画面一覧・画面遷移を定義する
- Branch: `docs/issue-10-screen-design`

## 未完了

- 画面設計レビュー完了と凍結
- アーキテクチャ基本設計
- DB/API/認証/地図連携の設計
- Next.js初期構築
- iOS / Android対応

## 既知問題

- 高リスク領域（位置情報、交通/オービス、画像投稿、コミュニティ）の設計判断に法務・運用観点の追加レビューが必要。
- 交通情報/オービス情報はデータ鮮度・正確性に限界があり、画面上の誤認防止表示を継続検討する必要がある。

## 触ってはいけない箇所

要件・設計完了まで、以下は実装しない。

- Next.js初期構築
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform連携
- 交通情報API連携
- オービス情報実装
- iOS / Android実装

## 次の優先作業

1. Issue #10の画面設計レビューと確定
2. 基本設計Issueの作成（画面責務を入力にする）
3. 安全性/プライバシー/法務レビューIssueの作成
4. モデレーション運用と監査ログ要件の詳細化
