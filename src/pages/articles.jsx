import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import DownloadItem from "../components/DownloadItem/DownloadItem"

const ArticlePage = () => {
  const results = useStaticQuery(graphql`
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

  console.log(results)

  const articles = results.allFile.edges
    .map(({ node }) => {
      // const regex = /[A-Z0-9]*\s(.*)by(.*)\.(docx|doc)/
      const regex = /A([\d]*)[A-Z]?\s(.*)by(.*)\.(docx|doc)/
      const matches = node.relativePath.match(regex)
      const articleDataItem = {
        href: `content/articles/${node.relativePath}`,
        number: parseInt(matches[1]),
        name: matches[2],
        author: matches[3],
        size: node.prettySize,
        id: node.id,
      }
      return articleDataItem
    })
    .sort((a, b) => {
      return a.number - b.number
    })

  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <h1>Articles</h1>
        {articles.map(article => (
          <DownloadItem key={article.id} {...article}></DownloadItem>
        ))}
      </div>
    </Layout>
  )
}

export default ArticlePage
