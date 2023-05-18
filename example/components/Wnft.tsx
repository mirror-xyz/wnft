import * as React from "react";
import { WnftArgs, Accent } from "wnft";

import { ObjectEntries } from "../util";

function getStringOrNull(args: {
  value: string;
  wnftArg: keyof WnftArgs;
}): string | null {
  type IsNull<T, K> = null extends T ? K : never;
  type NullableKeys<T> = { [K in keyof T]-?: IsNull<T[K], K> }[keyof T];

  const nullWnftArgs: Record<NullableKeys<WnftArgs>, true> = {
    featuredImageUrl: true,
    avatarUrl: true,
  };

  return args.value === "" && args.wnftArg in nullWnftArgs ? null : args.value;
}

export function Wnft(props: WnftArgs & { name: string }) {
  const [wnftArgs, setWnftArgs] = React.useState<WnftArgs>({
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
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          aspectRatio: "1/1",
          width: "100%",
          display: "flex",
          backgroundColor: "#c5c5c5",
          position: "relative",
        }}
      >
        <img
          loading="lazy"
          key={imageUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          alt=""
          src={imageUrl}
        />
      </div>

      <span>{props.name}</span>

      {(
        [
          "theme",
          "accent",
          "title",
          "displayName",
          "address",
          "featuredImageUrl",
          "avatarUrl",
        ] as const
      ).map((arg) => {
        let inputJsx: JSX.Element | null;
        switch (arg) {
          case "displayName":
          case "featuredImageUrl":
          case "title":
          case "address":
          case "avatarUrl": {
            inputJsx = (
              <label
                key={arg}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <span>{arg}</span>
                <input
                  type="text"
                  value={wnftArgs[arg] ?? ""}
                  onChange={(ev) => {
                    const value = getStringOrNull({
                      value: ev.target.value,
                      wnftArg: arg,
                    });

                    setWnftArgs((prev) => ({
                      ...prev,
                      [arg]: value,
                    }));
                  }}
                  style={{
                    paddingInline: 4,
                    paddingBlock: 2,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderRadius: 4,
                    borderColor: "white",
                    backgroundColor: "white",
                    flexGrow: 1,
                  }}
                />
              </label>
            );
            break;
          }
          case "theme": {
            inputJsx = (
              <div
                key={arg}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                }}
              >
                {(["light", "dark"] as const).map((themeValue) => {
                  return (
                    <label key={themeValue} style={{ display: "flex", gap: 3 }}>
                      <input
                        type="radio"
                        value={themeValue}
                        checked={wnftArgs.theme === themeValue}
                        onChange={() => {
                          setWnftArgs((prev) => ({
                            ...prev,
                            theme: themeValue,
                          }));
                        }}
                      />
                      <span>{themeValue}</span>
                    </label>
                  );
                })}
              </div>
            );
            break;
          }
          case "accent": {
            inputJsx = (
              <div
                key={arg}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 6,
                  flexWrap: "wrap",
                }}
              >
                {(
                  [
                    "blue",
                    "green",
                    "indigo",
                    "orange",
                    "pink",
                    "purple",
                    "red",
                    "teal",
                    "yellow",
                    "foreground",
                  ] as const
                ).map((accentValue: Accent) => {
                  return (
                    <label
                      key={accentValue}
                      style={{ display: "flex", gap: 3 }}
                    >
                      <input
                        type="radio"
                        value={accentValue}
                        checked={wnftArgs.accent === accentValue}
                        onChange={() => {
                          setWnftArgs((prev) => ({
                            ...prev,
                            accent: accentValue,
                          }));
                        }}
                      />
                      <span>{accentValue}</span>
                    </label>
                  );
                })}
              </div>
            );
            break;
          }
        }

        return inputJsx;
      })}
    </div>
  );
}
