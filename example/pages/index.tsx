import * as React from "react";
import useSWRImmutable from "swr/immutable";
import type { WnftArgs } from "wnft";

import { ObjectEntries } from "../util";
import type { Data as WnftApiData } from "./api/wnft";

type EditableArgs = Readonly<
  Pick<WnftArgs, "title" | "displayName" | "featuredImageUrl">
>;

const initialArgs: EditableArgs = {
  title: "Hello world",
  displayName: "asdf",
  featuredImageUrl: null,
};

const getDataUrlFromFile = (file: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.addEventListener(
      "load",
      () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject();
        }
      },
      false
    );
    reader.addEventListener("error", () => {
      reject();
    });

    reader.readAsDataURL(file);
  });
};

async function getWnftDataUrl(args: WnftArgs) {
  const url = new URL("/api/wnft", document.baseURI);
  for (const [key, value] of Object.entries(args) as ObjectEntries<
    typeof args
  >) {
    if (value !== null) {
      url.searchParams.set(key, value);
    }
  }
  const wnft = ((await (await fetch(url.toString())).json()) as WnftApiData)
    .wnft;

  if (!wnft) {
    throw new Error();
  }

  return getDataUrlFromFile(
    new Blob([wnft], {
      type: "image/svg+xml",
    })
  );
}

async function getWnfts(args: EditableArgs) {
  return Promise.all([
    getWnftDataUrl({
      title: args.title,
      displayName: args.displayName,
      featuredImageUrl: args.featuredImageUrl,
      theme: "dark",
      avatarUrl: null,
      address: "0x123",
      accent: "blue",
    }),

    getWnftDataUrl({
      title: args.title,
      displayName: args.displayName,
      featuredImageUrl: args.featuredImageUrl,
      theme: "light",
      avatarUrl: null,
      address: "0x123",
      accent: "blue",
    }),
  ]);
}

export default function Home() {
  const [wnftArgs, _setWnftArgs] = React.useState<EditableArgs>(initialArgs);

  const wnftQuery = useSWRImmutable<Array<string>, unknown, EditableArgs>(
    wnftArgs,
    getWnfts
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
      {wnftQuery.data?.map((dataUrl, i) => (
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
            src={dataUrl}
          />
        </div>
      ))}
    </div>
  );
}
