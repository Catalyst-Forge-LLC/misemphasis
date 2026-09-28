---
format_version: 0.1.0
id: lesson-b3c4069ae51f
kind: lesson
title: localberth CLI was not on PATH in the agent shell. ensure-lease warned
  and FileP
record_status: active
created_at: 2026-09-09T17:47:00Z
updated_at: 2026-09-09T17:47:00Z
recorded_by:
  id: migration-import
  type: import
visibility: internal
relations: []
claims: []
data:
  context: Imported from workflow tracking gotchas[].
  problem: localberth CLI was not on PATH in the agent shell. ensure-lease warned
    and FilePress bound 5200 anyway.
  resolution: Keep the preferred-port fallback. Claim the lease from a shell that
    has LocalHelm on PATH when a stable fleet port is required.
  limits: Imported as a historical assertion. Verification was not recorded.
  generalization_status: observed
---


