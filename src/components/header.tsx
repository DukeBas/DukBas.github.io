import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ maxWidth }) => (
  // <header>
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: maxWidth,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <HeaderButton Title="Test" link="#"/>
  //   </div>
  // </header>
  <header id="header">
    <a href="index.html" className="logo">
      Massively
    </a>
  </header>
)

Header.propTypes = {
  maxWidth: PropTypes.number,
}

const HeaderButton = ({ Title, link }) => <Link to={link}>{Title}</Link>

export default Header
