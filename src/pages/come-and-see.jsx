import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import DownloadItem from "../components/DownloadItem/DownloadItem"

export default () => {
  return (
    <Layout>
      <SEO title="Come And See"></SEO>
      <div className="container">
        <h1>Come And See</h1>
        <span className="accent">by Alan Piner</span>
        <p>
          This study titled "Come And See" is a 12 lesson series in the gospel
          of John. Below you can find a link to download all 12 lessons. Please
          feel free to use these lessons to help with bible studies.
        </p>
        <h2 style={{ fontWeight: 200 }}>Lessons</h2>
        <DownloadItem
          name="Come And See"
          href="content/bible-classes/come-and-see/Final VERSION Come and See  Version 6C.docx"
        ></DownloadItem>
      </div>
    </Layout>
  )
}
