// CSS
import "../styles/reset.scss"

// types
import type { AppProps } from 'next/app'

// next-redux-wrapper
import { wrapper } from "../store"

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);