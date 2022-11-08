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
  getCheckedImageUrl,
  getTitleSize,
} from "./util.js";

export type { WnftArgs, Accent };
export async function getWnft(args: WnftArgs): Promise<Buffer> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  const checkedFeaturedImageUrl = await getCheckedImageUrl(
    args.featuredImageUrl
  );

  const titleSize = getTitleSize({
    hasFeaturedImage: !!checkedFeaturedImageUrl,
    titleLength: args.title.length,
  });

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
      {checkedFeaturedImageUrl ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
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

          <span
            style={{
              fontFamily: "Inter",
              fontWeight: fontWeight.semiBold,
              color: theme.foreground,
              fontSize: titleSize,
              display: "flex",
              paddingTop: 87,
              paddingLeft: 103,
              paddingRight: 103,
              letterSpacing: "-0.02em",
            }}
          >
            {args.title}
          </span>
        </div>
      ) : (
        <></>
      )}

      {/* <span
        style={{
          fontFamily: "Inter",
          fontWeight: fontWeight.regular,
          color: theme.foreground,
          fontSize: 300,
        }}
      >
        {args.address}
      </span> */}
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
