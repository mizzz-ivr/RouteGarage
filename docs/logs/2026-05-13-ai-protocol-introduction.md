# AI Protocol Introduction Log

## Summary
AI-Native Development ProtocolをRouteGarageへ導入。
## Background
Issue駆動・日本語運用・証跡保存を標準化するため。
## Objectives
運用ルール、テンプレート、ログ保存先、導線を整備。
## Scope
ドキュメントと軽量スクリプトのみ。
## Changed Files
本PRで追加・更新したファイル一式。
## Technical Decisions
強制CIは避け、ローカル確認用スクリプトを採用。
## Rejected Alternatives
技術スタック前提の厳格CI導入は見送り。
## RouteGarage固有判断
位置情報・走行履歴・交通/オービス情報の慎重運用を明文化。
## Safety / Privacy Considerations
最小取得・最小保持、公開範囲制御、モデレーションを明記。
## Risks
初期導入のため、運用後に見直しが必要。
## Test Results
スクリプト検証とREADME導線確認を実施。
## Remaining Tasks
運用後の改善Issue化。
## Next Actions
MVP定義Issue、技術スタックADR起票。
## AI Prompts Used
docs/ai-prompts/2026-05-13-introduce-ai-native-protocol-codex.md
## Handoff
テンプレートを使って次Issueを起票する。
