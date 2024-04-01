import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTItle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>My Thoughts</h1>
      <h4>{data.allMarkdownRemark ? data.allMarkdownRemark.totalCount : 0}</h4>
      {data.allMarkdownRemark &&
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTItle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTItle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;