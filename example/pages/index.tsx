import * as React from "react";
import type { WnftArgs } from "wnft";

import { ObjectEntries } from "../util";

type EditableArgs = Readonly<
  Pick<WnftArgs, "title" | "displayName" | "featuredImageUrl">
>;

export default function Home() {
  const [wnftArgs, _setWnftArgs] = React.useState<EditableArgs>({
    title: "Hello world",
    displayName: "asdf",
    featuredImageUrl: null,
  });

  const imageUrls = (
    [
      {
        theme: "dark",
        avatarUrl: null,
        address: "0x123",
        accent: "blue",
      },
      {
        theme: "light",
        avatarUrl: null,
        address: "0x123",
        accent: "blue",
      },
    ] as const
  ).map(
    (
      baseArgs: Pick<WnftArgs, "theme" | "avatarUrl" | "address" | "accent">
    ) => {
      const args: WnftArgs = {
        ...baseArgs,
        title: wnftArgs.title,
        displayName: wnftArgs.displayName,
        featuredImageUrl: wnftArgs.featuredImageUrl,
      };

      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(args) as ObjectEntries<
        typeof args
      >) {
        if (value !== null) {
          params.set(key, value);
        }
      }

      return `/api/wnft?${params.toString()}` as const;
    }
  );

  return (
    <div
      style={{
        padding: 12,
        gap: 12,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(auto,min(100%,357px)))",
        gridAutoRows: "max-content",
      }}
    >
      {imageUrls.map((imageUrl, i) => (
        <div
          key={i}
          style={{
            aspectRatio: "1/1",
            width: "100%",
            display: "flex",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt=""
            src={imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
