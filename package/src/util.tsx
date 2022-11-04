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
  featuredImage: string | null;
  avatar: string | null;
  displayName: string;
  address: string;
  accent: Accent;
};
