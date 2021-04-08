import React from "react"
import Default from "../layout/default.js"

export default function Contact() {
    return (
        <Default>

          <h1>Contact Us</h1>

          <div className="h2 feature">
   <h2 className="page help">Contact US</h2>
   <span className="block"></span>
  </div>

  <div className="container help">
  
  <form className="help" method="POST" action="https://webhook.site/40ab67be-f734-428e-aa7a-48f505efc54a">

  <div className="row">
   <div className="col-sm-12 col-md-6 offset-md-3">

    <div className="form-group">
	 <label htmlFor="firstName">First Name:</label>
	  <input className="form-control" type="text" name="firstName" id="firstName" placeholder="John" required />
	 </div>
    </div>
   </div>

   <div className="row">
   	<div className="col-sm-12 col-md-6 offset-md-3">

   	 <div className="form-group">
	  <label htmlFor="lastName">Last Name: </label>
	   <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Doe" required />
	  </div>
	 </div>
	</div>

   <div className="row">
   	<div className="col-sm-12 col-md-6 offset-md-3">

     <div className="form-group">
	  <label htmlFor="email">Email Address:</label>
	   <input className="form-control" type="email" name="email" id="email" placeholder="you@email.com" required />
	 </div>
	</div>
   </div>

   <div className="row">
   	<div className="col-sm-12 col-md-6 offset-md-3">

   	 <div className="form-group">
	  <label htmlFor="phone">Telephone Number:</label>
	   <input className="form-control" type="phone" name="phone" id="phone" placeholder="123-456-7890" required />
	  </div>
	 </div>
    </div>

    <div className="row">
     <div className="col-sm-12 col-md-6 offset-md-3">

      <div className="form-group">
	   <label htmlFor="comment">Comment:</label>
	    <textarea className="form-control" name="comment" id="comment" cols="30" rows="10"  placeholder="Add comment here."></textarea>
	  </div>
	 </div>
	</div>

    <div className="row">
     <div className="col-sm-12 col-md-6 offset-md-3">

       <button className="btn btn-primary">Send</button>
     </div>
    </div>

  </form>
 </div>
        </Default>
    )
}