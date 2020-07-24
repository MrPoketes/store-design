import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import KidsPage from "./KidsPage";
import MenPage from "./MenPage";
import WomenPage from "./WomenPage";
import "../css/styles.css";
import Product from "./Product";

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
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/product/:id/:image" render={(props)=><Product {...props}/>}/>
                    <Route exact path="/men">
                        <MenPage />
                    </Route>
                    <Route exact path="/women">
                        <WomenPage />
                    </Route>
                    <Route exact path="/kids">
                        <KidsPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}