# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 0 / Project Setup
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: AI-Native開発プロトコル完全版、日本語出力ポリシー、Branch Lifecycle方針の整備

## 完了済み

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加
- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- PR #4: AI-Native開発プロトコルとSource of Truthを整備

## 進行中

- Issue #5: AI-Native開発プロトコル完全版と日本語出力ポリシーを反映する
- Branch: `docs/complete-ai-native-protocol`

## 未完了

- 要件定義書の作成
- MVPスコープの凍結
- 画面一覧・画面遷移の確定
- アーキテクチャ基本設計
- DB/API/認証/地図連携の設計
- Next.js初期構築

## 既知問題

- 完全版プロトコルの運用ルールは強力だが、軽微な作業では運用コストが高くなる可能性がある。
- MVP範囲が広いため、次フェーズでスコープ凍結しないと実装計画が破綻しやすい。

## 触ってはいけない箇所

現時点では実装コードが存在しないため、プロダクト実装は開始しない。
以下は要件・設計完了まで実装しない。

- Next.js初期構築
- DB設計・migration
- API設計・実装
- 認証実装
- Google Maps Platform連携
- 交通情報API連携
- オービス情報実装
- iOS / Android実装

## 次の優先作業

1. Issue #5 / PR作成とレビュー
2. MVP要件定義Issueの作成
3. MVP範囲の再評価とリスク整理
4. 画面設計Issueの作成
5. 基本設計Issueの作成
