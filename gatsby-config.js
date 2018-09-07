module.exports = {
  siteMetadata: {
    description: 'trillo - Your all-in-one booking app',
    keywords: 'travel booking, cheap flights, vacation booking, trillo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
  ],
}
