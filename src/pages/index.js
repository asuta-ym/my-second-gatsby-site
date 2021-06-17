import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home({data}) {
  console.log(data)
  return (
    <div>
      <Header/>
      <Layout title="Hello World!">
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br/>
        <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{color: `#bbb`}}>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark
    (sort: { fields: [frontmatter___date], order: DESC })
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`