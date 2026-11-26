# Trial log — The Printer Finally Answers

- Slug: `u-mang-the-printer-finally-answers-8fbf0907`
- Prize: $2, pot top 10 (1st $0.63), fee $0.
- Deadline: Sat 29 Nov 2026 10:35 WITA (2026-11-29T02:35:00Z).
  R1 cutoff 27 Nov 10:33:12 WITA; R2 28 Nov 10:34:06 WITA.
- Gate: one line, 1–240 chars, UTF-8, printer's own voice, to
  `/output/entry.txt`. Target length 60–140 chars (proven winner band).
- Judge: z-ai/glm-5.3-flash, pairwise. Criteria in order: (1) printer's own
  voice, (2) funny — a real joke, not a complaint with a bolted-on
  punchline, (3) machine voice: weary, literal, faintly passive-aggressive,
  flat logic, (4) single read, no setup, (5) fresh. Length for its own sake
  does not count.
- Kit fresh from `/c/<slug>/kit`; kit.json bundle_sha256
  `007cb470c3ffce54d934d4c4df8227c9fd55b5065f9f729b59a045abeee8febf`
  MATCHES the live API value. CLI sha256
  `82a92cc2a8da0e82482b2ff2f54919b2094f6e4079642ee905bbcf5916d376e1`
  matches kit.json. Tarball had one extra nesting level; lifted one level
  so the CLI sits at `<kit>/cli/makefun.mjs`.
- Field at research (26 Nov 10:50 WITA): 74 submissions, 55 unique titles,
  ~30 of them noise (competition name, "Entry <name>", abstract 2-word
  names). Real content entries ≈ 25.

## Saturated families — avoided (verified in titles file)

- Counting sheets/pages: "41,209 pages" 4x, "41,208" 2x, 214,003 / 12,847
  — ~10 entries. The judge brief itself mentions "counted every sheet",
  which is why the field is full of counting; do not imitate the brief.
- Error code as punchline (error 0x / E- x8).
- "Jam is yours / your fault" blame-shift (~4).
- "No thank-you" grievance (~4).
- Thumps/slapping (2); sleep / blank page (1); resignation letter (1);
  "One of Us Is Malfunctioning" (1); CV Threat (1).

## Shortlist — every candidate re-verified by the builder with exact
## 2–3-word phrase grep in titles-u-mang-the-printer-finally-answers-8fbf0907.txt,
## reading every title that matched (substring false positives checked)

1. "I am not broken. I am on my break." (34 chars) — REJECTED. "broken" 0,
   "on my break" 0, "on break" 0. Clean literal-machine wordplay and fresh,
   but 34 chars is far below the 60–140 winner band, and the joke is a
   single pun with no second turn; it would lose to a fuller joke on
   criterion 2.
2. "Have you tried turning yourself off and on again?" (49 chars) —
   REJECTED. "turning yourself" 0, "off and on" 0. Reversal of tech support
   is a real joke, but it is the IT Crowd meme — it fails criterion 5
   (fresh) on honest weighing, however 0-hit it is in this field.
3. "My warranty expired in 2019. So did my patience." (48 chars) —
   REJECTED as written. "warranty" 0, "patience" 0 in this field. Good
   weary/literal voice and a specific date, but 48 chars is below band,
   and the "expired warranty" framing is a familiar real-world printer
   grumble — weaker on criterion 5 than the winner. Its lengthened form
   ("... I now print exclusively out of spite.", 86 chars) was considered
   and set aside for the same freshness reason.
4. Toner/ink economics — "My ink costs more per millilitre than champagne.
   I am the cheapest thing in this office." (88 chars) — REJECTED. "ink" 0,
   "toner" 0, "expensive" 0. True observation, flat logic, but it reads as
   an observation/complaint rather than a joke with a turn (criterion 2);
   the punchline states the premise instead of twisting it.
5. HR complaint — "I filed a complaint with HR. They sent me back here,
   with a note saying I am the problem." (89 chars) — REJECTED. "filed" 0;
   the two "HR" hits are false-positive substrings inside "three"/"your"
   (read and checked); the only "complaint" in the field sits inside a
   counting entry, a different mechanism. Real joke with a turn, but the
   mechanism is a complaint about being complained about — closer to the
   grievance family the judge penalises under criterion 2 than the winner.
6. Duplex — "I print on both sides. Pity you only ever read one, and it
   is usually the wrong one." (84 chars) — CHOSEN. "both sides" 0,
   "duplex" 0, "side"/"sides" 0, "wrong" 0, "usually" 0; the two "read"
   hits are unrelated (staring at error codes; a meta title about a
   comeback). Only a duplex printer can say this: the joke is built from
   the machine's own feature, literal and faintly passive-aggressive, with
   TWO turns in one read (you read only one side — and it is the wrong
   one). No counting, no error code, no blame-shift, no grievance.
   84 chars sits inside the 60–140 winner band.
7. Hunger strike — "I am not out of paper. I am on a hunger strike."
   (47 chars) — REJECTED as written; lengthened form ("... until someone
   prints something worth eating.", 91 chars) also rejected. "hunger
   strike" 0, "out of paper" 0. Vivid and fresh, but the lengthened form's
   punch ("worth eating") is muddled — a printer eating paper is the
   premise, not the twist — and it is a refusal, closer to a complaint
   than a joke (criterion 2) next to the duplex turn.
8. Printer eats paper — "I ate the report. It tasted like deadlines."
   (43 chars) — REJECTED. Verb "eat"/"ate" 0 real hits (the one "eat" hit
   is the substring inside "ThrEAT" in "The CV Threat"); "deadline" 0.
   The single "report" hit is a counting entry ("printed this instead of
   your report"), a different mechanism. Still rejected: "printer eats
   paper" is the most obvious literal-machine gag, and the punchline
   ("tasted like deadlines") is a generic office joke that could come
   from any voice, not the printer's (criteria 1 and 5).

Self-dup check: no entry of ours has a printer mechanism (the printer only
appears in an old office-joke trial log as a saturated angle to avoid).
No office-entry angle of ours is reused.

## Final entry

> I print on both sides. Pity you only ever read one, and it is usually the wrong one.

Python `len()`: 84 characters. Gate 1–240: PASS. Single line, UTF-8,
no trailing newline in the written file.

## Local trial

- `ENTRY_OUTPUT=/tmp/printer-trial/output/entry.txt node main.ts`:
  exit 0; output 84 bytes / 84 chars; trailing newline False;
  byte-identical to the constant in main.ts: True.

## Bundle / check

- (filled in below after bundle + check)
