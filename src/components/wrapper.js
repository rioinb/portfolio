import * as React from "react"
import PropTypes from "prop-types"

import { css } from "@emotion/react"

import "./layout.css"

const Wrapper = ({ children }) => {
    return (
        <>
            <div css={wrapperStyle}>
                <main>{children}</main>
            </div>
        </>
    )

}

const wrapperStyle = css`
  background: rgb(211,208,199);
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem 1.0875rem 0 1.0875rem;
`

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
