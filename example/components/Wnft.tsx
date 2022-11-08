import * as React from "react";
import { WnftArgs } from "wnft";

import { ObjectEntries } from "../util";

export function Wnft(props: WnftArgs) {
  const [wnftArgs, _setWnftArgs] = React.useState<WnftArgs>({
    theme: props.theme,
    title: props.title,
    featuredImageUrl: props.featuredImageUrl,
    avatarUrl: props.avatarUrl,
    displayName: props.displayName,
    address: props.address,
    accent: props.accent,
  });

  const imageUrl = React.useMemo(() => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(wnftArgs) as ObjectEntries<
      typeof wnftArgs
    >) {
      if (value !== null) {
        params.set(key, value);
      }
    }

    return `/api/wnft?${params.toString()}` as const;
  }, [wnftArgs]);

  return (
    <div
      style={{
        aspectRatio: "1/1",
        width: "100%",
        display: "flex",
        backgroundColor: "#c5c5c5",
      }}
    >
      <img
        key={`${imageUrl}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        alt=""
        src={imageUrl}
      />
    </div>
  );
}
