import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    description: `An example site using Gatsby`,
    twitterUsername: `@jhill`,
    image: `./src/images/icon.png`,
    siteUrl: `https://examplemain.gatsbyjs.io/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "04MTsw8EUCKJS6gXIwmmpum2VlxWyCYnczso8OTQfCg",
      "spaceId": "nzrnovga5lru"
    }

    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "blog",
            "path": `${__dirname}/blog/`
        }
    }
  ]
};

export default config;
