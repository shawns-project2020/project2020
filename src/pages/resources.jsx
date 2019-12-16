import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import DownloadItem from "../components/DownloadItem/DownloadItem"
import SearchBar from "../components/SearchBar/SearchBar"

const ResourcesPage = () => {
  const results = useStaticQuery(graphql`
    query ResourceFiles {
      allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
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

  const allResources = results.allFile.edges.map(({ node }) => {
    return {
      name: node.relativePath,
      href: `content/resources/${node.relativePath}`,
      id: node.id,
    }
  })

  const resources = allResources
    .filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()))
    .sort()

  return (
    <Layout>
      <SEO title="Resources" />
      <div className="container">
        <h1>Resources</h1>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Search resources"
        ></SearchBar>
        <h2 style={{ fontWeight: 200 }}>Files</h2>
        {resources.map(resource => (
          <DownloadItem key={resource.id} {...resource}></DownloadItem>
        ))}
      </div>
    </Layout>
  )
}

export default ResourcesPage
