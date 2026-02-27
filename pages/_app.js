import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
