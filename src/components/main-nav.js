 import React from "react"
 import  { Link } from "gatsby"
 
 export default function MainNav() {
     return(
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/shopping-cart">Shopping-Cart</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
         </ul>
     )
 }