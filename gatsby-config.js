require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'The Up',
    author: 'Drew Gibson',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description: 'Welcome to my blog, built with Gatsby + Bulma.',
    keywords:
      'Personal Finance, Travel, Credit Cards, Blog, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter',
    instagram: 'https://www.instagram.com/theupsite/',
    github: 'https://github.com/gibdr7',
    facebook: 'https://www.facebook.com/gibsondr',
    linkedin: 'https://www.linkedin.com/in/drewrgibson',
    gatsby: 'https://www.gatsbyjs.org/',
    bulma: 'https://bulma.io/',
    spotify: 'https://open.spotify.com/user/1265978112',
    siteUrl: 'http://localhost:8000',
    email: "gibdr7@gmail.com",
    phone: "904-302-4301",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages',
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle: 'margin: 10px;'
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: process.env.SPOTIFYID,
        clientSecret: process.env.SPOTIFYSECRET,
        refreshToken: process.env.SPOTIFYTOKEN,
        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          // `/dev-404-page`,
          // `/404`,
          // `/404.html`,
          // `/offline-plugin-app-shell-fallback`,
        ],
        useClassNames: true,
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: `theUpsite`,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 5,
        prependToBody: false,
        color: `#2d545e`,
        excludePaths: ["/"],
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
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/main-style.scss'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
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
