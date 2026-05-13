#!/usr/bin/env bash
set -euo pipefail
msg="${1:-}"
if [[ -z "$msg" ]]; then
  echo '使い方: ./scripts/check-commit-message-ja.sh "type(scope): 日本語要約"'
  exit 1
fi
if [[ "$msg" =~ ^Merge[[:space:]] ]] || [[ "$msg" =~ \[bot\] ]]; then
  echo "情報: merge/bot commitはチェック対象外です"
  exit 0
fi
if ! [[ "$msg" =~ ^[a-z]+\([a-z0-9_-]+\):[[:space:]].+ ]]; then
  echo "警告: 推奨形式は type(scope): 日本語要約 です"
fi
summary="${msg#*: }"
python - "$summary" <<'PY'
import re,sys
s=sys.argv[1]
if re.search(r'[\u3040-\u30ff\u3400-\u9fff]', s):
    print('OK: 日本語要約を確認しました')
else:
    print('エラー: 要約に日本語が含まれていません')
    sys.exit(1)
PY
