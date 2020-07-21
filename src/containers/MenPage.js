import React, { Component } from "react";
import "../css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductShowcase from "../components/ProductShowcase";
import menshoodie1 from "../images/mens/mens-hoodie1.jpg";
import mensjacket1 from "../images/mens/mens-jacket1.jpg";
import mensshirt1 from "../images/mens/mens-shirt1.jpg";
import menssuit1 from "../images/mens/mens-suit1.jpg";

import SideMenu from "../components/SideMenu";
export default class MenPage extends Component {
    render() {
        return (
            <div className="App">
                <Container style={{ marginTop: "2%" }} fluid>
                    <Row>
                        <Col sm={2}>
                            <SideMenu />
                        </Col>
                        <Col>
                            <div>
                                <ProductShowcase image={menshoodie1} description={"Black Hoodie"} price={"100"} />
                                <ProductShowcase image={mensjacket1} description={"Jacket"} price={"70"} />
                                <ProductShowcase image={mensshirt1} description={"Denim Shirt"} price={"30"} />
                                <ProductShowcase image={menssuit1} description={"Black Suit"} price={"120"} />
                            </div></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}