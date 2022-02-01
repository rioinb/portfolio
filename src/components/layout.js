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
      <div css={wrapperStyle}>
        <main>{children}</main>
        <footer css={footerStyle}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

const wrapperStyle = css`
  background: rgb(211,208,199);
  margin: 0 auto;
  max-width: 960px;
  padding: 6rem 1.0875rem 1.45rem;
`
const footerStyle = css`
  margin-top: 2rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
