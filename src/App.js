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
  */
  handleAddToCart=(thingFromButton)=>{
    console.log(thingFromButton); // entire object gets passed in.
  }

  render(){
    let productDataElArr = data.map((product)=>{
      let { id, name, price, img, description } = product;
      return (
        <div key={ id }>
          <h3>{ name }</h3>
          <div>Price: {formatPrice(price)}</div>
          <button onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
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
