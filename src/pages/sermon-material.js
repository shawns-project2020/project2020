import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const SermonMaterialPage = () => {
  const sermons = useStaticQuery(graphql`
    query SermonFiles {
      allFile(filter: { sourceInstanceName: { eq: "sermons" } }) {
        edges {
          node {
            id
            relativePath
            prettySize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Sermon Material" />
      <div className="container">
        <h1>Sermon Material</h1>
        {sermons.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <a href={`content/sermons/${node.relativePath}`} download>
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SermonMaterialPage
