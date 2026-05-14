# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: Issue #14としてSource of Truth上のIssue番号・URL不整合を修正し、Repository正本の整合性を回復する

## 完了済み

- Issue #12: 位置情報・走行履歴データポリシーを定義する
- PR #13: 位置情報・走行履歴データポリシー関連docsを追加・更新

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加
- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- PR #4: AI-Native開発プロトコルとSource of Truthを整備
- Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する
- Issue #8: RouteGarage MVP要件定義を作成する（要件正本を作成済み）

## 進行中

- Issue #14: Source of Truth上のIssue番号・URL表記を整合する
- Branch: `docs/issue-14-source-of-truth-fix`

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

1. Issue #14で修正した正本docsの人間レビューを完了する
2. 位置情報ポリシー（Issue #12完了）を入力にした基本設計Issue（DB/API/認証）を起票する
3. 利用規約/プライバシーポリシー文言レビューIssueを起票する
4. 削除依頼・問い合わせ・監査ログ運用設計Issueを起票する
