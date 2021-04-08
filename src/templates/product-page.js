import React from "react"
import Default from "../layout/default.js"

export default function ProductPage({ pageContext }) {

    const { product } = pageContext;

    return(
        <Default>
         <h1>{product.name}</h1>

         <img src={product.image.file.url} />

         <p>{product.cost}</p>
        </Default>
    )
}