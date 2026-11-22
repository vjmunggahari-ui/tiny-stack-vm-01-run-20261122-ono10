# NOTES — tiny-stack-vm-01-run-20261122

## Hook
One 84-character string *is* the ISA's shape. Each character encodes an
opcode's immediate length, pops and pushes, so a single lookup settles
validity (trap 5), immediate fit (trap 9) and both stack checks (traps 2/3)
before the executor runs — no per-opcode bookkeeping, no dispatch table of
functions. A straightforward implementation repeats those checks in every
case arm or trusts a switch and gets the traps wrong (the house baseline
collapses all ten traps to exit 1 and scores 670,000 on practice). This one
is a faithful port of the reference VM: exact `Math.imul` MUL, unsigned
DIVU/MODU/LTU via `>>>0`, INT_MIN/-1 division, shift masking, sign-extended
PUSH8, output-before-trap kept. Correct first, then tiny: 2,680 bytes.

## Verification
- Practice set: score 1,000,000, passed 1, 40/40 answered (baseline 670,000).
- Differential fuzz vs the reference VM: 240 generator-drawn instances from
  6 fresh seeds + 300 raw random programs + 300 structured random programs
  — 840 checked, 0 mismatches.
- Grader-like run (read-only copy, MAKEFUN_OUTPUT_DIR set, unprivileged
  user): exit 0, correct practice output.
- Revision: v1 scored 1,000,000; v2 golfed the dispatch (see git history),
  re-run twice byte-identical.

## Files
- `main.ts` — the whole VM + runner (2,680 bytes).
- `LICENSE` — MIT, SPDX line first.
