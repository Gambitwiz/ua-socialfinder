# SocialFinder — BMAD Decision Log

MIS 430 · Group 1 · Build session: November 17, 2026 (America/Chicago)

## Basis and scope

This log records decisions made during the current prototype build. It is not a reconstruction of earlier weekly reports or evidence of decisions made by the four-person team. The user explicitly instructed this build to ignore weekly status reports. Consequently, this version does not satisfy the original assignment's weekly-report provenance rule unless the instructor accepts that change.

Inputs: the supplied “Group 1 - MIS 430 - SOW.docx,” version 1 dated November 5, 2026; the user's requested mockup and decision log; the user's November 17 instruction to ignore status reports; BMAD Method 6.12.0 installed in this project; its rendered bmad-build workflow; and the review produced during this build.

No prior team overrides, interviews, user-testing results, or approvals have been invented. Entries below distinguish BMAD workflow adjustments from ordinary implementation decisions.

## Changes to or judgments on BMAD output

| ID | BMAD guidance or output | Decision made in this build | Reason and evidence | Result |
| --- | --- | --- | --- | --- |
| B01 | bmad-build step 1 calls for a pause when the working tree is dirty. | Continued with the files created by this session. | The workspace initially contained only Git metadata. The untracked BMAD installation, downloaded guidance and app directory were all created as part of the authorized task; no pre-existing user edits were present. | Avoided treating this session's own setup as an unresolved user-change conflict. |
| B02 | The workflow proposes splitting independently shippable goals. | Kept the decision record alongside the mockup as supporting documentation. | The user explicitly requested both. The log documents this same build; it does not introduce an independent application feature. | One prototype package with companion evidence. |
| B03 | BMAD offers dispatch and one-shot implementation routes. | Selected the permitted one-shot route. | Small static browser-local footprint; SOW-defined boundaries; no backend, migration, real student data, or unresolved product intent. The private static publication is reversible. | One implementation, followed by independent review and browser verification. This is a route selection, not a rejection of BMAD. |
| B04 | The one-shot workflow defaults to no remote push without a user request. | Applied the Sites publishing workflow to synchronize the source for the requested interactive deliverable. | Sites requires pushed source before private deployment. The governing task workflow authorizes this publishing step. | Private publication attempted using the same source as the packaged mockup; no public-access change. |
| B05 | Blind-hunter review: mobile reset was hidden with the sidebar's lower panel. | Accepted and corrected the finding. | The mobile media query hid the only reset control. | Reset moved outside the hidden panel. |
| B06 | Blind-hunter review: storage failures could be overwritten by success toasts; modal feedback was outside the top layer. | Accepted both findings and corrected their separate causes. | Persist failures could be followed by a success message; page-level feedback was behind the modal. | Storage availability is appended to subsequent feedback; an in-dialog live status region presents modal action results. |
| B07 | Blind-hunter review: re-rendering removed keyboard focus targets. | Accepted and corrected the finding. | Saving or RSVPing replaces the originating event card. | Closing details restores a replacement event control when available; removal falls back to a plan tab or main content. |
| B08 | Blind-hunter review: meetup-only selections did not appear in My plans. | Accepted and corrected the finding. | Opting in did not require an RSVP or save, yet the plan list only counted those two states. | All plans and the count include meetup choices, with a visible meetup badge. |
| B09 | Blind-hunter review: repeated Details buttons lacked event-specific names. | Accepted and corrected the finding. | Screen-reader button lists could not distinguish events. | Each details action now includes the event title in its accessible name. |

## Implementation choices (not historical BMAD overrides)

| ID | Choice | Rationale and source |
| --- | --- | --- |
| I01 | Prioritize student discovery; omit organizer editing. | SOW marks discovery/filtering Must-have and organizer management Could-have. The mockup demonstrates the student core journey. |
| I02 | Use a transparent local ranking: interest +3, atmosphere +2, free preference +1; date breaks ties. | SOW includes preference-based suggestions and excludes live AI friend matching. Explanations state why each event is suggested; preferences reorder rather than hide events. These weights were selected during this build, not supplied by the team. |
| I03 | Use six explicitly fictional campus events and fictional attendee names. | SOW risk R3 calls for fictional prototype data. No location tracking, external RSVP, payment collection, messaging, or real student identity is implemented. |
| I04 | Freeze “Today” and “Tomorrow” to the displayed November 17–22 demo week. | Keeps classroom demonstration reproducible. The interface labels the demo period instead of implying a live events feed. |
| I05 | Persist only local demo state and provide reset. | Supports navigating and reloading a classroom demo without a production account system. |
| I06 | Use crimson accents and illustrated typographic event posters. | A coherent campus-oriented design without claiming official university endorsement or requiring licensed event photography. |

## Verification record

- JavaScript syntax validation completed with `node --check dist/app.js`.
- Browser verification found a collision with the browser's built-in `top` identifier; the page-header helper was renamed to `topLine` and the page rendered successfully.
- Desktop inspection found card titles flowing beside category labels; the title control was made block-level.
- Browser checks confirmed combined free/relaxed filtering returned two events, an unmatched search showed the recovery state, and clearing filters restored the catalog.
- Browser checks confirmed event logistics, demo RSVP, meetup opt-in, and the resulting My plans entry.
- Arts plus Relaxed preferences placed Clay & Conversation first, with a matching explanation; ordering persisted after reload.
- Mobile layout at a 390px viewport showed no horizontal overflow. Save, cancellation, and the empty plans state after reset were verified. The native reset confirmation temporarily stalled browser automation; control recovered using Escape.
- All six independent-review findings were accepted and patched. No findings were rejected or deferred.

## Source references

- [BMAD Method README](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/README.md)
- Installed workflow: `.agents/skills/bmad-build/SKILL.md`; rendered one-shot workflow under `_bmad/render/bmad-build/`.
- Build specification: `_bmad-output/implementation-artifacts/spec-socialfinder.md`.
- SOW: supplied Word document, sections 3–6 and 9.
