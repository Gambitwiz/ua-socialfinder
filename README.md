# SocialFinder

A clickable MIS 430 mockup built using BMAD Method 6.12.0. All events and attendee examples are fictional. No production AI, accounts, reservations, messages, payments, or student data services are connected.

## Open the mockup

Open `dist/index.html` in a modern browser, or serve this directory with:

```powershell
python -m http.server 4310 --bind 127.0.0.1 --directory dist
```

Then open http://127.0.0.1:4310. Internet access loads optional Google Fonts; system font fallbacks work offline. Local browser storage behavior may differ when opening a file directly; the HTTP preview is recommended.

## Three-minute demonstration

1. Discover: combine Free and Relaxed to narrow six events to two. Search for a missing phrase to demonstrate the empty state, then reset filters.
2. Open Board Games, New Names. Point out time, exact demo location, cost, attendance style, ACT Card requirement, and accessibility notes.
3. Save the event and try RSVP in demo. Opt in to the fictional meetup and show its explicit consent statement.
4. Open My plans. Show the saved/RSVP filters. Reopen the event to cancel the RSVP or leave the meetup.
5. Open My preferences. Choose Arts and Relaxed, then Save & see suggestions. Clay & Conversation ranks first, with the reason visible. All six events remain available.
6. Reload to show local persistence. Reset demo to clear the demonstration state.

## Deliverables

- `dist/`: interactive mockup source, also works without a build step.
- `BMAD-Decision-Log.md`: actual current-build decisions and review responses. User waived weekly reports; no prior team decisions are claimed.
- `_bmad-output/implementation-artifacts/spec-socialfinder.md`: BMAD build specification and review record.
- `_bmad/` and `.agents/skills/`: installed BMAD Method workflow.

Organizer event editing is not implemented; it was a Could-have in the SOW. This mockup focuses on student discovery and planning. The demo date is fixed to November 17–22, 2026, clearly labeled in the interface.
