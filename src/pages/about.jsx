import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ArticlePage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="sectioned-page">
        <section>
          <div className="container">
            <h1>About Project 2020 Enlightening the Eye</h1>
            <p>
              Because of the 20/20 Snellen visual acuity chart, Americans
              associate 20/20 with good vision. As a result, the year 2020 has
              sparked a desire to develop biblical material centered around
              “Enlightening the Eyes.”
            </p>
            <p>
              The year 2020 seemed like an opportunity to develop material for a
              classroom setting, as many are already thinking about the year of
              the eye in the United States. The goal of this project is to help
              “Children of the Light” see the eternal; things not seen with the
              eyes but seen by faith. Many have written articles/lessons on
              eye-related topics with spiritual applications. Thus, Project 2020
              Enlightening the Eyes came about. If you have material to share,
              please send it to the address at the{" "}
              <Link to="/contact">contact us page</Link>.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Section 1 Bible Class Study Material</h2>
            <p>
              Section 1 <Link>BIBLE CLASS STUDY MATERIAL</Link> includes Bible
              studies that might be used for adult studies. First, there is a
              two-part fifty lesson study called “From Darkness to Light”
              written by many brethren. The two parts are available in two PDF
              files (around 512 pages). There are fifty Powerpoints files to go
              along with each lesson. The second study is called “Come and See.
              The third study is titled “Eyeing Second Peter.”
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Section 2 Articles</h2>
            <p>
              Section 2 <Link to="articles">SHORT ARTICLES</Link> includes
              articles that might be used to put in bulletins or in a group
              email relating spiritual matters and vision.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Section 3 Preachers' Share Sermons</h2>
            <p>
              Section 3{" "}
              <Link to="sermon-material">PREACHERS' SHARED SERMONS</Link>{" "}
              includes lesson that have been shared from preachers that might be
              of interest on this topic area of eyes and vision.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Section 4 Resources</h2>
            <p>
              Section 4 <Link to="resources">RESOURCES</Link> includes resources
              like poster for those who might use Project 2020 Enlightening Eyes
              for a theme study in 2020. A quick name addition and it will make
              a nice printable poster.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>More on Project 2020</h2>
            <p>
              God’s word teaches many spiritual concepts using the eyes.
              Sometimes, it is the contrast of walking by faith and not by
              sight, the call of humanity from darkness to God’s marvelous
              light. It is also the need to keep our eyes on Christ, lest like
              Peter we misfocus on the waves of the sea. Other times, it is how
              Christians must look to the eternal rather than the temporal
              things Satan uses to blind us from the eternal promises.
            </p>
            <p>
              These lessons use images pulled from the internet and remain the
              property of their owners. These are used for strictly classroom
              settings and not for publication or profit. Many writers have
              referenced sources or note using an idea or style from others. No
              one intends to claim another’s work as their own, but sometimes a
              writer might not know where a note written in the margin of their
              Bible originated. If there is a failure to properly cite, please
              be forgiving as this is not our intent.
            </p>
            <p>
              In the year of the eye, in 2020, what can Christians do to battle
              Satan&#39;s darkness and enlighten their eyes of understanding to
              the hope of Christ&#39;s calling?
            </p>
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ArticlePage
