import { Component } from "react";
import "./App.css";
import data from './data/productData'
import formatPrice from './helpers/formatPrice'

console.log(data);

class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    let productDataElArr = data.map((product)=>{
      return (
        <div>
          <h3>{product.name}</h3>
          <div>Price: {formatPrice(product.price)}</div>
          <button>Add To Cart</button>
          <img 
            src={product.img}
            alt={product.name}
          />
          <div>
            {product.description}
          </div>
        </div>

      )
    })

    return(
      <div>
        <h1>My Garage Sale Review</h1>
        <div>
          {productDataElArr}
        </div>
      </div>
    )
  }
}

export default App;
