import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ResourcesPage = () => {
  const resources = useStaticQuery(graphql`
    query ResourceFiles {
      allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
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
      <SEO title="Resources" />
      <div className="container">
        <h1>Resources</h1>
        {resources.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <a href={`content/resources/${node.relativePath}`} download>
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ResourcesPage
