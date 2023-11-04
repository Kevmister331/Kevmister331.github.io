/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "sxc0g4eohoc1",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "5QtPUxhr24NeOC1C6_UN-FDMNzHiHa9uox3cvT_QjsE",
      },
    },
    `gatsby-plugin-image`,
  ],
}