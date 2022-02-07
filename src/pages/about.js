import * as React from "react"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Wrapper from "../components/wrapper"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
    <Layout>
        <Seo title="About" />
        <Wrapper>
            <section css={profileSectionStyle}>
                <div css={[heroImageWrapperStyle, heroImageFadeUp]}>
                    <div css={heroImageStyle}>
                        <StaticImage
                            src="../images/about-hero.jpg"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                            style={{
                                width: `100%`,
                                height: `auto`,
                            }}
                        />
                    </div>
                </div>
                <div css={[profileInfoStyle, profileInfoFadeUp]}>
                    <h1 css={profileInfoTitleStyle}>
                        I'm Ryohei Inaba, <br />a full-stack engineer... to-be.
                    </h1>
                    <p css={profileInfoParagraphStyle}>
                        Working mainly with Laravel as a back-end engineer who practices
                        passing-grade DDD.
                    </p>

                    <p css={profileInfoParagraphStyle}>
                        These days my time is spent to achieve better comprehension of
                        design and front-end frameworks.
                    </p>

                    <p css={profileInfoParagraphStyle}>
                        Out of office you'll find me taking pictures of random stuff on
                        the streets, or drinking third cup of coffee while reading novels.
                    </p>
                </div>
            </section>

            <section css={techSectionStyle}>
                <h1 css={techTitle}>Techs I work with</h1>
                <div css={techGridStyle}>
                    <div css={techImageStyle}>
                        <div>
                            <StaticImage
                                src="../images/laravel-logo.png"
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                                style={{
                                    width: `100%`,
                                    height: `auto`,
                                }}
                            />
                        </div>
                    </div>
                    <div css={techImageStyle}>
                        <div>
                            <StaticImage
                                src="../images/react-logo.png"
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                                style={{
                                    width: `100%`,
                                    height: `auto`,
                                }}
                            />
                        </div>
                    </div>
                    <div css={techImageStyle}>
                        <div>
                            <StaticImage
                                src="../images/gatsby-logo.png"
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                                style={{
                                    width: `100%`,
                                    height: `auto`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    </Layout>
)


const profileSectionStyle = css`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10rem;
`

const heroImageStyle = css`
  margin-bottom: 1.45rem;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border-radius: 20px;
  max-width: 580px;
`

const heroImageWrapperStyle = css`
  margin: 0 2rem;
  width: 100%;
`

const profileInfoStyle = css`
  margin: 0 2rem;
  width: 100%;
`

const profileInfoTitleStyle = css`
  letter-spacing: -2px;
`

const profileInfoParagraphStyle = css`
  letter-spacing: 1px;
  line-height: 36px;
  opacity: 0.9;
`

const techSectionStyle = css`
  max-width: 1200px;
  margin: 0 2rem;
  padding-bottom: 10rem;
`

const techTitle = css`
    margin-bottom: 4rem; !important
`

const techGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4em;
`

const techImageStyle = css`
  margin-bottom: unset;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border-radius: 20px;
  max-width: 580px;
`

const fadeUpAnime = css`
  @keyframes fadeUpAnime {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    40% {
      opacity: 1;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const heroImageFadeUp = css`
  ${fadeUpAnime}
  animation-name:fadeUpAnime;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
`

const profileInfoFadeUp = css`
  ${fadeUpAnime}
  animation-name:fadeUpAnime;
  animation-duration: 0.6s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  opacity: 0;
`

export default About
