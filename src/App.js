import { Component } from "react";
import "./App.css";
import data from './data/productData'
import formatPrice from './helpers/formatPrice'

// To Do: Everything passes all tests just by being in App.js. Separate into components, and passing down props.
class App extends Component {
  constructor(){
    super();

    this.state = {
      cartArr: [],
      subtotal: 0,

      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    };
  }

  handleAddToCart=(product)=>{
    this.setState({
      cartArr: [ ...this.state.cartArr, product ],
      subtotal: this.state.subtotal + product.price,
    })
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode, subtotal } = this.state;
    if (firstName.length === 0 || lastName.length === 0 || email.length === 0){
      return alert("Input is not valid");
    } else if (creditCard.length !== 16 || isNaN(creditCard)){
      return alert("Credit card number is not valid");
    } else if (zipCode.length !== 5 || isNaN(zipCode)){
      return alert("Zip code is not valid");
    } else {
      return alert(`Purchase complete ${formatPrice(subtotal * 1.05)}`);
    }
  }

  render(){
    let productDataElArr = data.map((product)=>{
      let { id, name, price, img, description } = product;
      return (
        // Product (component)
        <div key={ id }>
          <h3>{ name }</h3>
          <div>Price: {formatPrice(price)}</div>
          <button type="submit" onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
          <div>
            <img 
              src={ img }
              alt={ name }
            />
          </div>
          <div>
            { description }
          </div>
        </div>

      )
    })

    let cartElArr = this.state.cartArr.map((productsInCart)=>{
      let { name, price } = productsInCart;
      // Cart Item (component)
      return <li key={productsInCart.id}>{ name }: { formatPrice(price) }</li>
    })

    return(
      <div id="app">
        {/* All Products (component) */}
        <div id="products-container">
          <h1>My Garage Sale Review</h1>
          <div className="products">
            {productDataElArr}
          </div>
        </div>

        <div>
          {/* Cart (component) */}
          <h1>Cart</h1>
            <ul>
              {cartElArr}
            </ul>
            <h2>Subtotal: { formatPrice(this.state.subtotal) }</h2>
            <h2>Tax: { formatPrice(this.state.subtotal * 0.05) }</h2>
            <h2>Total: { formatPrice(this.state.subtotal * 1.05) }</h2>

          {/* Checkout (component) */}
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
      </div>
    )
  }
}

export default App;
