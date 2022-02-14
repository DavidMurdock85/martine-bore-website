import "@mb/styles/_app.scss";

import { AuthProvider } from "@mb/providers/AuthProvider";
import SSRProvider from "react-bootstrap/SSRProvider";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <SSRProvider><AuthProvider><Component {...pageProps} /></AuthProvider></SSRProvider>
}

export default MyApp
