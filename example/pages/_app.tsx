import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {test, satori} from 'wnft'
console.log(satori, test)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
