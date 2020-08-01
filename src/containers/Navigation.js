import React, { Component } from "react";
import "../css/styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import MenPage from "./MenPage";
import WomenPage from "./WomenPage";
import Product from "./Product";
import Authentication from "./Authentication";
import Register from "./Register";
import Basket from "./Basket";
import { connect } from "react-redux";
import UserPage from "./UserPage";

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Navbar style={{ margin: 0 }} bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Clothing Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" exact to="/men">Men</NavLink>
                            <NavLink className="nav-link" exact to="/women">Women</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse style={{ margin: 0 }} id="justify-content-end">
                        <Nav>
                            <NavLink className="nav-link" exact to="/basket"><i className="fas fa-shopping-basket"></i></NavLink>
                            {/* <NavLink className="nav-link" exact to="/user/login"><i className="fas fa-user"></i></NavLink> */}
                            {this.props.userLogin && this.props.userLogin.data === "Successfully Authenticated" ?
                                <NavLink className="nav-link" exact to="/user"><i className="fas fa-user"></i></NavLink>
                                : <NavLink className="nav-link" exact to="/user/login"><i className="fas fa-user"></i></NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" render={
                        (props) => <Home {...props} />
                    } />
                    <Route exact path="/product/:id/:image" render={(props) => <Product {...props} />} />
                    <Route exact path="/men">
                        <MenPage />
                    </Route>
                    <Route exact path="/women">
                        <WomenPage />
                    </Route>
                    <Route exact path="/user/login" render={
                        () => {
                            if (this.props.userLogin) {
                                if (this.props.userLogin.data === "Successfully Authenticated") {
                                    return <Redirect to="/" />
                                }
                                else {
                                    return <Authentication />
                                }
                            }
                            else {
                                return <Authentication />
                            }
                        }
                    } />
                    <Route exact path="/user/register" render={
                        () => {
                            if (this.props.userRegister && this.props.userRegister.data === "User Created") {
                                return <Redirect to="/user/login" />
                            }
                            else {
                                return <Register />
                            }
                        }
                    } />
                    <Route exact path="/basket">
                        <Basket />
                    </Route>
                    <Route exact path="/user">
                        <UserPage/>
                    </Route>
                    <Route render={
                        () => <h3 style={{ marginTop: "2%", textAlign: "center" }}>Page not found</h3>
                    } />
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userLogin: state.user.userLogin,
        userRegister: state.user.userRegister
    }
}
export default connect(mapStateToProps)(Navigation);