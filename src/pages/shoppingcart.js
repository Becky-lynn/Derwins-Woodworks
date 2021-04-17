import React from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"
import CheckoutForm from "../components/checkoutForm.js"
import Cart from "../components/cart.js"
import SEO from "../components/seo.js"


export default function Shoppingcart() {
    return (
        <Default>

         <SEO title="Your Shopping Cart"></SEO>

            <h3>Your Cart</h3>
            <Cart></Cart>

            <hr/>

            <CheckoutForm></CheckoutForm>
              {/* <Link to={"/checkout/" + product.id} className="btn btn-primary">Check Out</Link> */}
            

          <button className="btn btn-primary">Check Out<i class="fa fa-shopping-cart"></i></button>
          <Link to={"/"} className="btn btn-primary">Continue Shopping</Link>

        </Default>
    )
}

// export default CheckoutPage
   
   