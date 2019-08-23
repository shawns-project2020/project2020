import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import DownloadItem from "../components/DownloadItem/DownloadItem"

export default () => {
  const results = useStaticQuery(graphql`
    query EyeingSecondPeterFiles {
      allFile(filter: { sourceInstanceName: { eq: "eyeing-2nd-peter" } }) {
        edges {
          node {
            id
            relativePath
            name
          }
        }
      }
    }
  `)

  const pathToFiles = "content/bible-classes/darkness-to-light/"

  const fileData = results.allFile.edges
    .map(({ node }) => {
      return {
        href: `${pathToFiles}${node.relativePath}`,
        name: node.name,
        id: node.id,
      }
    })
    .filter(d => d.name.includes("delete-me") === false)

  return (
    <Layout>
      <SEO title="Eyeing 2 Peter"></SEO>
      <div className="container">
        <h1>Eyeing 2 Peter</h1>
        {fileData.length === 0 ? (
          <span>Coming soon...</span>
        ) : (
          fileData.map(data => (
            <DownloadItem key={data.id} {...data}></DownloadItem>
          ))
        )}
      </div>
    </Layout>
  )
}
