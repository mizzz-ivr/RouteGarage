# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: Source of Truth（`docs/current-status.md` / `docs/active-issues.md`）をIssue #14・Issue #10完了後の状態へ同期し、後続の高リスク領域要件整理へ接続する

## 完了済み

- Issue #14: Source of Truth上のIssue番号・URL表記を整合する
- PR #15: Source of Truth docsのIssue番号・URL表記不整合を修正
- Issue #12: 位置情報・走行履歴データポリシーを定義する
- PR #13: 位置情報・走行履歴データポリシー関連docsを追加・更新
- Issue #10: RouteGarage MVP画面一覧・画面遷移を定義する

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加
- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- PR #4: AI-Native開発プロトコルとSource of Truthを整備
- Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する
- Issue #8: RouteGarage MVP要件定義を作成する（要件正本を作成済み）

## 進行中

- 該当なし（2026-05-14時点で、Source of Truth同期後の次Issue起票待ち）

## 未完了

- 高リスク領域（位置情報、走行履歴、交通情報、オービス情報、画像投稿、コミュニティ）の要件間整合レビュー
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

1. 高リスク領域の次Issue候補を優先度順に起票する（位置情報/走行履歴、交通情報/オービス、画像投稿/コミュニティ）。
2. 利用規約/プライバシーポリシー文言レビューIssueを起票する。
3. 削除依頼・問い合わせ・監査ログ運用設計Issueを起票する。
4. branch cleanupとして、マージ済み作業branch（`docs/issue-14-source-of-truth-fix`、`docs/issue-10-mvp-screen-design`）の削除可否を確認し記録する。
