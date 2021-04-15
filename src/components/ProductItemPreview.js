 import React from "react"
 import { Link } from "gatsby"

 export default function productItemPreview({product}) {
     return(
    <>
       <div className="col-sm-4 col-md-4 col-lg-4">
 	      <img className="img-fluid" src={product.image.file.url} alt={product.name} />

         <h4>{product.name}</h4>
         <p>{product.cost}</p>
         <Link to={"/product/" + product.id} className="btn btn-primary">Learn More</Link>
       </div>
     </>
   )
 }   