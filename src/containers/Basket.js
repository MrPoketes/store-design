import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import { Container, Col, Row } from "react-bootstrap";

class Basket extends Component {
    render() {
        return (
            <div style={{ marginTop: "2%" }} className="App">
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
            </div>
        )
    }
}
export default Basket;