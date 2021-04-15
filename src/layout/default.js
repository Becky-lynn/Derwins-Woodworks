 import React from "react"
 import MainNav from "../components/main-nav.js"
 import 'bootstrap/dist/css/bootstrap.css';
 import '../SCSS/main.scss';
 


 export default function Default({children}) {
    return(
        <>
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
            <div className="col-sm-11" role="navigation">
              <MainNav></MainNav>
            </div> 
            <div className="col-sm-1 cart">
              <i className="fa fa-shopping-cart"></i>
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
             <div className="row">
                 <div className="col-sm-2 copy">
                     <small>&copy; 2021</small>
                 </div>
                 <div className="col-sm-8 bottomNav">
                     <MainNav></MainNav>
                 </div>
                 <div className="col-sm-2 icon">
                  <i class="fa fa-facebook-f"></i>
                 </div>
             </div>
         </div>
         <hr></hr>
       </footer>
    </>
     )
 }