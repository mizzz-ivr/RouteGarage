#!/usr/bin/env bash
set -euo pipefail
if ! find docs -name "*.md" | grep -q .; then echo "エラー: docs配下にMarkdownがありません"; exit 1; fi
if find docs -name "*.md" -size 0 | grep -q .; then echo "エラー: 空のMarkdownファイルがあります"; exit 1; fi
for f in docs/ai-protocol/README.md docs/ai-protocol/PROMPT.md docs/ai-protocol/routegarage-specific-policy.md; do
  [[ -f "$f" ]] || { echo "エラー: 必須ファイルがありません: $f"; exit 1; }
done
echo "OK: docs検証に成功しました"
