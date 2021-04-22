//  import React, { useContext } from "react"
 import React from "react"
 import MainNav from "../components/main-nav.js"
 import { CartContextProvider } from "../../shopping.js"
 import 'bootstrap/dist/css/bootstrap.css';
 import '../SCSS/main.scss';
 import FooterNav from "../components/footer-nav.js"

 export default function Default({children}) {

    return(
        <CartContextProvider>
        <header>
         <div className="container header">
          <div className="row">
            <div className="col-sm-12">
              <h1>
                <span className="bigFont">Derwin's Woodworks </span>
                <span className="smallFont">- Hand Crafted Wooden Toys and Furniture -</span>
              </h1>
            </div>
           </div>
          </div>
          </header>

         <nav className="topNav">
          <div className="container">
           <div className="row">
            <div className="col-sm-12" role="navigation">
              <MainNav></MainNav>
            </div> 
            </div>
           </div>
          </nav>

          {/* <hr></hr> */}

       <div className="container">
        {children}       
       </div>

        <footer>
       <hr></hr>
         <div className="container footer">
             {/* <div className="row footer"> */}
                
                 {/* <div className="col-sm-8 bottomNav"> */}
                     <FooterNav></FooterNav>
                 </div>
                 {/* <div className="col-sm-2 icon">
                  <Link href="https://www.facebook.com/Derwin-Woodworking-Shop-109586804525627" rel="facebook" className="fa fa-facebook-square">  Join us on Facebook</Link>
                 </div>
                 <div className="col-sm-2 copy">
                     <small>&copy; 2021</small>
                 </div>
                  */}
             {/* </div> */}
         <hr></hr>
       </footer>
    </CartContextProvider>
     )
 }