import React, { Component } from "react";
import "../css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import ProductShowcase from "../components/ProductShowcase";
import { connect } from "react-redux";
import { fetchByGender, fetchCategories } from "../actions";
import { NavLink } from "react-router-dom";

class WomenPage extends Component {
    async componentDidMount() {
        await this.props.fetchByGender("women");
        await this.props.fetchCategories("women");
    }
    render() {
        return (
            <div className="App">
                <Container style={{ marginTop: "2%" }} fluid>
                    <Row>
                        <Col sm={2}>
                            {this.props.categories !== null && this.props.womenProducts !== null ?
                                <div>
                                    <SideMenu categories={this.props.categories} values={this.props.womenProducts} />
                                </div>
                                : <div></div>
                            }
                        </Col>
                        <Col>
                            {this.props.womenProducts ?
                                <div>
                                    {this.props.womenProducts.map((data, i) =>
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
        womenProducts: state.products.genderProducts,
        categories: state.products.categories,
    }
}
const mapDispatchToProps = {
    fetchByGender,
    fetchCategories,
}
export default connect(mapStateToProps, mapDispatchToProps)(WomenPage);