import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import { getBasket, removeEverything, removeOne, updateBasket, unmountBasket } from "../actions";
import CheckoutShowcase from "../components/CheckoutShowcase";
import Checkout from "../components/Checkout";
import config from "../config/index.js";

// Global variables
let username = "";

class Basket extends Component {
    constructor(props) {
        super(props);
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            username = JSON.parse(this.props.user.config.data).username;
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }
    async componentDidMount() {
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            await this.props.getBasket(username);
        }
    }
    async handleRemove() {
        config.confirm = true;
        await this.props.removeEverything(username);
    }
    async changeQuantity(itemId, quantity) {
        if (quantity === 0) {
            await this.props.removeOne(username, itemId)
            setTimeout(async () => {
                await this.props.getBasket(username);
            }, 500);
        }
        else {
            await this.props.updateBasket(username, itemId, quantity)
            setTimeout(async () => {
                await this.props.getBasket(username)
            }, 500);
        }
    }
    componentWillUnmount() {
        this.props.unmountBasket();
    }
    render() {
        return (
            <div style={{ marginTop: "2%" }} className="App">
                {this.props.user && this.props.user.data === "Successfully Authenticated" ?
                    <Container fluid>
                        {this.props.userBasket && this.props.userBasket.size > 0 ?
                            <Row>
                                <Col>
                                    {this.props.userBasket.basket.map((item, i) =>
                                        <CheckoutShowcase key={i} fullPrice={item.fullPrice} priceOne={item.priceOne} quantity={item.quantity} name={item.name} itemId={item.itemId} change={this.changeQuantity} />
                                    )}
                                </Col>
                                <Col>
                                    <Checkout items={this.props.userBasket.size} total={this.props.userBasket.total} remove={this.handleRemove} />
                                </Col>
                            </Row>
                            : <div>
                                <h2>Your Basket Is Empty</h2>
                            </div>
                        }
                    </Container>
                    : <div>
                        <h2>Please Log In To View Your Basket</h2>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userLogin,
        userBasket: state.basket.basket,
    }
};
const mapDispatchToProps = {
    getBasket,
    removeEverything,
    removeOne,
    updateBasket,
    unmountBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);