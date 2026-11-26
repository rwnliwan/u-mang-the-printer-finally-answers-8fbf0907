// The Printer Finally Answers — make.fun program entry.
// Writes the printer's one-line comeback to /output/entry.txt
// (or $ENTRY_OUTPUT when set), exactly, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY =
  "I print on both sides. Pity you only ever read one, and it is usually the wrong one.";

const outPath = resolve(process.env.ENTRY_OUTPUT || "/output/entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
