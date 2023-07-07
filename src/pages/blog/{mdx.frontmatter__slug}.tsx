import * as React from 'react';
import {graphql, HeadFC, PageProps} from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const BlogPost: React.FC<PageProps> = ({data, children}) => {
    // @ts-ignore
    const {frontmatter}: any = data.mdx;
    return (
        <Layout pageTitle={frontmatter.title}>
            <p>{frontmatter.date}</p>
            {children}
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
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