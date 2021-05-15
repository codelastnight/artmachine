import React from "react"
import { Link } from "gatsby"
import '../scss/index.scss'

class Layout extends React.Component {
    render() {
      const { location, title, children } = this.props
      const rootPath = `${__PATH_PREFIX__}/`
      const blogPath = `${__PATH_PREFIX__}/blog/`
      let header

      return (
        <main>
            <header>{header}</header>
            <div class="content">{children}</div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </main>
      )
    }
  }
  
  export default Layout
