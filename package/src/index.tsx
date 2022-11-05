import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import satori from "satori";

import { darkTheme, lightTheme, SIZE, Theme, WnftArgs } from "./util";

const interRegularPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../inter/Inter-Regular.woff"
);
const interRegularBuffer = fs.readFileSync(interRegularPath);

export type { WnftArgs };
export async function getWnft(args: WnftArgs): Promise<string> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  return satori(
    <div
      style={{
        backgroundColor: theme.background,
        width: SIZE,
        height: SIZE,
        display: "flex",
      }}
    >
      <span
        style={{
          display: "flex",
          fontFamily: "Inter",
          color: theme.foreground,
          fontSize: 300,
        }}
      >
        {args.title}
      </span>
    </div>,
    {
      width: SIZE,
      height: SIZE,
      fonts: [
        {
          name: "Inter",
          data: interRegularBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
