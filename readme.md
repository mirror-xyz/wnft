# wnft

A node.js package to generate [Writing NFT](https://dev.mirror.xyz/5gt60vKFJZ_tR1BjoJ7-Y0sNw7REebStHjzFU5x73J0) media, powered by [Satori](https://github.com/vercel/satori).

Playground: [wnft.vercel.app](https://wnft.vercel.app/)

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
