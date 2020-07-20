import React,{Component} from "react";
import "../css/styles.css";
import {Container,Row,Col} from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import ProductShowcase from "../components/ProductShowcase";
import womenscoat2 from "../images/womens/womens-coat2.jpg";
import womenshoodie1 from "../images/womens/womens-hoodie1.jpg";
import womenssunglasses1 from "../images/womens/womens-sunglasses1.jpg";
import womenstop1 from "../images/womens/womens-top1.jpg";
export default class WomenPage extends Component{
    render(){
        return (
            <div className="App">
                <Container style={{marginTop:"2%"}} fluid>
                    <Row>
                        <Col sm={2}>
                            <SideMenu/>
                        </Col>
                        <Col>
                            <div>
                                <ProductShowcase image={womenscoat2} description={"Coat"} price={"80"} />
                                <ProductShowcase image={womenshoodie1} description={"Cyan Hoodie"} price={"65"} />
                                <ProductShowcase image={womenssunglasses1} description={"Sunglasses"} price={"50"} />
                                <ProductShowcase image={womenstop1} description={"Black Top"} price={"75"} />
                            </div></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}