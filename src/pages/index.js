import * as React from "react"
import Default from "../layout/default.js"
import { graphql } from "gatsby"
import ProductItemPreview from "../components/ProductItemPreview.js"
import Helmet from "react-helmet"
import styles from "../SCSS/main.scss";

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
       <h2>Welcome to Derwin's Woodworks</h2>      
       <h3>Handcrafted Wooden Toys and Furniture</h3>
         
         {data.allContentfulProduct.nodes.map(product =>(
           <ProductItemPreview product={product}></ProductItemPreview>
          ))}
       </Default>
      )
    }
   
   export default IndexPage
   
   export const query = graphql`
   query MyQuery {
     allContentfulProduct {
       nodes {
         image {
           file {
             url
           }
         }
         name
         cost
         id
       }
     }
   }
   `
