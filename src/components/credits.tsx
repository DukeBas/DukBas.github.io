import * as React from "react"

const Credits = () => (
  <div id="copyright">
    <ul>
      <li>&copy; {new Date().getFullYear()} DukeBas</li>
      <li>
        Original design: <a href="https://html5up.net">HTML5 UP</a> {` `}
        (<a href="https://html5up.net/license">CC</a>)
      </li>
      <li>
          Built using <a href="https://www.gatsbyjs.com">Gatsby</a>
      </li>
    </ul>
  </div>
)

export default Credits
