import React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IsLoading } from "../utils/isLoading"

function IndexPage( props: PageProps) {

  const siteTitle = "Gatsby Starter Personal Website"

  return (
    <Layout>
    <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
     
      <div className="grid-col-2">
          <img className="shopkeeper" src="../shopkeeperdraft.jpg"></img>
        </div>
      <div>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
      <Link to="/blog/">
        <button >Go to Blog</button>
      </Link>
      </div>

    
    </Layout>
   
  )
}

export default IsLoading(IndexPage, "feeding cats...");
