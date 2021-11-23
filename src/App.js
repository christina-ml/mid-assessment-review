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

  handleAddToCart=()=>{
    console.log("trigger");
    console.log(this.state.cartArr);
  }

  render(){
    let productDataElArr = data.map((product)=>{
      let { name, price, img, description } = product;
      return (
        <div>
          <h3>{ name }</h3>
          <div>Price: {formatPrice(price)}</div>
          <button onClick={this.handleAddToCart}>Add To Cart</button>
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

    return(
      <div id="app">
        <h1>My Garage Sale Review</h1>
        <div className="products">
          {productDataElArr}
        </div>
      </div>
    )
  }
}

export default App;
