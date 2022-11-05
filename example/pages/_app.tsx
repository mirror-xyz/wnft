import type { AppProps } from "next/app";

import "../css/reset.css";
import "../css/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
