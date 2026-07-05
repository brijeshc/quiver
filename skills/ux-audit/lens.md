# UX lens

## Checklist

### System state
- Every operation over ~1s shows progress; over ~10s shows what is happening and allows cancel.
- Success is confirmed where the user is looking, not silently.
- Current location is visible: active nav state, page titles, breadcrumbs on deep hierarchies.

### The four states of every view
- Empty: first-run guidance with the next action, never a blank region.
- Loading: skeleton or spinner; no layout jump when content lands.
- Error: says what happened and what to do next, in plain words, near where it happened.
- Partial: mixed success (3 of 5 uploaded) reported as such, not as success or failure.

### Forms
- Visible labels (placeholders are not labels); inline validation on blur, not on every keystroke, and never only on submit.
- User input survives errors and navigation; nothing retyped because the app failed.
- Sensible defaults for the common case; tab order follows visual order.

### Copy
- Buttons say what happens: "Delete 3 items", not "OK" or "Confirm".
- One name per concept everywhere; no internal jargon or codes surfaced to users.

### Actions & safety
- Destructive actions: undo where possible, confirmation with consequences where not; irreversible flagged as such.
- The most common task in each flow: count the clicks; flag anything that grew steps to accommodate rare cases.

### Cognitive load
- Decisions per screen: one primary action visually dominant; secondary actions quieter.
- Rare or advanced options disclosed progressively, not weighing down the default path.

## Report addendum

For each finding, name the flow step, what the user sees, what they needed, and the smallest change that fixes the moment.
