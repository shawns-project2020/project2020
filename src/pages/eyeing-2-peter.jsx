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

  const pathToFiles = "content/bible-classes/eyeing-2nd-peter/"

  const overview = results.allFile.edges
    .filter(({ node }) => node.relativePath.includes("Overview"))
    .map(({ node }) => {
      const regex = /([\d]*)[A-Z]?\s(.*)\.doc/
      const matches = node.relativePath.match(regex)
      return {
        href: `${pathToFiles}${node.relativePath}`,
        name: matches[2],
        id: node.id,
      }
    })
  const powerPointData = results.allFile.edges
    .filter(({ node }) => node.relativePath.includes(".ppt"))
    .map(({ node }) => {
      const regex = /([\d]*)[A-Z]?\s(.*)\.(pptx|ppt)/
      const matches = node.relativePath.match(regex)
      return {
        href: `${pathToFiles}${node.relativePath}`,
        number: parseInt(matches[1]),
        name: matches[2],
        id: node.id,
      }
    })
    .sort((a, b) => {
      return a.number - b.number
    })

  return (
    <Layout>
      <SEO title="Eyeing 2 Peter"></SEO>
      <div className="container">
        <h1>Eyeing 2 Peter</h1>
        <h2 style={{ fontWeight: 200 }}>Overview</h2>
        <DownloadItem {...overview[0]}></DownloadItem>
        <h2 style={{ fontWeight: 200 }}>PowerPoints</h2>
        {powerPointData.map(data => (
          <DownloadItem key={data.id} {...data}></DownloadItem>
        ))}
      </div>
    </Layout>
  )
}
