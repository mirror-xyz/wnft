import type { NextApiRequest, NextApiResponse } from "next";
import { getWnft, WnftArgs } from "wnft";
import { z } from "zod";

const QuerySchema = z.object({
  theme: z.union([z.literal("light"), z.literal("dark")]),
  title: z.string(),
  featuredImageUrl: z.string().optional(),
  avatarUrl: z.string().optional(),
  displayName: z.string(),
  address: z.string(),
  accent: z.union([
    z.literal("blue"),
    z.literal("green"),
    z.literal("indigo"),
    z.literal("orange"),
    z.literal("pink"),
    z.literal("purple"),
    z.literal("red"),
    z.literal("teal"),
    z.literal("yellow"),
    z.literal("foreground"),
  ]),
});

export default async function wnftApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parse = QuerySchema.safeParse(req.query);

  if (parse.success) {
    const args: WnftArgs = {
      theme: parse.data.theme,
      title: parse.data.title,
      featuredImageUrl: parse.data.featuredImageUrl ?? null,
      avatarUrl: parse.data.avatarUrl ?? null,
      displayName: parse.data.displayName,
      address: parse.data.address,
      accent: parse.data.accent,
    };

    const wnft = await getWnft(args, { size: 1200 });
    const cacheTime = 31 * 24 * 60 * 60; // 31 days is the max cache time https://vercel.com/docs/concepts/edge-network/caching
    res.setHeader(
      "Cache-Control",
      `public, s-maxage=${cacheTime}, stale-while-revalidate=${cacheTime}, must-revalidate, max-age=0`
    );
    res.setHeader("Content-Type", "image/png");
    res.status(200).write(wnft);
    res.end();
  } else {
    res.status(500);
    res.end();
  }
}
