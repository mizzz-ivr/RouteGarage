#!/usr/bin/env bash
set -euo pipefail
for f in docs/ai-protocol/PROMPT.md docs/logs/README.md docs/ai-prompts/README.md docs/adr/README.md .github/pull_request_template.md; do
  [[ -f "$f" ]] || { echo "エラー: 必須ファイルが不足しています: $f"; exit 1; }
done
echo "OK: repository health checkに成功しました"
