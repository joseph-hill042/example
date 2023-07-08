import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO title={"About Me"} />;
export default AboutPage;
