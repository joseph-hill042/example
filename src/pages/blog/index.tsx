import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const BlogPage: React.FC<PageProps> = ({ data }) => {
  // @ts-ignore
  const { nodes }: any = data.allMdx;
  return (
    <Layout pageTitle={"My Blog Posts"}>
      <ul>
        {nodes.map((node: any) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head: HeadFC = () => <SEO title={"My Blog Posts"} />;
export default BlogPage;
