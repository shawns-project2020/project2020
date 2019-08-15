import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import { FaArrowCircleRight } from "react-icons/fa"

const BibleClassMaterialPage = () => {
  return (
    <Layout>
      <SEO title="Class Material" />
      <div className="sectioned-page">
        <section>
          <div className="container">
            <h1>Class Material</h1>
            <p>
              Please feel free to use any of this material to help with teaching
              in a classroom setting.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Darkness to Light</h2>
            <p>50 Lessons in Two Parts (512 pages)</p>
            <p>50 Powerpoints</p>
            <p>Various Authors</p>
            <Link to="/darkness-to-light">
              Click to see overview and download page
            </Link>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Come and See</h2>
            <p>A Study in the Gospel of John</p>
            <p>12 lessons by Alan Piner</p>
            <Link to="/come-and-see">Click to see download page</Link>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Eyeing 2 Peter</h2>
            <p>12 Lessons from 2 Peter</p>
            <Link to="/eyeing-2-peter">Click to see download page</Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BibleClassMaterialPage
