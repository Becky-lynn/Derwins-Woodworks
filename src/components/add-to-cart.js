import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"

export default function AddToCart({item}) {
    const { addProduct } = useContext(CartContext);

    return (
        //  <>
        <div className="cont">
          <div class="crtdiv">
            <span class="qty">
            <span class="dec">
            <i class="fa fa-minus-square" aria-hidden="true"></i>
            </span>
            <span class="num">
            1
            </span>
            <span class="inc">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            </span>
            </span>
            <button id="btn" type="button onClick={ () => addProduct(item) } className="btn button primary cart><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to Cart</button>
            </div>
            </div>
    )
}
