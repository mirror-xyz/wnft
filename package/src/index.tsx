import satori from "satori";

import { WnftArgs } from "./util";

export type { WnftArgs };
export function getWnft(_args: WnftArgs): Promise<string> {
  return satori(
    <div
      style={{
        backgroundColor: "black",
      }}
    ></div>,
    {
      width: 600,
      height: 400,
      fonts: [],
    }
  );
}
