import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from "../components/seo"

const ContactPage = () => {


  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <h1>Contact Us</h1>
        <p>Please feel free to contact us at <span className="accent">shawns.project2020@gmail.com</span></p>
      </ div>
    </Layout>
  )
}

export default ContactPage
