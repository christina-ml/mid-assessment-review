import { Component } from "react";
import "./App.css";
import data from './data/productData'

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
        <h3>{product.name}</h3>
        
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
