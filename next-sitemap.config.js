/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.basaltyapi.com', // Sitenizin ana URL'si
    generateRobotsTxt: true, // robots.txt dosyasını oluşturmak için
    changefreq: 'daily', // Sayfa değişiklik sıklığı
    priority: 0.7, // Sayfa önceliği
    sitemapSize: 5000, // Her sitemap dosyasındaki maksimum URL sayısı
  };
  