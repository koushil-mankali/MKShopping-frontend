import Head from "next/head";

import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MK Shopping</title>
        <meta name="description" content="MKShopping an online ecommerce application" />
        <link rel="icon" href="/icons/shopping.png" />
        <meta
          name="description"
          content="MKShopping an online ecommerce application"
        />
        <meta
          name="keywords"
          content="ecommerce app in react js, react js, ecommerce, mern stack, nodejs, mongodb, epxress js"
        />
        <meta property="og:type" content="Ecommerce application" />
        <meta property="og:title" content="MKShopping Ecommerce" />
        <meta
          property="og:description"
          content="MKShopping an online ecommerce application"
        />
        <meta property="og:image" content="/icons/shopping.png" />
        <meta property="og:site_name" content="MKShopping Ecommerce" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="eng" />
        <meta name="next-head-count" content="18" />
      </Head>
      <Header />
    </div>
  );
}
