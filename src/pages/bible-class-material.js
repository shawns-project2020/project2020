import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from "../components/seo"

const BibleClassMaterialPage = () => {
	const bibleClassMaterial = useStaticQuery(graphql`
    query BibleClassMaterialFile {
      allFile(
        filter: { sourceInstanceName: { eq: "bible-classes" } }
      ) {
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
      <SEO title="Class Material" />
      <h1>Class Material</h1>
      {bibleClassMaterial.allFile.edges.map(({ node }) => (
        <div key={node.id}>
          <a href={`content/bible-classes/${node.relativePath}`} download>{node.relativePath} {node.prettySize}</a>
        </div>
      ))}
    </Layout>
	  
  )
}

export default BibleClassMaterialPage
