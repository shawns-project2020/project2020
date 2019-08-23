import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import DownloadItem from "../components/DownloadItem/DownloadItem"
import SearchBar from "../components/SearchBar/SearchBar"

const PreacherMaterialPage = () => {
  const results = useStaticQuery(graphql`
    query SermonFiles {
      allFile(filter: { sourceInstanceName: { eq: "sermons" } }) {
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

  const allPreacherMaterials = results.allFile.edges.map(({ node }) => {
    return {
      name: node.relativePath,
      href: `content/resources/${node.relativePath}`,
      id: node.id,
    }
  })

  const preacherMaterial = allPreacherMaterials.filter(r =>
    r.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Layout>
      <SEO title="Preacher Material" />
      <div className="container">
        <h1>Preacher Material</h1>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Search preacher material"
        ></SearchBar>
        <h2 style={{ fontWeight: 200 }}>Files</h2>
        {preacherMaterial.map(material => (
          <DownloadItem key={material.id} {...material}></DownloadItem>
        ))}
      </div>
    </Layout>
  )
}

export default PreacherMaterialPage
