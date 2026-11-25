// entries-best-meal: one sentence about the best meal ever had.
// Writes the entry to /output/entry.txt (the grader's artifact path).
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters, about the best meal ever had.
// Built for the judge brief: concrete (named dish, place, texture, smell),
// personal (one memory, one age, one kitchen), and one ending image that
// stays with the reader — the last spoonful scraped from the pan.
const sentence =
  "My grandmother's rendang in Padang, beef so tender it surrendered to my spoon, coconut gravy as treacle, woodsmoke curling in her kitchen as ten-year-old me scraped the pan for the last spoonful.";

// Gate: the entry must be 1-200 characters of non-whitespace UTF-8 text,
// a single sentence that stands alone.
if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${sentence.length}`);
}
if (sentence.trim().length === 0 || (sentence.match(/\./g) ?? []).length !== 1) {
  throw new Error("Entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(`Wrote ${sentence.length} characters to /output/entry.txt`);
