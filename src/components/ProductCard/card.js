import React from "react"
import "./card.css"
import { carticon } from "./cardindex"

function Card() {
  return (
    <div className="product-container section-padding">
      <div className="product-container__image"></div>
      <div className="product-container__text">
        <p>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <h2>
          $149.99 <span>$169.99</span>
        </h2>
        <div className="product-container__text-button">
          <button>
            <img src={carticon} alt="cart" />
            <h3>Add To Cart</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
