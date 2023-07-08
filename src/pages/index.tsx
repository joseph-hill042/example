import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Konrad Curze - Primarch of the Night Lords"
        src={"../images/konrad-curze.jpg"}
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO title={"Home Page"} />;
export default IndexPage;
