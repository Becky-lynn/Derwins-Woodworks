 import React, { useContext } from "react"
 import  { Link } from "gatsby"
 import { CartContext } from "../../shopping.js"
 
 export default function MainNav() {

     const { itemCount } = useContext(CartContext)

     return(
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/shoppingcart">Shopping-Cart</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
             <li className="list-group-item">
                 {itemCount === 0 &&
                   <strong>How about you buy something?</strong>
                 }
                 {itemCount > 0 &&
                 <>
                   <i className="fa fa-shopping-cart"></i>
                   <span className="badge badge-light">{itemCount}</span>
                   </>
                 }
             </li>

         </ul>
     )
 }