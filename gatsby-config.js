module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `2065b1d870444ca6908b46920f79182c`,
        clientSecret: `ac63f5077fd84f78a9ead889b0c9bef0`, // Don't add to public repository
        refreshToken: `BQCBYNgWVpyN-1cJhLfE2q-ZGEhpclKyXY2axL5-W1m-IqAS96NPAU8mVlc2wKUzzzw-l9gIuMy9bFg34dYPNxBL63GkmexFj5so330cdNsYNN0ZepT5pS7p6ywKrrBzBg6pjJejG7EiD8G49aaL29cKGqbRd6WuRWWuLpjBbtcLdU1Hgm_O4ho`,

        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
