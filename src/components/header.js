import * as React from "react"

import { css } from "@emotion/react"

import PropTypes from "prop-types"

import HeaderLinkItem from "./headerListItem"

const Header = () => (
    <header css={header}>
        <div css={headerInnerStyle}>
            <ul css={headerListStyle}>
                <HeaderLinkItem title="Home" link="" />
                <HeaderLinkItem title="About" link="about" />
            </ul>
        </div>
    </header>
)

const header = css`
    position: fixed;
    width: 100%;
    margin: 0 auto;
    background-color: rgb(211,208,199);
    z-index: 1000;
`

const headerInnerStyle = css`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`

const headerListStyle = css`
  margin: 0 auto 0 1.0875rem;
  max-width: 90%;
  padding: unset;
  display: flex;
  justify-content: start;
  list-style-type: none;
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
