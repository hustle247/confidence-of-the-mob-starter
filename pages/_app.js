import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { Analytics } from "@vercel/analytics/next";
import { RETAILERS } from "../lib/retailers";
import { Libre_Franklin, Source_Serif_4, Special_Elite } from 'next/font/google';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  display: 'swap',
  variable: '--font-display',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-body',
});

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-type',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${libreFranklin.variable} ${sourceSerif4.variable} ${specialElite.variable} font-body text-text bg-ink`}>
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        


        {/* Global JSON-LD Schema: Book & Author */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Book",
                "name": "Confidence of The Mob",
                "author": {
                  "@type": "Person",
                  "name": "Eddy Manfred Inserra III"
                },
                "image": "https://confidenceofthemob.com/images/book_no_bg_og.jpg",
                "description": "The never-before-seen true story of IRS Agent Fred Pastore, compiled from declassified government files.",
                "offers": RETAILERS.filter(r => r.verified).map(r => ({
                  "@type": "Offer",
                  "url": r.url,
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "USD",
                  "price": "16.99",
                  "seller": { "@type": "Organization", "name": r.name }
                }))
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
          })}} />
      </Head>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M63SWN9QMY" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M63SWN9QMY');
        `}
      </Script>
      {/* Facebook Pixel */}
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
    </div>
  );
}

export default MyApp;
