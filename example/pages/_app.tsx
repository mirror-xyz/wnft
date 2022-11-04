import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {test} from 'wnft'
console.log(test)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
