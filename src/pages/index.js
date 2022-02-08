import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Wrapper from "../components/wrapper"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Wrapper>
            <section css={[indexInfoSection, fadeIn]}>
                <div css={IndexInfoStyle}>
                    <h1 css={IndexInfoTitleStyle}>
                        Web <br />
                        Developer
                    </h1>
                    <h2 css={IndexInfoDescriptionStyle}>
                        A back-end engineer at Locust.tech. <br />
                        Creating a thing you have always wanted, has yet to exist.
                    </h2>
                </div>
                <div css={IndexHeroImageStyle}>
                    <StaticImage
                        src="../images/index-hero.jpg"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                        style={{
                            height: `auto`,
                            width: `100%`,
                            maxWidth: `540`,
                            overflow: `hidden`,
                        }}
                    />
                </div>
            </section>
        </Wrapper>
    </Layout>
)

const indexInfoSection = css`
    display: flex;
    margin-bottom: 8rem;
`

const IndexInfoStyle = css`
    flex: 1;
    margin: 0 2rem;

`

const IndexInfoTitleStyle = css`
    font-size: 80px;
`

const IndexInfoDescriptionStyle = css`
    font-size: 29px;
`

const IndexHeroImageStyle = css`
    ${'' /* width: fit-content; */}
    height: fit-content;
    flex: 1;
    margin: 0 2rem;
    border-radius: 20px;
    overflow: hidden;
`

const fadeIn = css`

	animation-name:fadeInAnime;
	animation-duration: 1.5s;
	animation-fill-mode:forwards;


@keyframes fadeInAnime{
  from {
	opacity: 0;
  }

  to {
	opacity:1;
  }
}
`


export default IndexPage
