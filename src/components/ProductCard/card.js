import React from "react"
import "./card.css"
import { desktopimg, mobileimg, carticon } from "./cardindex"

function Card() {
  return (
    <div className="product-container">
      <div className="product-container__image">
        <img src={desktopimg} />
      </div>
      <div className="prodcut-container__text"></div>
    </div>
  )
}

export default Card
