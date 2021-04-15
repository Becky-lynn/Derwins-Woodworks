import React from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"


export default function Checkout() {
    return (
        <Default>

         <div className="row">
          <div className="col-sm-4">
            <h3>Your Cart</h3>
          </div>

          <div className="col-sm-4">
              <p>Subtotal</p>
              {/* <Link to={"/checkout/" + product.id} className="btn btn-primary">Check Out</Link> */}
            
          </div>
         </div>

         <div className="row">
             <div className="col-sm-4">
             [product picture]
             </div>
             <div className="col-sm-3">
             [product name]
             [product price]
             </div>

             <div className="col-sm-3">
             <label htmlFor="quanity" className="order" for="quanity">Select quanity:</label>
              <select className="order" name="quanity" size="1">
               <option value="one">1</option>
               <option value="two">2</option>
               <option value="three">3</option>
               <option value="four">4</option>
              </select>
             </div>

             <div className="col-sm-2">
             [Subtotal] 
             </div>

         </div>

         <div className="cart">
          <button className="btn btn-primary">Check Out<i class="fa fa-shopping-cart"></i></button>
          <Link to={"/"} className="btn btn-primary">Continue Shopping</Link>
    </div>

        </Default>
    )
}

// export default CheckoutPage
   
   