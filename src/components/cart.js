import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"
import { Link } from "gatsby"

export default function Cart() {
    const { items, taxes, subTotal, shipping, grandTotal } = useContext(CartContext);

    return (
        <>
            <h3>Your Cart</h3>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table">
                        <thead>
                            <tr className="priceHeader">
                                <th className="thItem">Item</th>
                                <th className="thQty">Qty</th>
                                <th className="thCost">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map(item => {
                            return (
                                <tr className="price">
                                    <td className="thumbnail">
                                        <img srcSet={item.image.file.url} alt={item.name} className="img-thumbnail" />
                                        <span className="name">{item.name}</span>
                                    </td>
                                    <td className="itemQty">
                                        {item.qty}
                                    </td>
                                    <td className="price itemPrice">
                                        ${(item.qty * item.price).toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4 cart">
                 <div className="priceBreakdown">
                    SubTotal: <span className="price subTotal">${subTotal.toFixed(2)}</span>
                    <br />
                    Taxes: <span className="price taxes">${taxes.toFixed(2)}</span>
                    <br />
                    Shipping: <span className="price shipping">${shipping.toFixed(2)}</span>
                    <br />
                    Grand Total: <span className="price grandTotal"><strong>${grandTotal.toFixed(2)}</strong></span>

                    <Link to={"/"} className="btn btn-primary btnShopping">Continue Shopping</Link>
                 </div>   
                </div>
            </div>
        </>

    )
}
