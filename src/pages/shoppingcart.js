import React from "react"
import Default from "../layout/default.js"
import CheckoutForm from "../components/CheckoutForm.js"
import Cart from "../components/cart.js"
import SEO from "../components/seo.js"


export default function Shoppingcart() {
    return (
        <Default>

         <SEO title="Your Shopping Cart"></SEO>

            <div className="shoppingCart">
                <h2>Check Out</h2>
                 <p className="animate__animated animate__slideInRight">Thank you for shopping with us!</p>
                <hr/>
            <Cart></Cart>
            </div>

            <hr/>
            <div className="checkOutForm">

            <CheckoutForm></CheckoutForm>
              {/* <Link to={"/checkout/" + product.id} className="btn btn-primary">Check Out</Link> */}

        </div>
        </Default>
    )
}

// export default CheckoutPage
   
   