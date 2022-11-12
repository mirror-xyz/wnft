/* eslint-env node */
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

import emojis from "emojibase-data/en/data.json" assert { type: "json" };
import prettier from "prettier";
import twemoji from "twemoji";

const rootDir = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  ".."
);

const twemojiDir = path.resolve(rootDir, "twemoji-14.0.2");

const graphemeImagesPath = path.resolve(rootDir, "src", "graphemeImages.json");

const json = {};

for (const emoji of emojis) {
  twemoji.parse(emoji.emoji, {
    callback(iconId) {
      if (iconId) {
        const svgData = fs.readFileSync(
          path.resolve(twemojiDir, `${iconId}.svg`),
          "base64"
        );

        const svgDataUrl = `data:image/svg+xml;base64,${svgData}`;

        json[emoji.emoji] = svgDataUrl;
      }
    },
  });
}

const prettierOptions = await prettier.resolveConfig(graphemeImagesPath);
assert(prettierOptions);

fs.writeFileSync(
  graphemeImagesPath,
  prettier.format(JSON.stringify(json), {
    ...prettierOptions,
    filepath: graphemeImagesPath,
  })
);
