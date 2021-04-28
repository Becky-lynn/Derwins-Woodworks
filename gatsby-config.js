require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Derwin's Woodworks",
    siteUrl: "https://fervent-poincare-850baa.netlify.app",
    titleTemplate: "%s - Derwin's Woodworks",
    description:
      "Our Arkansas cutting boards are amazing!  They are made with different types of wood to give them a unique look.",
     url: "https://fervent-poincare-850baa.netlify.app",  
    image: "/images/fredderwin.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@becky9468",
  },

  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WMKSSGF4CH",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-fontawesome-css",
    
  ],
};
