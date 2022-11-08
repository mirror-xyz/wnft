import * as React from "react";
import type { WnftArgs } from "wnft";

import { Wnft } from "../components/Wnft";

const wnfts: Record<string, WnftArgs> = {
  ["All the Ways We Are Together"]: {
    theme: "dark",
    title: "All the Ways We Are Together",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "Véronik",
    accent: "blue",
    address: "veronik.mirror.xyz",
    avatarUrl: "/all-the-ways-we-are-together/avatar.png",
  },
  ["Dark mode, no featured img"]: {
    theme: "dark",
    title: "Ethereum: The Infinite Garden",
    featuredImageUrl: null,
    displayName: "The Infinite Garden",
    accent: "blue",
    address: "ethereumfilm.mirror.xyz",
    avatarUrl: "/infinite-garden/avatar.png",
  },
  ["Light mode, no featured img"]: {
    theme: "light",
    title: "Ethereum: The Infinite Garden",
    featuredImageUrl: null,
    displayName: "The Infinite Garden",
    accent: "blue",
    address: "ethereumfilm.mirror.xyz",
    avatarUrl: "/infinite-garden/avatar.png",
  },
  ["center aaaaaaaa"]: {
    theme: "dark",
    title:
      "aaaaaaaaaaaaaaasdfsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfaAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left aaaaaaaa"]: {
    theme: "light",
    title:
      "aaaaaaaaaaaaaaasdfsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfaaaaaaaaaaasdfsdfaaaaaaaaaaadfaaaaaaaaaaasdfsdfaaaaaaaaaaa",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left long"]: {
    theme: "light",
    title:
      "How To Build A Headless Brand: Architecting Chaos With A Really Long Title Just To see How It Is You Know?",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["center long"]: {
    theme: "dark",
    title:
      "How To Build A Headless Brand: Architecting Architecting Architecting Chaos With A Really Long Title Just To see How It Is You Know?",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["long footers"]: {
    theme: "dark",
    title: "abc",
    featuredImageUrl: null,
    displayName:
      "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc",
    accent: "blue",
    address:
      "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc",
    avatarUrl: null,
  },
  ["strip emoji🦺"]: {
    theme: "dark",
    title:
      "  ♥♥♥ 1️⃣➥☒◉☞✦✪❦₷℅×+☀︎ ☼ ♕¡ ¿ ⸘ ‽ † & 🏳️ 🏳️‍🌈 🏴 🇦🇼 💖 💿 🤎 ❣️ ⚛️ ❌⭕️🌐❇️🆙🆒4️⃣#️⃣8️⃣🔜〰️🤸‍♂️ 😭 🌯✅ abc 0       0  🦺 🤷‍♂️ 🤪 123        🤷‍♂️ 🤪 x💀y🤙z😵‍💫 ♥♥♥   :) !! ~~ `` èàñ =+~ Ξ₿",
    featuredImageUrl: null,
    displayName: "🦺🤷‍♂️🤪abc",
    accent: "blue",
    address: "🦺🤷‍♂️🤪abc",
    avatarUrl: null,
  },
  ["avatar placeholder"]: {
    theme: "dark",
    title: "abc",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["center no orphan"]: {
    theme: "dark",
    title: "||||||||| abcdefghijkl m",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["center force orphan"]: {
    theme: "dark",
    title: "||||||| abcdefghijklm n",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left short no orphan 1"]: {
    theme: "dark",
    title: "|||||||||| abcdefghijkmn o",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left short no orphan 2"]: {
    theme: "dark",
    title: "|||||||||| a bcdefghijkmno",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left short forced orphan 1"]: {
    theme: "dark",
    title: "|||||||| abcdefghijkmno p",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left short forced orphan 2"]: {
    theme: "dark",
    title: "|||||||| a bcdefghijkmnop",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left long no orphan 1"]: {
    theme: "dark",
    title:
      "||||||||||||||||||||||||||||||||||||||||||||||||| abcdefghijklmno p",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left long no orphan 2"]: {
    theme: "dark",
    title:
      "||||||||||||||||||||||||||||||||||||||||||||||||| a bcdefghijklmnop",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left long forced orphan 1"]: {
    theme: "dark",
    title:
      "|||||||||||||||||||||||||||||||||||||||||||||||| abcdefghijklmnop q",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["left long forced orphan 2"]: {
    theme: "dark",
    title:
      "|||||||||||||||||||||||||||||||||||||||||||||||| a bcdefghijklmnopq",
    featuredImageUrl: "/all-the-ways-we-are-together/cover.png",
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: null,
  },
  ["invalid avatar image"]: {
    theme: "dark",
    title: "abc",
    featuredImageUrl: null,
    displayName: "abc",
    accent: "blue",
    address: "abc",
    avatarUrl: "/xxx.png",
  },
  ["Ethereum: The Infinite Garden"]: {
    theme: "dark",
    title: "Ethereum: The Infinite Garden",
    featuredImageUrl: "/infinite-garden/cover.png",
    displayName: "The Infinite Garden",
    accent: "blue",
    address: "ethereumfilm.mirror.xyz",
    avatarUrl: "/infinite-garden/avatar.png",
  },
  ["The Metaverse: 101"]: {
    theme: "light",
    title: "The Metaverse: 101",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/AQyMvh5DVvpWffagXDMlY.png",
    displayName: "Meagan Loyst",
    accent: "blue",
    address: "meagan.mirror.xyz",
    avatarUrl:
      "https://meagan.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F0y6QoLNbqQZvtnHLl1tWD.jpeg%3Fheight%3D400%26width%3D400&w=1920&q=100",
  },
  ["NFTs make the internet ownable"]: {
    theme: "light",
    title: "NFTs make the internet ownable",
    featuredImageUrl: null,
    displayName: "Variant Fund",
    accent: "blue",
    address: "variant.mirror.xyz",
    avatarUrl:
      "https://variant.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FXOVukHaULvp4dsmWbcywK.jpg%3Fheight%3D2500%26width%3D2500&w=1200&q=100",
  },
  ["A Prehistory of DAOs"]: {
    theme: "light",
    title: "A Prehistory of DAOs",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/24b88f3e-9220-4389-934e-95e1c73f7d71.png",
    displayName: "gnosis guild 🪐",
    accent: "blue",
    address: "gnosisguild.mirror.xyz",
    avatarUrl:
      "https://gnosisguild.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FPBuKXa0mqEeKdXAVGDrNu.png%3Fheight%3D2419%26width%3D2419&w=1080&q=100",
  },
  ["The ultimate guide to L2s on Ethereum"]: {
    theme: "dark",
    title: "The ultimate guide to L2s on Ethereum",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/57H-inFA9mITvSw2kfbtM.png",
    displayName: "dcbuilder.eth",
    accent: "blue",
    address: "dcbuilder.mirror.xyz",
    avatarUrl:
      "https://dcbuilder.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fr-mqtMjszyRcqDbIsDI0E.jpeg%3Fheight%3D4000%26width%3D4000&w=1920&q=100",
  },
  ["The Web3 Renaissance: A Golden Age for Content"]: {
    theme: "light",
    title: "The Web3 Renaissance: A Golden Age for Content",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/BsrOnzcS2cAlUVMTkPsba.jpg",
    displayName: "Every",
    accent: "blue",
    address: "every.mirror.xyz",
    avatarUrl:
      "https://every.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FyODcdInU8ukOTi1J2IbQ7.png%3Fheight%3D834%26width%3D834&w=1920&q=100",
  },
  ["DAO Landscape"]: {
    theme: "dark",
    title: "DAO Landscape",
    featuredImageUrl: null,
    displayName: "Coopahtroopa",
    accent: "blue",
    address: "coopahtroopa.mirror.xyz",
    avatarUrl:
      "https://coopahtroopa.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FVbGtXWxF6aptLvc_oZi5y.jpg%3Fheight%3D1280%26width%3D1024&w=1080&q=100",
  },
  ["Once Upon a Time in DAOlin"]: {
    theme: "dark",
    title: "Once Upon a Time in DAOlin",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/zXRoqCBeRHVs1Ul_CMLsx.jpg",
    displayName: "PleasrDAO✨",
    accent: "blue",
    address: "pleasr.mirror.xyz",
    avatarUrl:
      "https://pleasr.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fc83c80be-2bb5-41f5-9fb7-be3936255519.png%3Fheight%3D1080%26width%3D1080&w=1200&q=100",
  },
  ["New Internet logic"]: {
    theme: "light",
    title: "New Internet logic",
    featuredImageUrl: null,
    displayName: "John Palmer",
    accent: "blue",
    address: "j.mirror.xyz",
    avatarUrl:
      "https://j.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Ffa703624-48fa-465d-a897-0397f505e57c.jpg%3Fheight%3D400%26width%3D400&w=1920&q=100",
  },
  ["Memes of Production: DAOs as Financial Flash Mobs and Hyperstructures"]: {
    theme: "light",
    title:
      "Memes of Production: DAOs as Financial Flash Mobs and Hyperstructures",
    featuredImageUrl:
      "https://images.mirror-media.xyz/publication-images/oG0ONRqAf26wq1l3Rfnxm.png?height=1500&width=3000",
    displayName: "Cabin",
    accent: "blue",
    address: "creators.mirror.xyz",
    avatarUrl:
      "https://creators.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FBcuo3ZN1NxnWnCCtmG4Pg.jpeg%3Fheight%3D400%26width%3D400&w=3840&q=100",
  },
  ["The Great Online Game"]: {
    theme: "dark",
    title: "The Great Online Game",
    featuredImageUrl: null,
    displayName: "Not Boring",
    accent: "blue",
    address: "notboring.mirror.xyz",
    avatarUrl:
      "https://notboring.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F448239a6-f0fc-4283-a434-b7703975d23b.png%3Fheight%3D282%26width%3D282&w=1200&q=100",
  },
  ["Culture in Progress: Building On-Chain Social Capital"]: {
    theme: "dark",
    title: "Culture in Progress: Building On-Chain Social Capital",
    featuredImageUrl: null,
    displayName: "Crypto, Culture, & Society Journal",
    accent: "foreground",
    address: "society.mirror.xyz",
    avatarUrl:
      "https://society.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FcU13W2RZWCj5gnL_tuqkK.jpeg%3Fheight%3D400%26width%3D400&w=3840&q=100",
  },
  ["I’m Quitting Web2 (And So Should You)"]: {
    theme: "dark",
    title: "I’m Quitting Web2 (And So Should You)",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/4613648a-bfc6-436c-98f7-c5cb78b911cb.jpeg",
    displayName: "Forefront",
    accent: "blue",
    address: "ff.mirror.xyz",
    avatarUrl:
      "https://ff.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fa29969cc-d425-4c07-947e-624f2787fbea.png%3Fheight%3D200%26width%3D200&w=828&q=100",
  },
  ["How To Build A Headless Band: Architecting Chaos"]: {
    theme: "light",
    title: "How To Build A Headless Band: Architecting Chaos",
    featuredImageUrl:
      "https://images.mirror-media.xyz/publication-images/phjcJnST4xVIdxYlhjZAy.jpg?height=1500&width=3000",
    displayName: "SONGCAMP",
    accent: "blue",
    address: "songcamp.mirror.xyz",
    avatarUrl:
      "https://songcamp.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fokv74pxvSEKgbzUsCrgqz.jpg%3Fheight%3D1000%26width%3D1000&w=750&q=100",
  },
  ["[2022] Guide to Web3 Data: Thinking, Tools, and Teams"]: {
    theme: "dark",
    title: "[2022] Guide to Web3 Data: Thinking, Tools, and Teams",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/WFzOcLmw50oL4LT3j49JW.png",
    displayName: "Andrew Hong",
    accent: "red",
    address: "ath.mirror.xyz",
    avatarUrl:
      "https://ath.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FQAv5VJgcX2jfnK7Lq27SS.jpg%3Fheight%3D400%26width%3D400&w=828&q=100",
  },
  ["Business-Governance Fit"]: {
    theme: "dark",
    title: "Business-Governance Fit",
    featuredImageUrl:
      "https://images.mirror-media.xyz/publication-images/b5fKBlQg2tkoRlsU39TIE.png?height=1200&width=2400",
    displayName: "Station Network",
    accent: "red",
    address: "station.mirror.xyz",
    avatarUrl:
      "https://station.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Ffqz7Qd-tUUO_-dPYl6L_u.jpeg%3Fheight%3D400%26width%3D400&w=828&q=100",
  },
  ["Rethinking “gamification” for DAOs"]: {
    theme: "dark",
    title: "Rethinking “gamification” for DAOs",
    featuredImageUrl: null,
    displayName: "Water & Music",
    accent: "blue",
    address: "waterandmusic.mirror.xyz",
    avatarUrl:
      "https://waterandmusic.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F7af6da94-5e69-44ec-b149-09dfa4c7f418.png%3Fheight%3D348%26width%3D348&w=828&q=100",
  },
  ["The Shape of Power in Crypto (and How I Won the $WRITE Race)"]: {
    theme: "dark",
    title: "The Shape of Power in Crypto (and How I Won the $WRITE Race)",
    featuredImageUrl: null,
    displayName: "Dame.eth",
    accent: "teal",
    address: "dame.mirror.xyz",
    avatarUrl:
      "https://dame.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FFDndFNHcJ9gv9kHglkgWV.png%3Fheight%3D2000%26width%3D2000&w=1200&q=100",
  },
  ["Choosing Optimism"]: {
    theme: "light",
    title: "Choosing Optimism",
    featuredImageUrl:
      "https://images.mirror-media.xyz/publication-images/5QWk7BYhlHZn8AG0nL5Ko.png?height=1500&width=3000",
    displayName: "Graeme",
    accent: "red",
    address: "g.mirror.xyz",
    avatarUrl:
      "https://g.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FvUyNzlzuxuVkBFhRha7z0.jpeg%3Fheight%3D332%26width%3D332&w=828&q=100",
  },
  ["Lens Protocol 🌿"]: {
    theme: "dark",
    title: "Lens Protocol 🌿",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/c-PNtNqa1DPFt3i7ksNtI.png",
    displayName: "Protocol Review",
    accent: "red",
    address: "review.mirror.xyz",
    avatarUrl:
      "https://review.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FexxfnpIakPI_JAV0WtCug.jpeg%3Fheight%3D400%26width%3D400&w=1080&q=100",
  },
  ["Bridge Pass—or how to make L2 bridging fun with NFTs"]: {
    theme: "light",
    title: "Bridge Pass—or how to make L2 bridging fun with NFTs",
    featuredImageUrl:
      "https://images.mirror-media.xyz/publication-images/aO61VajY7mexQ-kTigOsp.png?height=1142&width=2284",
    displayName: "Denis Nazarov",
    accent: "red",
    address: "d.mirror.xyz",
    avatarUrl:
      "https://d.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FebpQtnoqBW7Iofx8UDc03.png%3Fheight%3D2148%26width%3D2116&w=1080&q=100",
  },
  ["Come for the creator, stay for the economy"]: {
    theme: "light",
    title: "Come for the creator, stay for the economy",
    featuredImageUrl: null,
    displayName: "p.mirror.xyz",
    accent: "blue",
    address: "p.mirror.xyz",
    avatarUrl:
      "https://p.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fe7mxDzAML_evZD0vK3Tml.png%3Fheight%3D664%26width%3D698&w=1080&q=100",
  },
  ["Growth Frameworks from Web2 to Web3"]: {
    theme: "light",
    title: "Growth Frameworks from Web2 to Web3",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/4AD-F9a7HkR5e0JsRYuTC.jpg",
    displayName: "mati.h",
    accent: "blue",
    address: "startup.mirror.xyz",
    avatarUrl:
      "https://startup.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F7PBXAaLMB206ca5HxiZB-.png%3Fheight%3D800%26width%3D800&w=828&q=100",
  },
  ["Inking a Smart Contract"]: {
    theme: "light",
    title: "Inking a Smart Contract",
    featuredImageUrl: null,
    displayName: "Crypto Coven",
    accent: "red",
    address: "cryptocoven.mirror.xyz",
    avatarUrl:
      "https://cryptocoven.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FFzcfFbWtsT9RWJ3Fm89kh.png%3Fheight%3D2217%26width%3D2217&w=828&q=100",
  },
  ["Why Dark Forest Matters: A Good Game, not a Crypto Game"]: {
    theme: "light",
    title: "Why Dark Forest Matters: A Good Game, not a Crypto Game",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/WM_pF3fyRjb88NuBnTG1Q.png",
    displayName: "Omar Mezenner",
    accent: "red",
    address: "omarmezenner.mirror.xyz",
    avatarUrl:
      "https://omarmezenner.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fwvu7UCNtV9HcOimh35ogw.jpeg%3Fheight%3D400%26width%3D400&w=3840&q=100",
  },
  ["what are mfers"]: {
    theme: "light",
    title: "what are mfers",
    featuredImageUrl:
      "https://images.mirror-media.xyz/nft/OCJFveKQZ38P2Jjg9eVpK.jpeg",
    displayName: "sartoshi",
    accent: "blue",
    address: "sartoshi.eth",
    avatarUrl:
      "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fhb68H793Zqj8YleyB7rqt.png%3Fheight%3D1000%26width%3D1000&w=828&q=100",
  },
} as const;

export default function Home() {
  return (
    <div
      style={{
        padding: 12,
        gap: 12,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(auto,min(100%,400px)))",
        gridAutoRows: "max-content",
      }}
    >
      {Object.entries(wnfts).map(([key, wnftArgs]) => {
        return <Wnft key={key} {...wnftArgs} />;
      })}
    </div>
  );
}
