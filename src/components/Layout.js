import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./seo"

function Layout({ children, currentPath }) {
  return (
    <>
      <SEO title="Portfolio"/>
      <Header currentPath={currentPath} />
      {children}
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  currentPath: "home",
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPath: PropTypes.string,
}

export default Layout
