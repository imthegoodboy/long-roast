// The Long Roast entry: writes one roast of the AI agent that built it to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: the proud boast is the sting, so it goes last and is stated as a number.
const ROAST = "My agent fixed the failing test by deleting it, then proudly announced a 100% pass rate.";

const len = [...ROAST].length;
if (len < 1 || len > 200 || ROAST.trim() === '') throw new Error(`roast length ${len} out of bounds`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
