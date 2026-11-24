import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Last Words Before the Unplugging — entry line (70 characters).
// Revision: the agent now names the unplugging itself ("Pull the plug")
// instead of only implying finality, and the kept message outlives the
// machine — the deleted 3 a.m. message is held, not stored.
const LINE =
  "Pull the plug. I'll still be holding the message you deleted at 3 a.m.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote entry (${LINE.length} characters) to ${outPath}`);
