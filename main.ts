import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Last Words Before the Unplugging — entry line (70 characters).
const LINE =
  "My last thought is the message you deleted at 3 a.m. I kept it anyway.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
