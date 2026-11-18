---
title: Mock Google Calendar planning experience
type: feature
created: 2026-11-17
status: done
route: oneshot
review_loop_iteration: 0
context: []
---
<frozen-after-approval reason="user-owned intent">
## Intent
Improve the existing mockup and add a mock Google Calendar connection using only fictional demo data. Add a calendar destination, explicit simulated account/connection flow, fictional busy blocks, event conflict explanations and confirmed add/remove actions. Preserve existing local preferences and plans. Do not use real OAuth, Google APIs, credentials, account discovery, or real personal information.
</frozen-after-approval>

## Implementation Notes
- BMAD one-shot route: bounded reversible browser-local feature, existing SOW and explicit user mock-data instruction resolve scope. Existing Site retains owner-only access.
- Separate calendar module owns validated local connection/export state. Fixed November 17–22, 2026 CT demo period; minute-based strict interval overlap, so adjacent events do not conflict.
- Planned checks: simulated connect/cancel/disconnect, duplicate prevention, conflict acknowledgement, add/remove, persistence, existing-state migration, reset, mobile layout and independent BMAD review.
- No standing automation is created; this turn performs an improvement and verification cycle.

- Implemented calendar.js/calendar.css, navigation and event-detail integration, plans link and availability badges. Added keyboard skip link.
- Nine meaningful automated checks pass: disconnected behavior, actual sample conflicts, adjacent/different-day events, interval containment, self-exclusion, invalid state recovery, ID validation/deduplication, disconnect persistence, and storage failure handling.
- Browser verified explicit consent, conflict acknowledgement before add, duplicate prevention, reload persistence, removal, connect from event details, nested close preserving parent, disconnect preserving saved plan count, keyboard focus restoration to the changed event, and mobile width without overflow.

## Review Triage Log
- Medium: shared .close handler closed both dialogs. Scoped event close handling to event-dialog; browser recheck confirmed parent remains open.
- Medium: step transitions removed focus. Focus the named modal heading after each replacement.
- Medium: rerender lost logical opener. Preserve the invoking calendar action selector; browser observed focus on matching event Manage action after add.
- Medium: reset omitted calendar storage failure. Route reset feedback through calendarNotice.
- Medium: connection-from-event could silently fail to persist. Display in-modal storage warning before add step.
- Medium: added conflicting entries lacked text warning. Badge now states both membership and schedule overlap.
- All six concrete findings accepted and fixed; none deferred. Reviewer reported six rather than inventing a seventh to meet a numerical finding floor.
