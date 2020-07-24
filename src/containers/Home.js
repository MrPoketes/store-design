import React, { Component } from 'react';
import '../css/styles.css';
import ImageShowcase from "../components/ImageShowcase";
import ProductShowcase from "../components/ProductShowcase";
import { fetchNewProducts } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Home extends Component {
  async componentDidMount() {
    await this.props.fetchNewProducts();
  }
  render() {
    return (
        <div className="App">
          {/* The carousel  TODO : add the images for the carousel to a database*/}
          <div>
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
  }
};
const mapDispatchToProps = {
  fetchNewProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);