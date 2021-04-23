import React, { useState } from "react"
import axios from "axios"

export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");
    const [ streetAddress, setStreetAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipCode, setzipCode ] = useState("");

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")

         let customer = {
             fullname: fullname,
             email: email,
             streetAddress: streetAddress,
             city: city,
             state: state,
             zipCode: zipCode,

        }
        axios.post("https://webhook.site/1022c860-ad18-46d0-9699-c8a6ad5ba435", customer);
    }

    return (
        <>
        <h2 className="details">Your Details</h2>
        

        <form className="checkOutForm" name="checkOut" method="POST" data-netlify="true" actions="/thankyou.js">
        <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
                <label htmlFor="emailAddress">Your Email Address</label>
                <input className="form-control" type="email" id="emailAddress" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>

            <div className="form-group">
                <label htmlFor="fullName">Your Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Hungry Harry" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>

            <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input className="form-control" type="text" name="streetAddress" id="streetAddress" placeholder="Your Street Address" value={streetAddress} onChange={(e) => { setStreetAddress(e.target.value) } } required />
            </div> 

            <div className="form-group">
                <label htmlFor="city">City</label>
                <input className="form-control" type="text" name="city" id="city" placeholder="Your City" value={city} onChange={(e) => { setCity(e.target.value) } } required />
            </div>

            <div className="form-group">
                <label htmlFor="state">State</label>
                <input className="form-control" type="text" name="state" id="state" placeholder="Your State" value={state} onChange={(e) => { setState(e.target.value) } } required />
            </div>

            <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input className="form-control" type="text" name="zipCode" id="zipCode" placeholder="Your Zip Code" value={zipCode} onChange={(e) => { setzipCode(e.target.value) } } required />
            </div>  
            <div>
                <button className="btn btn-lg btn-primary placeOrder" onClick={() => saveOrder()}>Place Order</button>
            </div> 
            </form>
      </>    
    )
}
