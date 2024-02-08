import { AppProps } from "next/app";

import "../styles/main.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="/assets/images/logo-nawara-pico.png" />
      <title>Nawara App
        
      </title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
