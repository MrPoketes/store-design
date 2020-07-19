import React, { Component } from 'react';
import '../css/styles.css';
import ImageShowcase from "../components/ImageShowcase";
import ProductShowcase from "../components/ProductShowcase";
import new1 from "../images/new-releases/new1.jpg";
import new2 from "../images/new-releases/new2.jpg";
import new3 from "../images/new-releases/new3.jpg";
import new4 from "../images/new-releases/new4.jpg";

export default class Home extends Component {
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
          <div>
            <ProductShowcase image={new1} description={"Black Top"} price={"75"} />
            <ProductShowcase image={new2} description={"Sunglasses"} price={"50"} />
            <ProductShowcase image={new3} description={"Cyan Hoodie"} price={"65"} />
            <ProductShowcase image={new4} description={"Wristwatch"} price={"100"} />
          </div>
        </div>
        {/* Most popular section */}
        <div>
          <h2>New Releases</h2>
          <hr className="line" />
        </div>
      </div>
    );
  }
}

