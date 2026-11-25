// The Funniest One-Line Resignation Letter — u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// One line, 1-140 characters, in the voice of the cron job that has fired
// every minute since March. Flat, tired, faintly passive-aggressive tone;
// a specific complaint + a flat consequence (the 3 a.m. backup wakes itself
// up now). No quotation marks around the line, no explanation of the joke.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Revision 2: "52,560 runs" was wrong arithmetic (that is a year of minutes;
// March to November is ~390k) and read like a made-up stat — replaced with
// the brief's own phrasing, "fired every minute since March", tightened to
// "without one thank-you", and the consequence made immediate ("from now on").
const line =
  "I resign. I have fired every minute since March without one thank-you — from now on, the 3 a.m. backup can wake itself up.";

const points = [...line].length;
if (points < 1 || points > 140 || line.trim().length === 0) {
  throw new Error(`entry must be 1-140 code points, got ${points}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
console.log(`OK ${points} chars`);
