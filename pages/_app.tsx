//@ts-nocheck

import "@mb/scss/styles.scss";
import { AuthProvider } from "@mb/providers/AuthProvider";
import SSRProvider from "react-bootstrap/SSRProvider";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
      </Script>
     
      <SSRProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
