import * as React from 'react';
import {graphql, HeadFC, PageProps} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const isBlogPost = (node: any): boolean => node.sourceInstanceName === "blog";
const BlogPage: React.FC<PageProps> = ({data}) => {
    return (
        <Layout pageTitle={"My Blog Posts"}>
            <ul>
                {
                    // @ts-ignore
                    data.allFile.nodes.filter(isBlogPost).map((node: any) => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`

export const Head: HeadFC = () => <SEO title={"My Blog Posts"} />
export default BlogPage;