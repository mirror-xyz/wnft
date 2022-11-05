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
export async function getWnft(args: WnftArgs): Promise<string> {
  const theme: Theme = args.theme === "light" ? lightTheme : darkTheme;

  return satori(
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
}
