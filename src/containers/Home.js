import React, { Component } from 'react';
import '../css/styles.css';
import ImageShowcase from "../components/ImageShowcase";
import ProductShowcase from "../components/ProductShowcase";
import { fetchNewProducts } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";
import config from "../config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  async componentDidMount() {
    if (this.props.user && this.props.user.data === "Successfully Authenticated") {
      if (config.popup) {
        this.setState({ visible: true }, () => {
          window.setTimeout(() => {
            this.setState({ visible: false })
          }, 2000)
        })
        config.popup = false;
      }
    }
    if (this.props.newProducts === null) {
      await this.props.fetchNewProducts();
    }
  }
  render() {
    return (
      <div className="App">
        {/* The carousel  TODO : add the images for the carousel to a database*/}
        <div>
          {this.state.visible ?
            <Alert style={{ position: "absolute", zIndex: 1, width: "100%" }} variant="success">Successfully Loged in</Alert>
            : <div></div>
          }
          <ImageShowcase />
        </div>
        {/* New releases section */}
        <div style={{ marginTop: "2%" }}>
          <h2>New Releases</h2>
          <hr className="line" />
          {this.props.newProducts !== null ?
            <div>
              {this.props.newProducts.map((data, i) =>
                <NavLink key={i} exact to={`/product/:${data._id}/:${data.image}`}><ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} /></NavLink>
              )}
            </div>
            : <div></div>
          }
        </div>
        {/* Most popular section */}
        {/* For now it's the new releases. TODO : implement most popular system */}
        <div>
          <h2>Most Popular</h2>
          <hr className="line" />
          {this.props.newProducts !== null ?
            <div>
              {this.props.newProducts.map((data, i) =>
                <NavLink key={i} exact to={`/product/:${data._id}/:${data.image}`}>
                  <ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} />
                </NavLink>
              )}
            </div>
            : <div></div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newProducts: state.products.newProducts,
    user: state.user.userLogin
  }
};
const mapDispatchToProps = {
  fetchNewProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);