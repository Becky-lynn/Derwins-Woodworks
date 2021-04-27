import React, { useState } from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"
import Seo from "../components/seo.js"
import AddToCart from "../components/add-to-cart.js"

export default function ProductPage({ pageContext }) {

    const [qty, setQty ] = useState(1)
    const { product } = pageContext;

    return(
        <Default>

         <Seo title={product.name} description={"I hope you enjoy shopping on our site."}></Seo>

         <div className="row productPage">

             <div className="col-sm-6">
                <img className="img-fluid" src={product.image.file.url} alt={product.name} />
             </div>

             <div className="col-sm-4 description">
                <h4>{product.name}</h4>
                <p className="productPageCost">${product.price.toFixed(2)}</p>
                
                <p className="productDescription">{product.description.description}</p>

                <p className="measurements">{product.measurements.measurements}</p>
                
                <div className="btnShopping">
                  <Link to="/" className="btn btn-primary btnShopping">Continue Shopping</Link>
                </div>
             </div>


             <div className="col-sm-2">

              <div className="quanityWrapper">    
                <div> 
                    <label htmlFor="quanity" className="qty" for="quanity">Quanity:</label>
                </div>     
                    <select value={qty} onChange={(e) => setQty(e.target.value)} className="productQuanity" name="quanity">

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option> 
                    </select> 
                </div>
                <div className="cartButtons">  
                    <AddToCart item={ {sku: product.slug, image: product.image, price: product.price, name: product.name , qty: qty} }></AddToCart>

                    <Link to="/shoppingcart" className="btn btn-primary">View Cart</Link>
                </div>  

          </div>
          </div>
        </Default>
    )
}