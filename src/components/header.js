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
            <span css={headerLinksLetterStyle}>Work</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/using-typescript/" css={headerLinksStyle}>
            <span css={headerLinksLetterStyle}>Social</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/using-ssr" css={headerLinksStyle}>
            <span css={headerLinksLetterStyle}>About</span>
          </Link>
        </li>
        <li css={headerListItemStyle}>
          <Link to="/" css={headerSiteTitleStyle}>
            <span css={headerLinksLetterStyle}>Home</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

const header = css`
  ${"" /* background: rgb(60,76,87); */}
  position: fixed;
  width: 100%;
  border-radius: 10px;
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

const headerLinksLetterStyle = css`
    &:hover &:after {
      opacity: 1;
      color: red;
    }
  }
  &:after {
    z-index: 5;
    content: "";
    width: 100%;
    bottom: 0px;
    height: 3px;
    left: 0;
    display: block;
    background: #ffc4ff;
    transform: translate3d(0, 5px, 0);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 1;
    color: red;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
