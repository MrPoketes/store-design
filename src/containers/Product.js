import React, { Component } from "react";
import "../css/styles.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProductById, unmountProductById } from "../actions";
import ProductDetails from "../components/ProductDetails";
import {addToBasket} from "../actions";
// Global variables

let id = "";
let username = "";

class Product extends Component {
    constructor(props) {
        super(props);
        id = this.props.match.params.id;
        id = id.replace(":", "");
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            username = JSON.parse(this.props.user.config.data).username;
        }
        this.handleAdd =this.handleAdd.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchProductById(id);
    }
    componentWillUnmount() {
        this.props.unmountProductById();
    }
    async handleAdd(quantity){
        if(username!=="" && quantity!==0){
            await this.props.addToBasket(username,this.props.product._id,quantity,this.props.product.price);
        }
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
                                <ProductDetails userData={username} handleAdd={this.handleAdd} name={this.props.product.name} price={this.props.product.price} description={this.props.product.description}/>
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
        user: state.user.userLogin,
        product: state.products.product,
        added: state.basket.added,
    }
};
const mapDispatchToProps = {
    fetchProductById,
    addToBasket,
    unmountProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);