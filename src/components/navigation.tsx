import { Link } from "gatsby"
import * as React from "react"

const Navigation = () => (
  <nav id="nav">
    <ul className="links">
    <li>
        <Link to="index.html">This is Massively</Link>
      </li>
      <li className="active">
        <Link to="generic.html">Generic Page</Link>
      </li>
      {/* <li>
        <a href="elements.html">Elements Reference</a>
      </li> */}
    </ul>
    <ul className="icons">
      <li>
        <a href="#" className="icon brands fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon brands fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon brands fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon brands fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
