/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://rcdesign.com.br",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/studio", "/studio/*", "/api/*", "/privacidade", "/termos"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/servicos"),
    await config.transform(config, "/projetos"),
    await config.transform(config, "/produtos"),
    await config.transform(config, "/sobre"),
    await config.transform(config, "/blog"),
    await config.transform(config, "/contato"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api"],
      },
    ],
  },
};
