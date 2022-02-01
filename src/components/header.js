import * as React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header css={header}>
    <div css={headerInnerStyle}>
      <ul css={headerListStyle}>
        <li css={headerListItemStyle}>
          <Link to="/page-2/" css={headerLinksStyleFirst}>
            <span>Work</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/using-typescript/" css={headerLinksStyle}>
            <span>Social</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/using-ssr" css={headerLinksStyle}>
            <span>About</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/" css={headerSiteTitleStyle}>
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

const header = css`
  position: fixed;
  width: 100%;
  background-color: rgb(211,208,199);
    z-index: 1000;
`

const headerInnerStyle = css`
  margin: unset;
  position: relative;
`

const headerListStyle = css`
  margin: 0 auto;
  max-width: 90%;
  padding: unset;
  display: flex;
  display: flex;
  justify-content: start;
  alignitems: center;
  list-style-type: none;
`

const headerListItemStyle = css`
  margin: 0 0 0 1rem;
`
const headerLinksStyle = css`
  display: flex;
  text-align: center;
  text-decoration: none;
  padding: 1.5em 2em;
  span::after {
      opacity: 0;
      z-index: 5;
      content: "";
      width: 100%;
      bottom: 0px;
      height: 3px;
      left: 0;
      display: block;
      background: rgb(60, 76, 87);
      transform: translate3d(0, 5px, 0);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover span {
    &::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1);
    }
  }
`
const headerLinksStyleFirst = css`
  ${headerLinksStyle}
  padding-left: unset;
`

const headerSiteTitleStyle = css`
  ${headerLinksStyle}
  display: block;
  position: absolute;
  left: 50%;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
