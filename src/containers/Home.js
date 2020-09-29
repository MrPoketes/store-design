import React, { Component } from 'react';
import '../css/styles.css';
import ImageShowcase from "../components/ImageShowcase";
import ProductShowcase from "../components/ProductShowcase";
import { fetchNewProducts, unmountRemoveEverything, unmountUser} from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";
import config from "../config/index.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      alertConfirm: false,
      alertLogedout: false,
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
    if (this.props.removed && this.props.removed.data === "Removed Successfully") {
      if (config.confirm) {
        this.setState({ alertConfirm: true }, () => {
          window.setTimeout(() => {
            this.setState({ alertConfirm: false })
          }, 2000)
        })
        config.confirm = false;
        await this.props.unmountRemoveEverything();
      }
    }
    if (this.props.user==="Loged out") {
      await this.props.unmountUser();
      this.setState({ alertLogedout: true }, () => {
        window.setTimeout(() => {
          this.setState({ alertLogedout: false })
        }, 2000)
      })
    }
    if (this.props.newProducts === null) {
      await this.props.fetchNewProducts();
    }
  }
  componentWillUnmount() {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.state.visible ?
            <Alert style={{ position: "absolute", zIndex: 1, width: "100%" }} variant="success">Successfully Loged in</Alert>
            : <div></div>
          }
          {this.state.alertConfirm ?
            <Alert style={{ position: "absolute", zIndex: 1, width: "100%" }} variant="success">Thank you for shopping</Alert>
            : <div></div>
          }
          {this.state.alertLogedout ?
            <Alert style={{ position: "absolute", zIndex: 1, width: "100%" }} variant="success">Successfully Loged out</Alert>
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
                <NavLink key={i} exact to={`/product/:${data._id}`}><ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} /></NavLink>
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
                <NavLink key={i} exact to={`/product/:${data._id}`}>
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
    user: state.user.userLogin,
    removed: state.basket.removedAll,
  }
};
const mapDispatchToProps = {
  fetchNewProducts,
  unmountRemoveEverything,
  unmountUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);