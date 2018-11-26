module.exports = {
  siteMetadata: {
    title: 'The Up',
    author: 'Drew Gibson',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description: 'Welcome to my blog, built with Gatsby + Bulma.',
    keywords:
      'Personal Finance, Travel, Credit Cards, Blog, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter',
    instagram: 'https://www.instagram.com/drew___gibson/',
    github: 'https://github.com/gibdr7',
    facebook: 'https://www.facebook.com/gibsondr',
    gatsby: 'https://www.gatsbyjs.org/',
    bulma: 'https://bulma.io/',
    siteUrl: 'https://www.example.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 5,
        prependToBody: false,
        color: `#663399`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
        orientation: 'portrait',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '222611211',
        anonymize: true,
      },
    },
  ],
}
