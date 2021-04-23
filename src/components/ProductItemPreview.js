 import React from "react"
 import { Link } from "gatsby"

 export default function ProductItemPreview({product}) {
     return(
    <>
       <div className="col-sm-4 col-md-4 col-lg-4 ProductItemPreview">
        <div className="products">
            <img className="img-fluid" src={product.image.file.url} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>

         <Link to={"/product/" + product.slug} className="btn btn-primary details">Details</Link>
         </div>
       </div>
     </>
   )
 }   