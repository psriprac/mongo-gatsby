require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.dev-patrick.com`,
    title: `Patrick Sriprachandr`,
    description: `Patrick is an IT professional, Web Developer, and Gamer.`,
  },
  plugins: [
    /*
    * Gatsby's data processing layer begins with “source” plugins. Here we
    * setup the site to pull data from the "documents" collection in a local
    * MongoDB instance
    */
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.erxdh.mongodb.net/?retryWrites=true&w=majority`,
        dbName: `sample_restaurants`,
        collection: [`neighborhoods`, `restaurants`]
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
