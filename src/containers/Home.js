import React, { Component } from 'react';
import '../css/styles.css';
import ImageShowcase from "../components/ImageShowcase";
import ProductShowcase from "../components/ProductShowcase";
import { fetchProducts, fetchNewProducts } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  async componentDidMount() {
    await this.props.fetchNewProducts();
    // await this.props.fetchProducts();
  }
  render() {
    return (
      <div className="App">
        {/* The carousel */}
        <div>
          <ImageShowcase />
        </div>
        {/* New releases section */}
        <div style={{ marginTop: "2%" }}>
          <h2>New Releases</h2>
          <hr className="line" />
          {/* After I implement backend, all of this info will be fetched from a database and then maped to ProductShowcase component */}
          {this.props.newProducts !== null ?
            <div>
              {this.props.newProducts.map((data, i) =>
                <ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} />
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
                <ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} />
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
    newProducts: state.products.newProducts
  }
};
const mapDispatchToProps = {
  fetchNewProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);