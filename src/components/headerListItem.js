import * as React from "react"

import { css } from "@emotion/react"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderListItem = ({ link, title }) => {

    return (
        <li css={headerListItemStyle}>
            <Link to={"/" + link} css={headerLinksStyle}>
                <span id="random">{title}</span>
            </Link>
        </li>
    )
}

const headerListItemStyle = css`
  margin: unset;
  list-style: none;
  @media (max-width: 850px) {
    justify-content: center;
    display: flex;
  }
`

const headerLinksStyle = css`
  display: flex;
  text-align: center;
  text-decoration: none;
  padding: 1.5em 2em;
  font-size: 1.1em;
  @media (max-width: 850px) {
      padding: 1.5rem 0.5rem;
  }
  span {
    position: relative;
  }
  span::after {
      position: absolute;
      opacity: 0;
      z-index: 5;
      content: "";
      width: 100%;
      bottom: -10px;
      height: 5px;
      left: 0;
      display: block;
      background: #95cd75;
      background: #DCAB25;

      transform: translate3d(0, 5px, 0);
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover span {
    &::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(1deg);
    }
  }
`

HeaderListItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default HeaderListItem

