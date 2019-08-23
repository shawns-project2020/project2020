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
    .sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
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
      <SEO title="From Darkness to Light"></SEO>
      <div className="sectioned-page">
        <section>
          <div className="container">
            <h1>From Darkness To Light</h1>
            <p>
              Below are files for the "From Darkness to Light" series. Please
              note the 2 PDF files contain 25 lessons each. Part 1 is for "From
              Darkness" and part 2 is for "Light." Beneath the PDFs are
              PowerPoints for each lesson. Please feel free to use any of this
              material for your bible studies.
            </p>
            <h2 style={{ fontWeight: 200 }}>PDFs</h2>
            {pdfData.map(pdf => (
              <DownloadItem key={pdf.id} {...pdf}></DownloadItem>
            ))}
          </div>
        </section>
        <section>
          <div className="container">
            <h2 style={{ fontWeight: 200 }}>From Darkness</h2>
            {darknessData.map(darkness => (
              <DownloadItem key={darkness.id} {...darkness}></DownloadItem>
            ))}
          </div>
        </section>
        <section>
          <div className="container">
            <h2 style={{ fontWeight: 200 }}>To Light</h2>
            {lightData.map(light => (
              <DownloadItem key={light.id} {...light}></DownloadItem>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
