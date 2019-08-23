import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>Sorry,</h1>
      <p>It appears we could not find this page.</p>
    </div>
  </Layout>
)

export default NotFoundPage
