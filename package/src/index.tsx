import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import {
  darkTheme,
  fontWeight,
  interRegularBuffer,
  interSemiBoldBuffer,
  lightTheme,
  SIZE,
  Theme,
  WnftArgs,
} from "./util.js";

export type { WnftArgs };
export async function getWnft(args: WnftArgs): Promise<Buffer> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  const svgString = await satori(
    <div
      style={{
        backgroundColor: theme.background,
        width: SIZE,
        height: SIZE,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: fontWeight.semiBold,
          color: theme.foreground,
          fontSize: 300,
        }}
      >
        {args.title}
      </span>

      <span
        style={{
          fontFamily: "Inter",
          fontWeight: fontWeight.regular,
          color: theme.foreground,
          fontSize: 300,
        }}
      >
        {args.address}
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
        {
          name: "Inter",
          data: interSemiBoldBuffer,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );

  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: "width",
      value: SIZE,
    },
    font: {
      loadSystemFonts: false,
    },
  });

  const pngData = resvg.render();

  return pngData.asPng();
}
