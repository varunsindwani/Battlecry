module.exports = {
  siteMetadata: {
    title: `Battlecry Starter`,
    description: `A batteries included starter`,
    author: `Varun Sindwani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `battlecry-starter`,
        short_name: `battlecry`,
        start_url: `/`,
        background_color: `#6c63ff`,
        theme_color: `#6c63ff`,
        display: `minimal-ui`,
        icon: `src/assets/icons/hammer.png`,
      }, 
    },
    `gatsby-plugin-styled-components`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        purgeOnly : ['src/css/style.css'],
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
