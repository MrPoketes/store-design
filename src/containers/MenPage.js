import React, { Component } from "react";
import "../css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductShowcase from "../components/ProductShowcase";
import { connect } from "react-redux";
import SideMenu from "../components/SideMenu";
import { fetchByGender, fetchCategories } from "../actions";

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
                            {this.props.categories ?
                            <div>
                                <SideMenu categories={this.props.categories} />
                            </div>
                            :<div></div>
                        }
                        </Col>
                        <Col>
                            {this.props.menProducts ?
                                <div>
                                    {this.props.menProducts.map((data, i) =>
                                        <ProductShowcase key={i} id={data._id} name={data.name} price={data.price} image={data.image} />
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