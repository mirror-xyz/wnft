import { Resvg } from "@resvg/resvg-js";
import fetch from "node-fetch";
import satori from "satori";

import interRegular from "../inter/Inter-Regular.woff";
import interSemiBold from "../inter/Inter-SemiBold.woff";
import {
  darkTheme,
  fontWeight,
  lightTheme,
  SIZE,
  Theme,
  WnftArgs,
  Accent,
} from "./util.js";

export type { WnftArgs, Accent };
export async function getWnft(args: WnftArgs): Promise<Buffer> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  let checkedFeaturedImageUrl: string | null;
  if (args.featuredImageUrl) {
    try {
      // check if valid URL
      new URL(args.featuredImageUrl);

      // check if valid image
      const res = await fetch(args.featuredImageUrl);
      if (!res.ok) {
        throw new Error();
      }

      checkedFeaturedImageUrl = args.featuredImageUrl;
    } catch (err) {
      checkedFeaturedImageUrl = null;
    }
  } else {
    checkedFeaturedImageUrl = null;
  }

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
      {!!checkedFeaturedImageUrl && (
        <div
          style={{
            width: SIZE,
            height: SIZE / 2,
            display: "flex",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            width={SIZE}
            height={SIZE / 2}
            src={checkedFeaturedImageUrl}
          />
        </div>
      )}

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
          data: interRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interSemiBold,
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
