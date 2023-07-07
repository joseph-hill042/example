import * as React from 'react';
import {graphql, HeadFC, PageProps} from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const BlogPost: React.FC<PageProps> = ({data, children}) => {
    // @ts-ignore
    const {frontmatter}: any = data.mdx;
    const image: any = getImage(frontmatter.hero_image)
    return (
        <Layout pageTitle={frontmatter.title}>
            <p>Posted: {frontmatter.date}</p>
            <GatsbyImage alt={frontmatter.hero_image_alt} image={image} />
            <p>
                Photo Credit:{" "}
                <a href={frontmatter.hero_image_credit_link}>
                    {frontmatter.hero_image_credit_text}
                </a>
            </p>
            {children}
        </Layout>
    )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`


export const Head: HeadFC = ({data}) => {
    // @ts-ignore
    const {frontmatter} = data.mdx;
    return <SEO title={frontmatter.title}/>;
}
export default BlogPost;