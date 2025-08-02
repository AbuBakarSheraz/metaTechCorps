/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://metatechcorps.com', // Replace with your actual domain
  generateRobotsTxt: true, // (optional) Generates robots.txt as well
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
//   exclude: ['/private-page'], 
  // optional: exclude pages
};
