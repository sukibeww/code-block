module.exports = {
  siteMetadata: {
    title: `Code:Block`,
    introduction: `Hi! My name is Suki, a web developer based in Melbourne, Australia. The purpose of this blog is just to document my journey as a developer and interests. All of my post will be my opinion or insight, so... take everything I wrote with a grain of salt.`,
    description: `This is my personal blog, This blog will be about all of the things that I find interesting and serve as my creative outlet. I hope this blog can be educational or provide some sort of insight.`,
    author: `suki_aliong`,
    siteUrl: `https://cd-block.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/codeblock-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
