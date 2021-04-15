import React from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"

export default function ProductPage({ pageContext }) {

    const { product } = pageContext;

    return(
        <Default>
         <div className="row product">
             <div className="col-sm-4">
                <img className="img-fluid" src={product.image.file.url} alt={product.name} />
             </div>

             <div className="col-sm-4" description>
                <h4>{product.name}</h4>
                 <p>{product.description.description}</p>
                 <p>{product.cost}</p>
             </div>

             <div className="col-sm-4">
              <label htmlFor="quanity" className="order" for="quanity">Select quanity:</label>
               <select className="order" name="quanity" size="1">
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
               </select>
              </div>
                 <p>
                 <Link to="/" className="btn btn-primary">Return to Home</Link>
                 <button className="btn btn-primary">Add to Cart</button>
                 </p>
              </div>
        </Default>
    )
}