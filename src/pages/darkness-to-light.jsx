import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import DownloadItem from "../components/DownloadItem/DownloadItem"

export default () => {
  const results = useStaticQuery(graphql`
    query DarknessToLightBibleClassMaterialFiles {
      allFile(filter: { sourceInstanceName: { eq: "darkness-to-light" } }) {
        edges {
          node {
            id
            relativePath
            extension
            name
          }
        }
      }
    }
  `)

  const pathToFiles = "content/bible-classes/darkness-to-light/"

  // PDF
  const pdfData = results.allFile.edges
    .filter(({ node }) => node.extension === "pdf")
    .map(({ node }) => {
      const articleDataItem = {
        href: `${pathToFiles}${node.relativePath}`,
        name: node.name,
        id: node.id,
      }
      return articleDataItem
    })

  // Darkness
  const darknessData = results.allFile.edges
    .filter(({ node }) => {
      return node.extension !== "pdf" && node.name.startsWith("D")
    })
    .map(({ node }) => {
      const regex = /D([\d]*)[A-Z]?\s(.*)\.pptx/
      const matches = node.relativePath.match(regex)
      const darknessDataItem = {
        href: `${pathToFiles}${node.relativePath}`,
        number: parseInt(matches[1]),
        name: matches[2],
        id: node.id,
      }
      return darknessDataItem
    })
    .sort((a, b) => {
      return a.number - b.number
    })

  // Light
  const lightData = results.allFile.edges
    .filter(({ node }) => {
      return node.extension !== "pdf" && node.name.startsWith("L")
    })
    .map(({ node }) => {
      const regex = /L([\d]*)[A-Z]?\s(.*)\.pptx/
      const matches = node.relativePath.match(regex)
      const lightDataItem = {
        href: `${pathToFiles}${node.relativePath}`,
        number: parseInt(matches[1]),
        name: matches[2],
        id: node.id,
      }
      return lightDataItem
    })
    .sort((a, b) => {
      return a.number - b.number
    })

  return (
    <Layout>
      <SEO title="Darkness to Light"></SEO>
      <div className="sectioned-page">
        <section>
          <div className="container">
            <h1>Darkness To Light</h1>
            <h2 style={{ fontWeight: 200 }}>PDFs</h2>
            {pdfData.map(pdf => (
              <DownloadItem key={pdf.id} {...pdf}></DownloadItem>
            ))}
          </div>
        </section>
        <section>
          <div className="container">
            <h2 style={{ fontWeight: 200 }}>Darkness</h2>
            {darknessData.map(darkness => (
              <DownloadItem key={darkness.id} {...darkness}></DownloadItem>
            ))}
          </div>
        </section>
        <section>
          <div className="container">
            <h2 style={{ fontWeight: 200 }}>Light</h2>
            {lightData.map(light => (
              <DownloadItem key={light.id} {...light}></DownloadItem>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
