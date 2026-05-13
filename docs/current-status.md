# Current Status

## 現在状態

- Repository: `mizzz-dev/RouteGarage`
- 開発フェーズ: Phase 0 / Project Setup
- 開発手法: ウォーターフォール
- 主なAI支援: Codex
- 現在の主目的: 開発運用ルール、Source of Truth、AIプロンプト、ログ保存方針の整備

## 完了済み

- Issue #1: プロジェクト初期ドキュメントとAI開発運用ルールを整備する
- PR #2: 初期開発ドキュメント・AI運用方針とIssue/PRテンプレートを追加

## 進行中

- Issue #3: AI-Native開発プロトコルとRepository Source of Truthを整備する
- Branch: `docs/ai-native-source-of-truth`

## 未完了

- 要件定義書の作成
- MVPスコープの凍結
- 画面一覧・画面遷移の確定
- アーキテクチャ基本設計
- DB/API/認証/地図連携の設計
- Next.js初期構築

## 既知問題

- PR #2時点では `docs/04_output_policy.md` が未作成だった。
- 既存 `docs/ai/prompts/project-execution-prompt.md` は最新のAI-Native実行プロトコルとしては不足がある。
- Issueテンプレートのラベル表記が既存ラベル体系と一致していない箇所がある。

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

1. Source of Truthドキュメント整備
2. 要件定義Issueの作成
3. MVP範囲の再評価とリスク整理
4. 画面設計Issueの作成
5. 基本設計Issueの作成
