import sharp from "sharp";

export type Accent =
  | "blue"
  | "green"
  | "indigo"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "teal"
  | "yellow"
  | "foreground";

export type WnftArgs = {
  theme: "light" | "dark";
  title: string;
  featuredImageUrl: string | null;
  avatarUrl: string | null;
  displayName: string;
  address: string;
  accent: Accent;
};

export type ThemeStyles = {
  background: string;
  backgroundNoOpacity: string;
  foreground: string;
  foregroundSecondary: string;
  foregroundTertiary: string;
  textTertiary: string;
} & Record<Accent, string> & {
    gradient: Record<`${Accent}${1 | 2}`, string>;
  };

export const fontWeight = {
  regular: 400,
  semiBold: 600,
} as const;

export const lightTheme: ThemeStyles = {
  background: "#ffffff",
  backgroundNoOpacity: "rgba(255, 255, 255, 0)",
  foreground: "#333333",
  foregroundSecondary: "#ECECEC",
  foregroundTertiary: "#ECECEC",
  textTertiary: "#999999",

  // Accents
  blue: "rgb(0, 122, 255)",
  green: "rgb(52, 199, 89)",
  indigo: "rgb(88, 84, 214)",
  orange: "rgb(255, 149, 0)",
  pink: "rgb(255, 45, 85)",
  purple: "rgb(175, 82, 222)",
  red: "rgb(255, 59, 48)",
  teal: "rgb(90, 200, 250)",
  yellow: "rgb(255, 204, 0)",

  // Gradient accent pairings
  gradient: {
    blue1: "#007AFF",
    blue2: "#5AC8FA",
    green1: "#34C759",
    green2: "#34C780",
    indigo1: "#5854D6",
    indigo2: "#7F7BF6",
    orange1: "#FF3B30",
    orange2: "#FFA030",
    pink1: "#FF2D55",
    pink2: "#FF839A",
    purple1: "#AF52DE",
    purple2: "#EE83FF",
    red1: "#FF3B30",
    red2: "#FF7871",
    teal1: "#5AC8FA",
    teal2: "#AAFFF0",
    yellow1: "#FF9500",
    yellow2: "#FFCC00",
    foreground1: "#007AFF",
    foreground2: "#5AC8FA",
  },
};

export const darkTheme: ThemeStyles = {
  background: "#141414",
  backgroundNoOpacity: "rgba(20, 20, 20, 0)",
  foreground: "#ffffff",
  foregroundSecondary: "#1d1d1d",
  foregroundTertiary: "#1d1d1d",
  textTertiary: "#5b5b5b",

  // Accents
  blue: "rgb(10, 132, 255)",
  green: "rgb(48, 209, 88)",
  indigo: "rgb(94, 92, 230)",
  orange: "rgb(255, 159, 10)",
  pink: "rgb(255, 55, 95)",
  purple: "rgb(191, 90, 242)",
  red: "rgb(255, 69, 58)",
  teal: "rgb(100, 210, 255)",
  yellow: "rgb(255, 214, 10)",

  // Gradient accent pairings
  gradient: {
    blue1: "#0A84FF",
    blue2: "#7ED7FF",
    green1: "#30D158",
    green2: "#4AD291",
    indigo1: "#5E5CE6",
    indigo2: "#8F8BFF",
    orange1: "#FF453A",
    orange2: "#FF9F0A",
    pink1: "#FF375F",
    pink2: "#FE92A7",
    purple1: "#BF5AF2",
    purple2: "#F199FF",
    red1: "#FF453A",
    red2: "#FF847D",
    teal1: "#64D2FF",
    teal2: "#B4FFF1",
    yellow1: "#FF9F0A",
    yellow2: "#FFD60A",
    foreground1: "#0A84FF",
    foreground2: "#7ED7FF",
  },
};

export const wnftSize = 2048;
export const footerGradientHeight = 150;
export const featuredImageSize = {
  width: wnftSize,
  height: wnftSize / 2,
} as const;
export const avatarImageSize = {
  width: 208,
  height: 208,
} as const;

export function getTitleSize(args: {
  titleLength: number;
  hasFeaturedImage: boolean;
}): 143 | 163 | 184 {
  if (args.hasFeaturedImage) {
    return args.titleLength > 40 ? 143 : 163;
  } else {
    return 184;
  }
}

export async function getCheckedImageUrl(image: {
  url: string | null;
  size: { width: number; height: number };
}): Promise<string | null> {
  if (!image.url) {
    return null;
  }

  try {
    // check if valid URL
    new URL(image.url);

    // check if valid image
    const res = await fetch(image.url);
    if (!res.ok) {
      return null;
    }

    const resBuffer = Buffer.from(await res.arrayBuffer());

    const buffer = await sharp(resBuffer)
      .resize(image.size.width, image.size.height, {
        fit: sharp.fit.cover,
        withoutEnlargement: true,
      })
      .toFormat("jpeg")
      .toBuffer();

    const base64Image = `data:image/jpeg;base64,${buffer.toString("base64")}`;

    return base64Image;
  } catch (err) {
    return null;
  }
}
