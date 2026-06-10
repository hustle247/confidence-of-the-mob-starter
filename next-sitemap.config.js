/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.confidenceofthemob.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // small site — single sitemap.xml, no index wrapper
  exclude: ['/privacy', '/404', '/500', '/book/clip/*', '/success'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // Per-route priority/changefreq overrides
    const overrides = {
      '/':         { priority: 1.0, changefreq: 'weekly' },
      '/buy-book': { priority: 0.9, changefreq: 'weekly' },
      '/podcast':  { priority: 0.9, changefreq: 'weekly' },
      '/events':   { priority: 0.9, changefreq: 'weekly' },
      '/ask-fred': { priority: 0.6 },
      '/contact':  { priority: 0.5 },
      '/social':   { priority: 0.5 },
      '/media-kit':{ priority: 0.6 },
    };
    const o = overrides[path] || {};
    return {
      loc: path,
      changefreq: o.changefreq || config.changefreq,
      priority: o.priority ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      // Allow all crawlers
      { userAgent: '*', allow: '/' },
      // Explicitly allow AI crawlers for LLM visibility
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    additionalSitemaps: [],
  },
};
