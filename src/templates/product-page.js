import React from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"
import SEO from "../components/seo.js"
import AddToCart from "../components/add-to-cart.js"

export default function ProductPage({ pageContext }) {

    const { product } = pageContext;

    return(
        <Default>

         <SEO title={product.name} description={"I hope you enjoy shopping on our site."}></SEO>

         <div className="row productPage">
             <div className="col-sm-6">
                <img className="img-fluid" src={product.image.file.url} alt={product.name} />
             </div>

             <div className="col-sm-4 description">
                <h4>{product.name}</h4>
                <p className="productPageCost">${product.price.toFixed(2)}</p>
                
                <p dangerouslySetInnerHTML={{ __html:product.description.description}}></p>
                {/* <ul>
                  <li>Length: {product.length}</li>
                </ul> */}
                <div className="btnShopping">
                <Link to="/" className="btn btn-primary btnShopping">Continue Shopping</Link>
                </div>
             </div>


             <div className="col-sm-2">
              <div className="quanityWrapper">   
               <div> 
                    <label htmlFor="quanity" className="form-field-title" for="quanity">Quanity:</label>
               </div>     
                    <select className="productQuanity" name="quanity" size="1">
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    </div>
                  <div className="cartButtons">  

                    <AddToCart item={ {sku: product.slug, price: product.price, name: product.name} }></AddToCart>
                    <Link to="/shoppingcart" className="btn btn-primary">View Cart</Link>
                    
                 </div>
               </div>     
                 {/* <p>
                    
                    {/* ${product.cost} */}
                 {/* </p> */} 

               </div>
                
        </Default>
    )
}