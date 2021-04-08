 import React from "react"
 import MainNav from "../components/main-nav.js"
 import 'bootstrap/dist/css/bootstrap.css';
 import styles from '../SCSS/main.scss';
 


 export default function Default({children}) {
    return(
        <>
        <header>
         <div className="container header">
          <div className="row">
            <div className="col-sm-12">
              <h1>Derwin's WoodWorks</h1>
            </div>
           </div>
          </div>
          <div className="container-fluid">
           <div className="row">
            <div className="col-sm-12 topNav" role="navigation">
              <MainNav></MainNav>
            </div>
           </div>
          </div>
        </header>

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
                     [social icon]
                 </div>
             </div>
         </div>
       </footer>
    </>
     )
 }