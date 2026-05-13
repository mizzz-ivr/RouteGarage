# ADR-0001: AI-Native Development Protocolを導入する

## Status
Accepted

## Context
AIエージェントと人間の協調開発を標準化し、証跡と監査性を確保する必要がある。

## Decision
RouteGarageにAI開発プロトコル、テンプレート、ログ保存先、軽量検証スクリプトを導入する。

## Alternatives
1. 既存READMEのみで運用
2. CI強制を先行導入

## Consequences
初期フェーズでの運用一貫性が向上する。運用実績に応じて更新が必要。

## Risks
ルール過不足、テンプレート運用負荷、将来スタック確定時の再調整。

## References
README.md, docs/ai-protocol/*, .github templates, scripts/*.sh
