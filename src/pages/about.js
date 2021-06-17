import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <div>

      <Header/>
      <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>Such wow. Very React.</p>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`