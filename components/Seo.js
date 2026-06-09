import Head from 'next/head';
import { SITE, DEFAULT_OG_IMAGE } from '../lib/seo';

export default function Seo({ meta }) {
  if (!meta) return null;

  const canonical = meta.path === "/" ? `${SITE}/` : `${SITE}${meta.path}`;
  const ogTitle = meta.ogTitle ?? meta.title;
  const ogDesc = meta.ogDescription ?? meta.description;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      {meta.noindex && <meta name="robots" content="noindex, follow" />}
      
      <meta property="og:site_name" content="Confidence of The Mob" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
