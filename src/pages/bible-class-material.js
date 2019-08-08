import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const BibleClassMaterialPage = () => {
  const darknessToLightName = "darkness-to-light"
  const comeAndSeeName = "come-and-see"
  const eyeingSecondPeterName = "eyeing-2nd-peter"

  const results = useStaticQuery(graphql`
    query EyeingSecondPeterMaterialFiles {
      allFile(
        filter: {
          sourceInstanceName: {
            regex: "/darkness-to-light|come-and-see|eyeing-2nd-peter/"
          }
        }
      ) {
        edges {
          node {
            sourceInstanceName
            id
            relativePath
            prettySize
          }
        }
      }
    }
  `)

  const classMaterial = results.allFile.edges

  const darknessToLightMaterial = classMaterial.filter(
    ({ node }) => node.sourceInstanceName === darknessToLightName
  )
  const comeAndSeeMaterial = classMaterial.filter(
    ({ node }) => node.sourceInstanceName === comeAndSeeName
  )
  const eyeingSecondPeterMaterial = classMaterial.filter(
    ({ node }) => node.sourceInstanceName === eyeingSecondPeterName
  )

  return (
    <Layout>
      <SEO title="Class Material" />
      <div className="container">
        <h1>Class Material</h1>
        <p>
          Please feel free to use any of this material to help with teaching in
          a classroom setting.
        </p>
        <h2>Darkness to Light</h2>
        {darknessToLightMaterial.map(({ node }) => (
          <div key={node.id}>
            <a
              href={`content/bible-classes/${darknessToLightName}/${node.relativePath}`}
              download
            >
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
        <h2>Come and See</h2>
        {comeAndSeeMaterial.map(({ node }) => (
          <div key={node.id}>
            <a
              href={`content/bible-classes/${comeAndSeeName}/${node.relativePath}`}
              download
            >
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
        <h2>
          Eyeing 2<sup>nd</sup> Peter
        </h2>
        {eyeingSecondPeterMaterial.map(({ node }) => (
          <div key={node.id}>
            <a
              href={`content/bible-classes/${eyeingSecondPeterName}/${node.relativePath}`}
              download
            >
              {node.relativePath} {node.prettySize}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BibleClassMaterialPage
