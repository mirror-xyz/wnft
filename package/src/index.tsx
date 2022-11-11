import { Resvg } from "@resvg/resvg-js";
import fetch from "node-fetch";
import satori from "satori";

import interRegular from "../inter/Inter-Regular.woff";
import interSemiBold from "../inter/Inter-SemiBold.woff";
import {
  darkTheme,
  fontWeight,
  lightTheme,
  wnftSize,
  Theme,
  WnftArgs,
  Accent,
  getCheckedImageUrl,
  getTitleSize,
  avatarSize,
} from "./util.js";

export type { WnftArgs, Accent };
export async function getWnft(
  args: WnftArgs,
  options?: { size?: number }
): Promise<Buffer> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  const [checkedFeaturedImageUrl, checkedAvatarUrl] = await Promise.all([
    getCheckedImageUrl(args.featuredImageUrl),
    getCheckedImageUrl(args.avatarUrl),
  ]);

  const titleSize = getTitleSize({
    hasFeaturedImage: !!checkedFeaturedImageUrl,
    titleLength: args.title.length,
  });

  const svgString = await satori(
    <div
      style={{
        backgroundColor: theme.background,
        width: wnftSize,
        height: wnftSize,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {checkedFeaturedImageUrl ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: wnftSize,
              height: wnftSize / 2,
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
              width={wnftSize}
              height={wnftSize / 2}
              src={checkedFeaturedImageUrl}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontWeight: fontWeight.semiBold,
              color: theme.foreground,
              fontSize: titleSize,
              lineHeight: 1.13,
              display: "flex",
              paddingTop: 90,
              paddingLeft: 103,
              paddingRight: 103,
              letterSpacing: "-0.02em",
            }}
          >
            {args.title}
          </span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: wnftSize,
            fontFamily: "Inter",
            fontWeight: fontWeight.semiBold,
            color: theme[args.accent],
            fontSize: titleSize,
            paddingLeft: 108,
            paddingRight: 108,
            wordBreak: "normal",
            overflowWrap: "anywhere",
            letterSpacing: "-0.02em",
          }}
        >
          {args.title}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.background,
          display: "flex",
          paddingBottom: 112,
          paddingLeft: 112,
        }}
      >
        <div
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize,
            backgroundColor: "blue",
            position: "relative",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {!!checkedAvatarUrl && (
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
              width={avatarSize}
              height={avatarSize}
              src={checkedAvatarUrl}
            />
          )}
        </div>

        <div
          style={{
            paddingLeft: 52,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: fontWeight.semiBold,
              fontSize: 75,
              color: theme.foreground,
              letterSpacing: "-0.02em",
              paddingTop: 19,
            }}
          >
            {args.displayName}
          </span>

          <span
            style={{
              fontFamily: "Inter",
              fontWeight: fontWeight.regular,
              fontSize: 61,
              letterSpacing: "-0.013em",
              color: theme.textTertiary,
              paddingTop: 4,
            }}
          >
            {args.address}
          </span>
        </div>
      </div>
    </div>,
    {
      width: wnftSize,
      height: wnftSize,
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
      value: options?.size ?? wnftSize,
    },
    font: {
      loadSystemFonts: false,
    },
  });

  const pngData = resvg.render();

  return pngData.asPng();
}
