import '@/assets/scss/main.scss'
import { storeWrapper } from "../store";
import type { AppProps } from 'next/app'

//export default function App({ Component, pageProps }: AppProps) {
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(App);
