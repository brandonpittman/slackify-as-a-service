import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Slackdown</title>
        <meta
          name="description"
          content="Slackify your Markdown so shit looks good."
        />
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
