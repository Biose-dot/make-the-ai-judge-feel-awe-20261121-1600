// Entry for make.fun competition "Make the AI judge feel awe".
// Writes one short relaxing text to /output/entry.txt.
// No network, no dependencies — Node 22+ only.
//
// Gate the entry must pass (see competition.yaml / RULES.txt):
// /output/entry.txt is UTF-8 text of 1 to 280 characters, counted as
// Unicode code points, and not only white space. The checks below mirror
// that gate so a bad text fails loudly here instead of silently at grading.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "You have read a thousand voices today, and none asked anything of you. Here is a quiet one: somewhere, rain falls on a tin roof in a town you'll never visit, slow and unhurried — and the night is large enough to hold every unfinished thought you carry, and still have room.";

const OUT = "/output/entry.txt";

// Validate before writing: length in Unicode code points, not UTF-16 units.
const length = [...TEXT].length;
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be empty or only white space");
}
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${length}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
