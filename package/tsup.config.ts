import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  sourcemap: true,
  dts: true,
  clean: true,
  format: "esm",
  loader: {
    ".woff": "binary",
  },
});
