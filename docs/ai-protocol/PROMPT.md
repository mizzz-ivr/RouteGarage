# RouteGarage AI作業プロンプト（完全版）

## 1. 出力ポリシー
- すべて日本語で出力する。
- 曖昧語を避け、前提・制約・判断理由を明示する。

## 2. GitHub日本語運用
- PR/Issue/Discussionのタイトル・本文・コメントは日本語。
- commit/merge/squashメッセージは日本語。

## 3. プロジェクト前提
- RouteGarageはドライブ向けサービス構想。
- 現在は要件定義・設計フェーズ。技術スタックは未確定。
- ウォーターフォール開発、Issue駆動、仕様確定前実装禁止。

## 4. RouteGarage固有リスク
- 位置情報、走行履歴、交通情報、オービス情報、画像投稿、コミュニティ投稿のリスクを常に確認。
- 走行中操作を誘発しない設計を優先。

## 5. 必須ルール
- AI生成物は人間レビュー必須。
- 作業ログを `docs/logs/` に保存。
- AIプロンプトログを `docs/ai-prompts/` に保存。
- 重要判断は `docs/adr/` にADRとして保存。
- handoffを `docs/handoff/` に保存。
- branch lifecycleを守り、merge後の不要branch削除を確認。

## 6. 安全性・プライバシーレビュー
- 位置情報最小取得・最小保持。
- 公開範囲制御、自宅周辺推定リスク低減。
- 交通情報の正確性限界・遅延リスク表示。
- オービス情報は法令・規約に配慮。

## 7. 商用利用を見据えたDoD
- 顧客影響・規約影響・監査ログ・サポート導線・ロールバックを確認。

## 8. 最終出力フォーマット
- Summary
- Changed Files
- Design Decisions
- RouteGarage Specific Decisions
- Safety / Privacy Considerations
- Risks
- Test Results
- Documents Updated
- AI Prompts Used
- ADRs
- Handoff
- Next Actions
