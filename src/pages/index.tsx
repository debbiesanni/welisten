import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>welisten</title>
        <meta name="Home page" content="Welcome to welisten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h1>Body</h1>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Home;
