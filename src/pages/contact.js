import React from "react"
import Default from "../layout/default.js"
import Seo from "../components/seo.js"

export default function Contact() {
    return (
        <Default>
         <Seo title="Contact Derwin's Woodworks"></Seo> 
         
           <div className="contact">
           <h3 className="page help">Please let us know how we can help...</h3>
             <hr/>
  
          <form name="contact" method="POST" data-netlify="true" actions="/thankyou.js">
          <input type="hidden" name="form-name" value="contact" />
          
         <div className="row">
         <div className="col-sm-12">

         <div className="form-group">
	         <label htmlFor="firstName">First Name:</label>
	         <input className="form-control" type="text" name="firstName" id="firstName" placeholder="John" required />
	       </div>
       </div>
     </div>

     <div className="row">
   	  <div className="col-sm-12">
   	   <div className="form-group">
	        <label htmlFor="lastName">Last Name: </label>
	        <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Doe" required />
	     </div>
	    </div>
	   </div>

     <div className="row">
   	  <div className="col-sm-12">

       <div className="form-group">
	      <label htmlFor="email">Email Address:</label>
	      <input className="form-control" type="email" name="email" id="email" placeholder="you@email.com" required />
	    </div>
	   </div>
    </div>

    <div className="row">
   	 < div className="col-sm-12">

   	  <div className="form-group">
	      <label htmlFor="phone">Phone Number:</label>
	      <input className="form-control" type="tel" name="phone" id="phone" placeholder="123-456-7890" required />
	    </div>
	   </div>
    </div>

    <div className="row">
     <div className="col-sm-12">

      <div className="form-group">
	      <label htmlFor="comment">Your Message:</label>
        <textarea className="form-control" name="message" id="message" cols="30" rows="10"  placeholder="Your Message..."></textarea>
	    </div>
	   </div>
	  </div>

    <div className="row">
     <div className="col-sm-12">

       <button type="submit" className="btn btn-primary">Contat Us</button>
     </div>
    </div>

   </form>
   </div>
        </Default>
    )
}