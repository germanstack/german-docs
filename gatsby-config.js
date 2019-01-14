module.exports = {
    siteMetadata: {
        title: `Panda Eats Alot`,
    },
    plugins: [
        //file system plugin
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/pages/`,
            },
        },
        //transfromer plugin
        `gatsby-transformer-remark`,
        //css-in-js plugin
        `gatsby-plugin-emotion`,
        //css react typography
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        //PWA plugins
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "GatsbyJS",
              short_name: "GatsbyJS",
              start_url: "/",
              background_color: "#6b37bf",
              theme_color: "#6b37bf",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
             // This path is relative to the root of the site.
            },
          },
          `gatsby-plugin-offline`,
          `gatsby-plugin-react-helmet`
    ]
}