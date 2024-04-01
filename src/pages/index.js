import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>My Thoughts</h1>
      <h4>{data.allMarkdownRemark ? data.allMarkdownRemark.totalCount : 0}</h4>
      {data.allMarkdownRemark &&
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
`;