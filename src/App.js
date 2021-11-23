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
      let { name, price, img, description } = product;
      return (
        <div>
          <h3>{ name }</h3>
          <div>Price: {formatPrice(price)}</div>
          <button>Add To Cart</button>
          <img 
            src={ img }
            alt={ name }
          />
          <div>
            { description }
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
