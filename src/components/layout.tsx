/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import Credits from "./credits"

// Declarations for use in the P5 Sketch
declare global {
  interface Window {
    saveCanvas: Function
    windowResized: Function
  }
}

const contentWidth = 960


const Layout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Navigation />
        {/* Insert child elements into page here */}
        <div id="main">{children}</div>
        <Footer />
        <Credits />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
