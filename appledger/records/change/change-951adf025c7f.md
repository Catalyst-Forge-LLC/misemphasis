---
format_version: 0.1.0
id: change-951adf025c7f
kind: change
title: Unmapped tracking fields
record_status: active
created_at: 2026-09-09T00:00:00Z
updated_at: 2026-09-09T00:00:00Z
recorded_by:
  id: migration-import
  type: import
visibility: internal
relations: []
claims: []
extensions:
  migration:
    unmapped:
      agentContext:
        primaryAgent: cursor-agent
        supportsSubagents: true
        supportsPlanMode: true
      phases.4-feature-iteration:
        iterations: []
data:
  change_type: added
  affected_ids:
    - app-1754f77748da
  reason: Fields from the tracking file that have no ledger mapping were retained.
  evidence_refs: []
  operation: reconciliation
---

The unmapped fields are in extensions.migration.unmapped.
