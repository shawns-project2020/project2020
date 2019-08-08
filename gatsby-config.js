module.exports = {
  siteMetadata: {
    title: `Project 20/20`,
    description: `Seeing the world clear with 20/20 vision.`,
    author: `shawns.project2020@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/static/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `darkness-to-light`,
        path: `${__dirname}/static/content/bible-classes/darkness-to-light`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `come-and-see`,
        path: `${__dirname}/static/content/bible-classes/come-and-see`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `eyeing-2nd-peter`,
        path: `${__dirname}/static/content/bible-classes/eyeing-2nd-peter`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sermons`,
        path: `${__dirname}/static/content/sermons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/static/content/resources`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project 2020`,
        short_name: `Project 2020`,
        start_url: `/`,
        background_color: `#0a0abc`,
        theme_color: `#0a0abc`,
        display: `minimal-ui`,
        icon: `src/images/project2020-with-background.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
