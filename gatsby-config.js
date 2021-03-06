module.exports = {
  siteMetadata: {
    title: "Гинеколог и УЗИ в Чите. Гинеколог, сопровождение беременности, эндокринолог. - Ваш Доктор. Официальный представитель лаборатории Гемотест в Чите",
    author: "Denis Kuznetsov & Anton Fomin",
    authorUrl: "https://www.sibsite-service.com",
    description: "Мы предлагаем широкий спектр медицинских услуг: сдача всех типов анализов, комплексные обследование, дополнительное мнение экспертов об онкологии, прием гинеколога, ДНК анализы. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите. У нас Вы сможете пройти весь спектр диагностики здоровья и узнать о Ваших болезнях на ранних этапах.",
    siteUrl: "https://www.doctor-chita.ru",
  },
  plugins: [
    'gatsby-plugin-facebook-pixel',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-modal-routing',
    
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "417673439442859",
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148714105-3",
      },
        
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
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
