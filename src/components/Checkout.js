import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Checkout extends Component{
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: "",
        }
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      handleSubmit=(e)=>{
        e.preventDefault();
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        if (firstName.length === 0 || lastName.length === 0 || email.length === 0){
          return alert("Input is not valid");
        } else if (creditCard.length !== 16 || isNaN(creditCard)){
          return alert("Credit card number is not valid");
        } else if (zipCode.length !== 5 || isNaN(zipCode)){
          return alert("Zip code is not valid");
        } else {
          return alert(`Purchase complete ${formatPrice(this.props.subtotal * 1.05)}`);
        }
      }

    render(){
        return(
            <div>
                <h1>Checkout</h1>
                <form id="checkout" onSubmit={this.handleSubmit}>
                    <div className="input-container">
                    <label htmlFor="first-name">First Name</label>
                    <br />
                    <input 
                        type="text" 
                        id="first-name" 
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="input-container">
                    <label htmlFor="last-name">Last Name</label>
                    <br />
                    <input 
                        type="text" 
                        id="last-name"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="input-container">
                    <label htmlFor="credit-card">Credit Card</label>
                    <br />
                    <input 
                        type="text" 
                        id="credit-card" 
                        name="creditCard"
                        placeholder="Credit Card"
                        value={this.state.creditCard}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="input-container">
                    <label htmlFor="zip-code">Zip Code</label>
                    <br />
                    <input 
                        type="text" 
                        id="zip-code" 
                        name="zipCode"
                        placeholder="Zip Code"
                        value={this.state.zipCode}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button type="submit">Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Checkout;