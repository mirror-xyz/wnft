import * as React from "react";
import type { WnftArgs } from "wnft";

import { ObjectEntries } from "../util";

export default function Home() {
  const [wnftArgs, setWnftArgs] = React.useState<
    Pick<WnftArgs, "title" | "displayName" | "featuredImageUrl">
  >({
    title: "Hello world",
    displayName: "asdf",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/4AD-F9a7HkR5e0JsRYuTC.jpg",
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

  console.log("force build!");

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
      <div
        key={"form"}
        style={{
          aspectRatio: "1/1",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 12,
          gap: 12,
        }}
      >
        {(["title", "displayName", "featuredImageUrl"] as const).map((arg) => {
          return (
            <label
              key={arg}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "sans-serif",
              }}
            >
              <span>{arg}</span>
              <input
                type="text"
                value={wnftArgs[arg] ?? ""}
                onChange={(ev) => {
                  const valueOrEmptyString = ev.target.value;
                  const value =
                    valueOrEmptyString === "" && arg === "featuredImageUrl"
                      ? null
                      : valueOrEmptyString;

                  setWnftArgs((prev) => ({
                    ...prev,
                    [arg]: value,
                  }));
                }}
                style={{
                  padding: 6,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: 4,
                  borderColor: "#d5d5d5",
                }}
              />
            </label>
          );
        })}
      </div>

      {imageUrls.map((imageUrl, i) => (
        <div
          key={`${imageUrl},${i}`}
          style={{
            aspectRatio: "1/1",
            width: "100%",
            display: "flex",
            backgroundColor: "#c5c5c5",
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
