import * as React from "react"
import Default from "../layout/default.js"
import { graphql } from "gatsby"
import ProductItemPreview from "../components/productItemPreview.js"
import SEO from "../components/seo.js"
import "../SCSS/main.scss";

//markup
const IndexPage = ({ data }) => {
    return (
      <Default>

         <SEO title="Handcrafted Wooden Toys and Furniture"></SEO>

         <div className="welcome">
         <h2>Welcome to Derwin's Woodworks</h2>   
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
    allContentfulProduct {
      nodes {
        id
        name
        cost
        quantity
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
