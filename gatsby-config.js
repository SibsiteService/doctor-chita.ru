module.exports = {
  siteMetadata: {
    title: "Ваш + Доктор | Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, ДНК. Где сдать аналищы быстро в Чите?",
    author: "Denis Kuznetsov",
    description: " Медицинский центр - Ваш + Доктор в Чите является официальным представителем лабораторий Гемотест в городе Чита. Здесь Вы можете пройти медицинские обследования, сдать анализы, сделать УЗИ."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
