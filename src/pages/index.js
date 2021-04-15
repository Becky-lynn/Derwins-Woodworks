import * as React from "react"
import Default from "../layout/default.js"
import { graphql } from "gatsby"
import ProductItemPreview from "../components/productItemPreview.js"
import Helmet from "react-helmet"
import "../SCSS/main.scss";

//markup
const IndexPage = ({ data }) => {
    return (
      <Default>
         <Helmet>
            <title>Derwin's Woodworks</title>
           <meta name="description" content="Handcrafted Toys and Furniture" />
           <meta property="og:title" content="Derwin's Woodworks" />
           <meta property="og:type" content="website" />
           <meta property="og:url" content="https://Derwin's Woodworks.com" />
           <meta property="og:image" content="https://.jpg" />
         </Helmet>
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
