// entries-best-meal: one sentence about the best meal ever had.
// Writes the entry to /output/entry.txt (the grader's artifact path).
import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "My grandmother's rendang in Padang, beef so tender it surrendered to my spoon, wood smoke curling through her kitchen, and ten-year-old me scraping the pan for the last dark, caramelised spoonful.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(`Wrote ${sentence.length} characters to /output/entry.txt`);
