module.exports = {
  siteMetadata: {
    title: "Nic's Blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
