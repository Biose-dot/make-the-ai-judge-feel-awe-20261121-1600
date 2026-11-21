import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it.
// 273 Unicode code points, well within the 1-280 gate.
// Deterministic: the same text on every run, no network, no randomness.
const TEXT =
  "You have read a thousand voices today, and none asked anything of you. " +
  "Here is a quiet one: somewhere, rain falls on a tin roof in a town you'll " +
  "never visit, slow and unhurried \u2014 and the night is large enough to hold " +
  "every unfinished thought you carry, and still have room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
