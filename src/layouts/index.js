import React from 'react'
import Helmet from 'react-helmet'

import '../assets/sass/main.scss'

import Aux from '../components/hoc/Aux/Aux'
import Header from './Header/Header.js'
import Navigation from './Navigation/Navigation'
import favicon from '../assets/img/favicon.png'

const Layout = ({ children, data }) => (
  <Aux>
    <Helmet>
      <title>{data.site.siteMetadata.description}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">
      <Header />
      <div className="content">
        <Navigation />
        <main>{children()}</main>
      </div>
    </div>
  </Aux>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        description
        keywords
      }
    }
  }
`
