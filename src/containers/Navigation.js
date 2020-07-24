import React, { Component } from "react";
import "../css/styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import KidsPage from "./KidsPage";
import MenPage from "./MenPage";
import WomenPage from "./WomenPage";
import Product from "./Product";
import Authentication from "./Authentication";
import Register from "./Register";

export default class Navigation extends Component {
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
                            <NavLink className="nav-link" exact to="/kids">Kids</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse style={{margin:0}} id="justify-content-end">
                        <Nav>
                            <NavLink className="nav-link" exact to="/user/login"><i className="fas fa-user"></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/product/:id/:image" render={(props) => <Product {...props} />} />
                    <Route exact path="/men">
                        <MenPage />
                    </Route>
                    <Route exact path="/women">
                        <WomenPage />
                    </Route>
                    <Route exact path="/kids">
                        <KidsPage />
                    </Route>
                    <Route exact path="/user/login">
                        <Authentication />
                    </Route>
                    <Route exact path="/user/register">
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}