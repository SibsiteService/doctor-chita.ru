module.exports = {
  siteMetadata: {
    title: "Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, эндокринолог. - Ваш Доктор. Официальный представитель лаборатории Гемотест в Чите",
    author: "Denis Kuznetsov",
    authorUrl: "https://www.sibsite-service.com",
    description: "Мы предлагаем широкий спектр медицинских услуг: сдача всех типов анализов, комплексные обследование, дополнительное мнение экспертов об онкологии, прием гинеколога, ДНК анализы. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите. У нас Вы сможете пройти весь спектр диагностики здоровья и узнать о Ваших болезнях на ранних этапах.",
    siteUrl: "https://www.doctor-chita.ru",
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NSNGV84",
      },
      
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.doctor-chita.ru',
        sitemap: 'https://www.doctor-chita.ru/sitemap.xml',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
