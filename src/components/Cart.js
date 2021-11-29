import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component{
    render(){
        return(
            <div>
                <h1>Cart</h1>
                <ul>
                {this.props.cartElArr}
                </ul>
                <h2>Subtotal: { formatPrice(this.props.subtotal) }</h2>
                <h2>Tax: { formatPrice(this.props.subtotal * 0.05) }</h2>
                <h2>Total: { formatPrice(this.props.subtotal * 1.05) }</h2>
            </div>
        )
    }
}

export default Cart;