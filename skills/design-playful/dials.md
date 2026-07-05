# Dial positions for /design-playful

## Typography

- Display: rounded and confident - Baloo 2, Fredoka, or Bricolage Grotesque (chunky weights). Body: readable rounded-neutral - Nunito Sans or Quicksand (test legibility; fall back to Nunito).
- Big, bouncy hierarchy: dramatic scale (1.5), display weights 700-800, line-height 1.1. A slight rotation (-2 to 2 degrees) on ONE display element or sticker-label per view.
- Body stays grown-up: 16-18px, 1.6, normal case. Playfulness lives in display and components, not in making paragraphs cute.

## Color

- Bright, warm, SATURATED - but anchored: ink is a deep warm color, never black: plum `#3B2A4A`, navy `#1E2A52`, or chocolate `#3A2B22`. Colored ink is most of the style.
- Palette: 3-4 candy hues that genuinely harmonize (coral `#FF6B5E`, sunshine `#FFC94D`, sky `#5BC0EB`, mint `#7BD389`) on a warm cream base `#FFF8EE`, never stark white.
- Every hue needs a job: one is THE action color; others mark categories or states. Random color assignment reads as clipart.
- Backgrounds can be flooded: a full section in sunshine with plum ink is the register working.

## Shape & depth

- Chunky radius, consistently: 12-20px on cards and inputs, full-round pills on buttons and tags. Pick the value once; mixed radii look unintentional.
- **Sticker language:** elements get a 2-3px ink-colored border + hard offset shadow in ink (`box-shadow: 0 4px 0 #3B2A4A`), like die-cut stickers. Buttons physically press: `:active` translates down 4px and the shadow collapses to 0. This is the signature interaction.
- Blob/squircle shapes for avatars and image masks; wavy or scalloped section dividers (SVG, one style reused).
- Hand-drawn touches in ONE place: a scribble underline under a key word, a doodle arrow to the CTA - drawn once, not wallpaper.

## Motion: the springy soul

- Springs everywhere: entrances and state changes overshoot slightly (stiffness ~300, damping ~18; or 300ms `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- Micro-delights: buttons squash on press (scale 0.96), checkboxes pop when ticked, hearts burst once when liked, tab indicators slide with overshoot. One confetti moment for genuinely earned wins, not every click.
- Idle charm, subtly: a mascot blink, a gentle float on the hero illustration (±6px, 4s) - one element, not the whole page breathing.
- Full `prefers-reduced-motion` fallback; springs become simple fades.

## Voice (copy is half the playfulness)

Warm, specific, lightly funny: "All caught up - go enjoy the sun ☀️" beats "No new notifications".
Empty states and errors are where personality earns its keep ("Well, that didn't work. We're on it - try again in a sec").
Buttons stay verbs ("Start exploring", not "Submit").
One emoji-as-garnish per surface; emoji are never icons or bullets.

## Never

Comic Sans energy (sloppy is not playful; alignment and spacing stay precise) · playfulness in destructive flows (deleting data is a serious moment: calm dialog, clear words) · clown-palette randomness (every color a job) · constant motion that exhausts · cuteness that costs legibility (AA contrast holds; deep ink on candy hues passes - test it) · talking down to users.
