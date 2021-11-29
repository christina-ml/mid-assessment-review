import { Component } from "react";
import "./App.css";
import data from './data/productData';
import formatPrice from './helpers/formatPrice';
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends Component {
  constructor(){
    super();

    this.state = {
      cartArr: [],
      subtotal: 0,
    };
  }

  handleAddToCart=(product)=>{
    this.setState({
      cartArr: [ ...this.state.cartArr, product ],
      subtotal: this.state.subtotal + product.price,
    })
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
          <AllProducts productDataElArr={productDataElArr}/>  
        </div>
        <div>
          {/* Cart (component) */}
          <Cart cartElArr={cartElArr} subtotal={this.state.subtotal}/>
          {/* Checkout (component) */}
          <Checkout subtotal={this.state.subtotal}/>
        </div>
      </div>
    )
  }
}

export default App;
