import { Head, Html, Main, NextScript } from "next/document";

const CustomDocument = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
