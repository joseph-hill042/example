import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const container: { margin: string; maxWidth: string; fontFamily: string } = {
  margin: "auto",
  maxWidth: "500px",
  fontFamily: "sans-serif",
};

const heading: { color: string } = {
  color: "rebeccapurple",
};

const navLinks: {
  display: string;
  listStyleType: string;
  paddingLeft: string;
} = {
  display: "flex",
  listStyleType: "none",
  paddingLeft: "0",
};

const navLinkItem: { paddingRight: string } = {
  paddingRight: "2rem",
};

const navLinkText: { color: string } = {
  color: "black",
};

const siteTitle: {
  fontSize: string;
  color: string;
  fontWeight: number;
  margin: string;
} = {
  fontSize: "3rem",
  color: "gray",
  fontWeight: 700,
  margin: "3rem 0",
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div style={container}>
      <header style={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul style={navLinks}>
          <li style={navLinkItem}>
            <Link to="/" style={navLinkText}>
              Home
            </Link>
          </li>
          <li style={navLinkItem}>
            <Link to="/about" style={navLinkText}>
              About
            </Link>
          </li>
          <li style={navLinkItem}>
            <Link to="/blog" style={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 style={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
