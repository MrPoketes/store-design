import React, { Component } from "react";
import "../css/styles.css";
import {connect} from "react-redux";
import { fetchProductById, unmountProductById} from "../actions";
// Global variables

let id = "";

class Product extends Component{
    constructor(props){
        super(props);
        id = this.props.match.params.id;
        id = id.replace(":","");
        console.log(id);
    }
    async componentDidMount(){
        await this.props.fetchProductById(id);
    }
    componentWillUnmount(){
        this.props.unmountProductById();
    }
    render(){
        return(
            <div className="App">
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>

                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      product: state.products.product
    }
  };
  const mapDispatchToProps = {
    fetchProductById,
    unmountProductById,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);