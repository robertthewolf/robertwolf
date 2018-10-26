module.exports = {
  siteMetadata: {
    title: 'Robert Wolf: Designer & Developer',
    author: 'Robert Wolf',
    description: 'Sharp Design, Blazing fast website. Robert Wolf is a Multimedia Designer looking for intership in spring 2019.',
    siteUrl: 'https://robertwolf.cz/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    //header info
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    

    //source: prismic.io
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "robertwolf",
        accessToken: "MC5XN3Z5T0JJQUFDZ0FVdGdw.77-9cgEH77-977-9ZO-_vUU1XXRg77-9He-_ve-_vVoP77-977-9Wu-_vQlm77-977-977-977-977-977-977-9",
        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {
            // Your HTML serializer
          }
        )
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,


    //styling: emotion
    `gatsby-plugin-emotion`,

    // transition
    'gatsby-plugin-page-transitions',

    //utilities
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
