 import React, { useContext } from "react"
 import  { Link } from "gatsby"
 import { CartContext } from "../../shopping.js"
 
 export default function MainNav() {

    const { itemCount } = useContext(CartContext)

     return(
         <>
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/shoppingcart">Shopping-Cart</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
             
              </ul>  
              <p className="cartBadge">
              <Link to="/shoppingcart" className="fa fa-shopping-cart">                   <span className="badge badge-light">{itemCount}</span>
</Link>

                   {/* <Link to="/shoppingcart" className="fa fa-shopping-cart"></Link>
                   <span className="badge badge-light">{itemCount}</span> */}
              </p>

              </>
     )
 }