import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CircleIconWrapper from "../components/CircleIconWrapper/CircleIconWrapper"

import {
  FaQuestion,
  FaBook,
  FaBookOpen,
  FaFile,
  FaUser,
  FaPaperclip,
} from "react-icons/fa"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="sectioned-page">
      <section>
        <div className="container">
          <h1>Welcome!</h1>
          <p>
            Please make use of this bible material base on vision related bible
            topics. You can find various material for bible classes, articles,
            preaching material, and other resources.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <h2>About Project 2020</h2>
            <p>
              Learn about us <Link to="/about">here</Link>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Bible Class Material</h2>
          Download bible class material{" "}
          <Link to="/bible-class-material">here</Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Articles</h2>
          Download articles <Link to="/articles">here</Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Preacher Material</h2>
          Download preaching material <Link to="/sermon-material">here</Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Resources</h2>
          Download resources <Link to="/resources">here</Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Contact</h2>
          Please feel to contact us <Link to="contact">here</Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
