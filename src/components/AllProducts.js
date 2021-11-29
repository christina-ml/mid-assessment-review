import { Component } from "react";

class AllProducts extends Component{
    // constructor(){
    //     super();

    //     this.state = {}
    // }

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