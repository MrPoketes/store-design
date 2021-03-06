import React, { Component } from "react";
import "../css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductShowcase from "../components/ProductShowcase";
import { connect } from "react-redux";
import SideMenu from "../components/SideMenu";
import { fetchByGender, fetchCategories } from "../actions";
import { NavLink } from "react-router-dom";

class MenPage extends Component {
    async componentDidMount() {
        await this.props.fetchByGender("men");
        await this.props.fetchCategories("men");
    }
    render() {
        return (
            <div className="App">
                <Container style={{ marginTop: "2%" }} fluid>
                    <Row>
                        <Col sm={2}>
                            {this.props.categories && this.props.menProducts ?
                                <div>
                                    <SideMenu categories={this.props.categories} values={this.props.menProducts} />
                                </div>
                                : <div></div>
                            }
                        </Col>
                        <Col>
                            {this.props.menProducts ?
                                <div>
                                    {this.props.menProducts.map((data, i) =>
                                        <NavLink key={i} exact to={`/product/:${data._id}`}>
                                            <ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} />
                                        </NavLink>
                                    )}
                                </div>
                                : <div></div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menProducts: state.products.genderProducts,
        categories: state.products.categories,
    }
}
const mapDispatchToProps = {
    fetchByGender,
    fetchCategories,
}
export default connect(mapStateToProps, mapDispatchToProps)(MenPage);