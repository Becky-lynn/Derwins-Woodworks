 import  { Link } from "gatsby"
 import React from "react"

 export default function MainNav() {
     return(
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/products">Products</Link></li>
             <li><Link to="/checkout">Check-Out</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
         </ul>
     )
 }