#!/bin/bash
# Block Claude from modifying protected branches (main, dev)
# or running destructive git operations.

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

if [ -z "$COMMAND" ]; then
  exit 0
fi

# Block merging PRs via GitHub CLI
if echo "$COMMAND" | grep -qiE 'gh pr merge'; then
  echo "BLOCKED: Only a human should merge PRs. Ask the user to merge." >&2
  exit 2
fi

# Block force pushes to any branch
if echo "$COMMAND" | grep -qiE 'git push.*--force'; then
  echo "BLOCKED: Force pushes are not allowed." >&2
  exit 2
fi

# Block destructive resets
if echo "$COMMAND" | grep -qiE 'git reset --hard'; then
  echo "BLOCKED: Destructive reset not allowed without explicit permission." >&2
  exit 2
fi

exit 0
