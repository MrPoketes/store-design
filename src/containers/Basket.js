import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import { getBasket } from "../actions";

let username = "";

class Basket extends Component {
    constructor(props) {
        super(props);
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            username = JSON.parse(this.props.user.config.data).username;
        }
    }
    async componentDidMount() {
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            await this.props.getBasket(username);
        }
    }
    render() {
        return (
            <div style={{ marginTop: "2%" }} className="App">
                {this.props.user && this.props.user.data === "Successfully Authenticated" ?
                    <Container fluid>
                        <Row>
                            <Col>
                                <h2>Product Showcase</h2>
                            </Col>
                            <Col>
                                <h2>Price and Checkout</h2>
                            </Col>
                        </Row>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);