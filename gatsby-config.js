module.exports = {
  siteMetadata: {
    title: "Ваш + Доктор | Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, ДНК.",
    author: "Denis Kuznetsov",
    description: "Медицинские обследования в Чите, анализы любого вида, УЗИ."
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
