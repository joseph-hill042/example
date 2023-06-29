import * as React from 'react'
import {Link} from 'gatsby'

type LayoutProps  = {
    pageTitle: string
    children: React.ReactNode
}

const container: {margin: string, maxWidth: string, fontFamily: string} = {
    margin: "auto",
    maxWidth: "500px",
    fontFamily: "sans-serif"
}

const heading: {color: string} = {
    color: "rebeccapurple"
}

const navLinks: {display: string, listStyleType: string, paddingLeft: string} = {
    display: "flex",
    listStyleType: "none",
    paddingLeft: "0"
}

const navLinkItem: {paddingRight: string} = {
    paddingRight: "2rem"
}

const navLinkText: {color: string} = {
    color: "black"
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div style={container}>
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
                </ul>
            </nav>
            <main>
                <h1 style={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout