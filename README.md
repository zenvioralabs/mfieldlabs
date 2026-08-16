# MField Labs — Website (Wictronix motion/structure, Zenviora content)

Same Next.js 14 project as before, restructured to follow wictronix.in's
section flow and interaction language, with MField Labs' brand system
(logo, colors, Manrope/Inter) unchanged, and the nav + content sourced from
the Zenviora brand document.

## Setup

```bash
npm install
npm run dev
```

Not built/run locally yet (no network access on my end) — run `npm run
build` first and check the items in "Known gaps."

## Important honesty note on the Wictronix reference

I read wictronix.in's rendered HTML/content structure, but couldn't execute
its JS or inspect its actual CSS/animation timing from this environment — so
this isn't a pixel-for-pixel scrape. What's implemented here is a genuine
equivalent of its interaction *language*: word-by-word hero reveal, a
numbered "01/02" systems vocabulary throughout, a sticky-heading list with a
pull-quote, tabbed service "engines," a numbered phase timeline with tag
chips, count-up stat headlines, and paired dual-CTA footer cards. If a
specific animation looks meaningfully different once you compare the two
side by side, point it out and I'll tune the easing/timing/stagger to match
more closely.

Two things from Wictronix I deliberately did **not** copy as-is, because
doing so would have meant fabricating content:
- **Client logos** — Wictronix shows real client logos; MField/Zenviora's
  source content has no real client list, so `FocusMarquee.tsx` shows a
  marquee of real capability/impact-area terms instead of invented company
  names.
- **Named testimonials** — Wictronix shows real quotes attributed to named
  people; there's no real testimonial data for MField Labs, so
  `OutcomeQuotes.tsx` uses MField's own actual "Business Outcomes" copy as
  pull-quotes, labeled by capability area rather than attributed to
  invented people. If you have real client testimonials, send them and I'll
  swap this section to match Wictronix's pattern exactly (named person,
  role, photo).

## Section map (Wictronix pattern → MField/Zenviora content)

| Section | Wictronix pattern | MField content used |
|---|---|---|
| `Nav.tsx` | transparent-over-hero → white-on-scroll, logo swaps light/dark | Zenviora's real nav: About / Mission & Vision / Services / Why Choose Us / Contact Us |
| `Hero.tsx` | full-bleed bg, word-by-word headline reveal, 2 underline links | Zenviora hero copy: "Trust your data. Envision what's next. Amplify your impact." |
| `StatsHeadline.tsx` | "Proof of work" — big number-in-sentence, count-up | MField's real stats: 50+ projects, 30+ clients, 99% satisfaction |
| `About.tsx` | plain intro section | Zenviora's "What We Actually Do" |
| `Philosophy.tsx` | sticky-heading numbered list + pull-quote | Zenviora's 6 Mission bullets + "Technology Should Create Momentum" |
| `EnterpriseBanner.tsx` | single-statement dark CTA banner | Zenviora's Vision statement |
| `CapabilityEngines.tsx` | tabbed "engines" (Technology/Marketing/Consulting) | The 4 real Capabilities (Data & Intelligence, Automation & Operations, Digital Experiences, AI & Microsoft Innovation), each with real Impact Areas |
| `FeaturedPrograms.tsx` | featured-project cards, tag pills, hover glow | The 4 real Engagement Models, tagged with real Delivery Models |
| `ExecutionLifecycle.tsx` | 4-phase numbered timeline, focus tags | The 5 real Differentiators, restructured as phases with extracted focus tags |
| `FocusMarquee.tsx` | client logo strip | Real capability/impact-area terms (see honesty note above) |
| `OutcomeQuotes.tsx` | named testimonials | Real Business Outcomes copy, unattributed (see honesty note above) |
| `CTA.tsx` | dual-card footer banner | Two real MField CTAs: start a project / embedded partnership |

## Removed from the previous version

`components/ui/card.tsx`, `badge.tsx`, `accordion.tsx`,
`components/PhoneMock.tsx`, and the `gsap`, `@react-three/drei`,
`@radix-ui/react-accordion` dependencies were all removed — none of them
are used by the rebuilt sections (Wictronix's actual patterns turned out to
need Framer Motion + plain CSS, not GSAP ScrollTrigger or Radix Accordion).
Keeping unused code/deps in a production repo is worse than not having
written it — delete-on-sight if a future edit makes something else here
unused too.

## Known gaps / next steps

- Not built or visually verified locally — run `npm run build` first.
- `HeroScene.tsx`'s skyline is randomized per page load
  (`Math.random()`) — seed it or hardcode the array for a stable hero.
- `CapabilityEngines.tsx`'s tab list has no keyboard arrow-key navigation
  yet (just click/focus+enter via native `<button>`) — add roving
  `tabindex` + arrow-key handling if you want full ARIA tablist behavior.
- Reduced-motion: CSS-level animation is gated in `globals.css`, but the
  Framer Motion `WordReveal` in `Hero.tsx` and the R3F mouse-parallax in
  `HeroScene.tsx` aren't gated yet — wrap both in a `useReducedMotion()`
  check from `framer-motion`.
- `ExecutionLifecycle.tsx`'s focus tags are my own extraction/paraphrase of
  each differentiator's body text into 3 short tags — reasonable, but worth
  your review since they're not verbatim from the source document.
