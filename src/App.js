import { Component } from "react";
import "./App.css";
import data from './data/productData'
import formatPrice from './helpers/formatPrice'

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

  // handleChange=(event)=>{
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  handleFirstNameChange=(e)=>{
    this.setState({
      firstName: e.target.value,
    })
  }



  handleSubmit=(event)=>{
    event.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;

    if (firstName.length === 0) {
      window.alert("Input is not valid");
      return;
    }
    if (lastName.length === 0) {
      window.alert("Input is not valid");
      return;
    }
    if (email.length === 0) {
      window.alert("Input is not valid");
      return;
    }
    if (creditCard.length !== 16 || isNaN(creditCard)) {
      window.alert("Credit card number is not valid");
      return;
    }
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      window.alert("Zip code is not valid");
      return;
    }

    window.alert(`Purchase complete ${formatPrice(this.state.subtotal * 1.05)}`)
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
          <form>
            <div className="input-container">
              <label htmlFor="first-name">First Name</label>
              <br />
              <input 
                type="text" 
                id="first-name" 
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="last-name">Last Name</label>
              <br />
              <input 
                type="text" 
                id="last-name"
                value={this.state.lastName}
                // onChange={} 
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <br />
              <input 
                type="text" 
                id="email" 
                value={this.state.email}
                // onChange={}
              />
            </div>
            <div className="input-container">
              <label htmlFor="credit-card">Credit Card</label>
              <br />
              <input 
                type="text" 
                id="credit-card" 
                value={this.state.creditCard}
                // onChange={}
              />
            </div>
            <div className="input-container">
              <label htmlFor="zip-code">Zip Code</label>
              <br />
              <input 
                type="text" 
                id="zip-code" 
                value={this.state.zipCode}
                // onChange={}
              />
            </div>
            <button type="submit">Buy Now</button>
          </form>


            {/* <form id="checkout" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="creditCard">Credit Card</label>
              <input 
                type="text" 
                placeholder="Credit Card"
                name="creditCard"
                value={this.state.creditCard}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input 
                type="text" 
                placeholder="Zip Code"
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Buy Now</button> 
          </form>*/}
        </div>
      </div>
    )
  }
}

export default App;
