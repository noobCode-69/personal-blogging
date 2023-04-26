import Head from "next/head";
import "../styles/globals.css";
import Navbar from "@/components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Sharing my knowledge on frontend developement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/logo.ico"></link>
      </Head>
      <div className="my-app">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
