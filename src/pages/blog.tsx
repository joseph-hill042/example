import * as React from 'react';
import {graphql, HeadFC, PageProps} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage: React.FC<PageProps> = ({data}) => {
    return (
        <Layout pageTitle={"My Blog Posts"}>
            <ul>
                {
                    //@ts-ignore
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`


export const Head: HeadFC = () => <SEO title={"My Blog Posts"} />
export default BlogPage;