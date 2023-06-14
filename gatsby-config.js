module.exports = {
  siteMetadata: {
    title: `himnapp`,
    siteUrl: `https://vianydev.github.io/himnapp/`,
  },
  pathPrefix: "/himnapp",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Himnapp - Himnario Bautista",
        short_name: "Himnapp",
        description: `Himnapp - Himnario Bautista`,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#CC3945",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [ `/about/`, `/projects/*` ],
      },
    }, 
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout.js"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `himnos`,
        path: `${__dirname}/himnos/`,
      }
    },
    "gatsby-plugin-mdx",
  ],
  
}
