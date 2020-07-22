import { Link } from "gatsby"
import React from "react"

import "../sass/global.scss"
import constants from "../constants"
import { createButton } from "../helpers"

const links = []

for (const [index, element] of constants.linksData.entries()) {
  let button
  if (element.link.includes(window.location.pathname)) {
    button = createButton(element, index, "button-module--active")
  } else {
    button = createButton(element, index)
  }
  links.push(button)
}


const Header = () => (
  <header>
    <div className="header">
      <div className="header__title">
        <Link
          to="/">
          COBOS
        </Link>
      </div>
      <div className="nav">
        {links}
      </div>
    </div>
  </header>
)


export default Header
