# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: Issue #8としてMVP要件を凍結し、実装前のスコープを明確化する

## 完了済み

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加
- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- PR #4: AI-Native開発プロトコルとSource of Truthを整備
- Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する

## 進行中

- Issue #8: RouteGarage MVP要件定義を作成する
- Branch: `docs/issue-8-mvp-requirements`

## 未完了

- 画面一覧・画面遷移の確定
- アーキテクチャ基本設計
- DB/API/認証/地図連携の設計
- Next.js初期構築
- iOS / Android対応

## 既知問題

- MVP候補機能の領域が広く、安全性・法令・規約・プライバシー配慮を欠くと要件品質が低下する。
- 交通情報/オービス情報はデータ鮮度・正確性に限界があり、注意表示設計が必須。

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

1. Issue #8のPRレビューと要件凍結
2. 画面設計Issueの作成
3. 基本設計Issueの作成
4. 安全性/プライバシー/法務レビューIssueの作成
