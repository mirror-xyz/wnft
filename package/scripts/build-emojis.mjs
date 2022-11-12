/* eslint-env node */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const rootDir = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  ".."
);

const twemojiDir = path.resolve(rootDir, "twemoji-14.0.2");

const svgFiles = fs
  .readdirSync(twemojiDir)
  .filter((f) => path.extname(f) === ".svg");

const json = {};

for (const svgFile of svgFiles) {
  const svgData = fs.readFileSync(path.resolve(twemojiDir, svgFile));
  const svgDataUrl = `data:image/svg+xml;base64,${svgData.toString("base64")}`;

  const grapheme = String.fromCodePoint(
    ...svgFile.split("-").map((code) => {
      return parseInt(code, 16);
    })
  );

  json[grapheme] = svgDataUrl;
}

fs.writeFileSync(
  path.resolve(rootDir, "src", "graphemeImages.json"),
  JSON.stringify(json)
);
