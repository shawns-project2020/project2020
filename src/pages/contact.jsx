import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <h1>Contact Us</h1>
        <p>
          <span>Please feel free to contact us at </span>
          <a href="mailto:shawns.project2020@gmail.com">
            shawns.project2020@gmail.com
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
