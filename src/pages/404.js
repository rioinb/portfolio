import * as React from "react"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Wrapper from "../components/wrapper"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <Layout>
        <Wrapper>
            <Seo title="404: Not found" />
            <div css={outer}>
                <div css={notFoundStyle}>
                    <h1>404: Not Found</h1>
                    <p>
                        You've come to the wrong place. <br />
                        <Link to="/">
                            Go back.
                        </Link>
                    </p>
                </div>
            </div>
        </Wrapper>
    </Layout>
)

const outer = css`
    height: 100%;
    width: 100%;
    margin: 8rem auto 16rem;
`

const notFoundStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    h1, p {
        text-align: center;
    }
`

export default NotFoundPage
