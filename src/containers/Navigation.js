import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router,NavLink,Switch,Route } from 'react-router-dom';
import Home from "./Home";

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" exact to="/undefined">Something</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}