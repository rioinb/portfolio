import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Wrapper from "../components/wrapper"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          {/* <Link to="/page-2/">About</Link> <br />
          <Link to="/using-typescript/">Work</Link> <br />
          <Link to="/using-ssr">Social</Link> <br /> */}
          {/* <Link to="/using-dsg">Go to "Using DSG"</Link> */}
        </p>
    </Wrapper>
  </Layout>
)




export default IndexPage
