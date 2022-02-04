/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Header from "./header"
import Wrapper from "./wrapper"

import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>

            <footer css={footerStyle}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </>
    )
}

const footerStyle = css`
  margin: 2rem auto;
  text-align: center;
`

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
