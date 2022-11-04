import satori from "satori";

export function getWnft(): Promise<string> {
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
