import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Global SEO & Open Graph defaults */}
        <meta property="og:site_name" content="Confidence of The Mob" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Confidence of The Mob" />
        <meta property="og:description" content="I thought my grandfather was just an accountant. Then I opened The Box. The true story of IRS Agent Fred Pastore." />
        <meta property="og:image" content="https://confidenceofthemob.com/images/book_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://confidenceofthemob.com" />

        {/* Global JSON-LD Schema: Book & Author */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Book",
                "name": "Confidence of The Mob",
                "author": {
                  "@type": "Person",
                  "name": "Eddy Manfred Inserra III"
                },
                "image": "https://confidenceofthemob.com/images/book_no_bg.png",
                "description": "The never-before-seen true story of IRS Agent Fred Pastore, compiled from declassified government files."
              },
              {
                "@type": "Person",
                "name": "Fred Pastore",
                "jobTitle": "Supervisory Criminal Investigator (Tax Fraud)",
                "worksFor": {
                  "@type": "GovernmentOrganization",
                  "name": "Internal Revenue Service"
                }
              }
            ]
          }
        `}} />
      </Head>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1268456198274255');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Component {...pageProps} />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1268456198274255&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <Analytics />
    </Layout>
  );
}

export default MyApp;
