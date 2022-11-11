/* eslint-env node */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const rootDir = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  ".."
);

const twemojiDir = path.resolve(rootDir, "twemoji");

const svgFiles = fs
  .readdirSync(twemojiDir)
  .filter((f) => path.extname(f) === ".svg");

console.log(svgFiles);
