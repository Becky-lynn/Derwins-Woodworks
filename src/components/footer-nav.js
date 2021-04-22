import React from "react"
import  { Link } from "gatsby"
 
 export default function FooterNav() {


     return(
         <>
        <div className="row bottomNav"> 
         <div className="col-sm-12 bottomNav">
            <ul className="footer-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shoppingcart">Shopping-Cart</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>  
          </div> 
         </div>  
         <div className="row icon">
          <div className="col-sm-12 icon">
               <Link href="https://www.facebook.com/Derwin-Woodworking-Shop-109586804525627" rel="facebook" className="fa fa-facebook-square">  Join us on Facebook</Link>
          </div>
         </div>
         <div className="row copy">
          <div className="col-sm-12 copy">
               <small>&copy; 2021 Derwin Woodworks</small>
          </div>
         </div> 
          </>
     )
 }