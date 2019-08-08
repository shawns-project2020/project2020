import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ArticlePage = () => {
  const articles = useStaticQuery(graphql`
    query ArticleListing {
      allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
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
      <SEO title="Articles" />
      <div className="container">
        <h1>Articles</h1>
        {articles.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <a href={`content/articles/${node.relativePath}`} download>
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ArticlePage
