import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"
import { Link } from "gatsby"
import productItemPreview from "./productItemPreview.js";

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
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map(item => {
                            return (
                                <tr className="price">
                                    <td>
                                        {item.sku}
                                    </td>
                                    <td>
                                        {item.qty}
                                    </td>
                                    <td className="price">
                                        ${(item.qty * item.price).toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4 cart">

                    SubTotal: <span className="price">${subTotal.toFixed(2)}</span>
                    <br />
                    Taxes: <span className="price">${taxes.toFixed(2)}</span>
                    <br />
                    Shipping: <span className="price">${shipping.toFixed(2)}</span>
                    <br />
                    Grand Total: <span className="price"><strong>${grandTotal.toFixed(2)}</strong></span>

                    <Link to={"/"} className="btn btn-primary btnShopping">Continue Shopping</Link>

                </div>
            </div>
        </>

    )
}
