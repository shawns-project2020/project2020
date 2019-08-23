import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import DownloadItem from "../components/DownloadItem/DownloadItem"
import SearchBar from "../components/SearchBar/SearchBar"

const ArticlePage = () => {
  const results = useStaticQuery(graphql`
    query ArticleListing {
      allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        edges {
          node {
            id
            relativePath
          }
        }
      }
    }
  `)

  const [searchValue, setSearchValue] = useState("")

  const allArticles = results.allFile.edges
    .map(({ node }) => {
      const regex = /A([\d]*)[A-Z]?\s(.*)by(.*)\.(docx|doc)/
      const matches = node.relativePath.match(regex)
      const articleDataItem = {
        href: `content/articles/${node.relativePath}`,
        number: parseInt(matches[1]),
        name: matches[2],
        author: matches[3],
        id: node.id,
      }
      return articleDataItem
    })
    .sort((a, b) => {
      return a.number - b.number
    })

  const articles = allArticles.filter(r =>
    r.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <h1>Articles</h1>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Search articles"
        ></SearchBar>
        <h2 style={{ fontWeight: 200 }}>Files</h2>
        {articles.map(article => (
          <DownloadItem key={article.id} {...article}></DownloadItem>
        ))}
      </div>
    </Layout>
  )
}

export default ArticlePage
