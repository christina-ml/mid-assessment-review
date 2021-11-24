import { Component } from "react";
import "./App.css";
import data from './data/productData'
import formatPrice from './helpers/formatPrice'

console.log(data);

class App extends Component {
  constructor(){
    super();

    this.state = {
      cartArr: [],
      subtotal: 0,
    }
  }

  /* 
    - Want to add to `subtotal`, and add to `cartArr`.
    - want to pass data to handleAddToCart.
    - if I want to pass information to all of these, use an anonymous arrow function (to prevent it from running immediately), and we want to be able to invoke it.
    - pass it an argument. When we click `handleAddToCart`, we get what we passed in during the onClick.
    - want to pass in entire product information, in case we want to use ANY of the info later.
    - Add this information into `cartArr`. This will be an array, of each item added to cart.
  */
  /*
    - Update subtotal in our state. (see in devTools - components) take current subtotal, and add the product.price to it each time, to add it.
    - Update cartArr - Take the array that's currently in state, and make a new array with it. Using the spread operator. Then add our new product to the new array.
    - Take what's currently there, add the new product to it.
    - (Take what's currently there, add the new subtotal to it.)
    - We have an array of objects now, of what we have added to our cart.

    - Now have an array of each item in our cart, and an array of each product.
    - Next step we focus on - the Form (work on your own)

    - Only use what we need. Passing the whole product makes sense, so we have access to everything & could add other parts of our product together if we ever want to. To anticipate adding more features later, or more functionality later.
  */
  handleAddToCart=(product)=>{
    // console.log(product); // entire object gets passed in.
    this.setState({
      cartArr: [ ...this.state.cartArr, product ],
      subtotal: this.state.subtotal + product.price,
    })
  }

  handleBuyNow=()=>{}

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
      return <li>{ name }: { formatPrice(price) }</li>
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
          <form id="checkout" onSubmit={this.handleBuyNow}>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
            />
             <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
            />
             <label htmlFor="email">Email</label>
            <input 
              type="text" 
            />
             <label htmlFor="creditCard">Credit Card</label>
            <input 
              type="text" 
            />
             <label htmlFor="zipCode">Zip Code</label>
            <input 
              type="text" 
            />
            <button type="submit">Buy Now</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
