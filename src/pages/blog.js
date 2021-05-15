import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    //const { data, navigate, location } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMdx.edges
    // const localSearchBlog = data.localSearchBlog

    return (
      <div>
 <SEO title="All posts" />
        <Bio />
      
        <Link to="/">
        </Link>
      </div>
       
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
