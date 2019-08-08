import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <h1>Project 2020</h1>
      <h1>Enlightening the Eye</h1>
    </section>
    <section className="container">
      <p>
        Description
      </p>
      <p>
        Opportunity to publish with the year 2020
      </p>
      <p>
        Classroom use only because of photos were pulled from various sources
      </p>
      <p>
        Please pardon errors
      </p>
    </section>
  </Layout>
)

export default IndexPage
