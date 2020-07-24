import React, { Component } from "react";
import "../css/styles.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProductById, unmountProductById } from "../actions";
import ProductDetails from "../components/ProductDetails";
// Global variables

let id = "";

class Product extends Component {
    constructor(props) {
        super(props);
        id = this.props.match.params.id;
        id = id.replace(":", "");
        console.log(id);
    }
    async componentDidMount() {
        await this.props.fetchProductById(id);
    }
    componentWillUnmount() {
        this.props.unmountProductById();
    }
    render() {
        let x = this.props.match.params.image.replace(":", "");
        let src = `http://localhost:8081/${x}`;
        var fixedSrc = src.replace("/\src", "");
        return (
            <div style={{ marginTop: "2%" }} className="App">
                {this.props.product && this.props.product.image ?
                    <Container fluid>
                        <Row>
                            <Col>
                                <Image style={{ width: "31.25rem", height: "43.75rem" }} src={fixedSrc} alt="Product" />
                            </Col>
                            <Col>
                                <ProductDetails name={this.props.product.name} price={this.props.product.price} description={this.props.product.description}/>
                        </Col>
                        </Row>
                    </Container> :
                    <div></div>
                }
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