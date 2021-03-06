import React from "react"
import Default from "../layout/default.js"
import { Link } from "gatsby"
import Seo from "../components/seo.js"

<Seo title="Thank you from Derwins's Woodworks"></Seo>
export default function Thankyou() {
    return (
        <Default>
           <h3 className="page help">Thank you</h3>
             <p>We appreciate your input and will reply in 1 to 2 business days!</p>
             <Link to="/" className="btn btn-primary">Return to Homepage</Link>
        </Default>
    )
}