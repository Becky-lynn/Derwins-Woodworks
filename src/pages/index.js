import * as React from "react"
import Default from "../layout/default.js"
import { graphql } from "gatsby"
import ProductItemPreview from "../components/ProductItemPreview.js"
import Seo from "../components/seo.js"
import "../SCSS/main.scss";

//markup
const IndexPage = ({ data }) => {
    return (
      <Default>

         <Seo title="Handcrafted Wooden Toys and Furniture"></Seo>

         <div className="welcome">
         <h2>Welcome to Derwin's Woodworks!</h2> 
          <p>All of our products are made from wood that is purchased from local saw mills.<br/>
             The color of the products may vary depending on the type of wood used.</p> 
             <hr></hr>
         </div>   
         <div className="row">
         
         {data.allContentfulProduct.nodes.map(product =>(
           <ProductItemPreview product={product}></ProductItemPreview>
          ))}

          </div>
       </Default>
      )
    }
   
   export default IndexPage
   
   export const query = graphql`
   query MyQuery {
    allContentfulProduct(sort: {fields: Position, order: ASC}) {
      nodes {
        slug
        name
        category{
          name
        }
        price
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }  
   `
