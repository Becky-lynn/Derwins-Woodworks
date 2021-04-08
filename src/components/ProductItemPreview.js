 import React from "react"
 import { Link } from "gatsby"

 export default function ProductItemPreview({product}) {
     return(
    <>
    <div className="row product-item-preview">
       <div className="col-sm-4 col-md-6 col-lg-4">
 	    <img className="img-fluid" src={product.image.file.url} alt={product.name} />
 	  </div>

       <div className="col-sm-8 col-md-6 col-lg-8">
         <h3>{product.name}</h3>
         <p>{product.cost}</p>
         <Link to={"/product/" + product.id} class="btn btn-primary">Learn More</Link>
       </div>
     </div>
     </>
   )
 }   