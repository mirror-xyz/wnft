# wnft

A node.js package to generate Writing NFT media, powered by [Satori](https://github.com/vercel/satori).

```ts
import { getWnft } from "wnft";

const wnft = await getWnft({
  theme: "light",
  accent: "blue",
  title: "Introducing Writing NFTs",
  displayName: "Mirror Development",
  address: "dev.mirror.xyz",
  featuredImageUrl: null,
  avatarUrl: null,
})
```

## API

```ts
function getWnft(
  wnftArgs: {
    theme: "light" | "dark";
    title: string;
    featuredImageUrl: string | null;
    avatarUrl: string | null;
    displayName: string;
    address: string;
    accent: 
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
  }, 
  options?: {
    size?: number;
  },
): Promise<Buffer>
```
