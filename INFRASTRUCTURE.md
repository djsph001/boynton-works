# BOYNTON WORKS — READ BEFORE WORK

Before doing ANYTHING in this repo — infrastructure, content, pricing, services, or structure —
read these two private sources first, in order:

1. `~/Projects/INFRASTRUCTURE-REGISTRY.md`   — which repo/site/team/domain is canonical right now
2. `~/Projects/BOYNTON-WORKS-CONVENTIONS.md` — what this project is and what must not drift

Then compare them with live state. Never rely on chat history or cached local state.

Hard rules:

- Prior assistant reports are evidence, not authority. If a prior report conflicts with the
  registry or verified live state, STOP and reconcile the discrepancy before making changes.
- Never resume from a site/repo identifier merely because it appears in the latest prompt.
  Resolve the canonical project from the registry first.
- Identify the canonical deployment by hosting account/team AND immutable site/project ID —
  never by project name, existing URL, build settings, or `.netlify` local metadata alone.
- Continuous deployment is only verified by: `git push → automatic provider build → matching
  deployed commit SHA`.
- Do not create duplicate sites as a workaround.

This billboard holds no mutable facts on purpose. The registry and conventions files are the
authoritative private sources.
