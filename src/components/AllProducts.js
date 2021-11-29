import { Component } from "react";

class AllProducts extends Component{
    render(){
        return(
            <div>
                <h1>My Garage Sale Review</h1>
                <div className="products">
                    {this.props.productDataElArr}
                </div>
            </div>
        )
    }
}

export default AllProducts;