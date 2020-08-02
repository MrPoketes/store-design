import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Alert } from "react-bootstrap";

export default class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        var username = ReactDOM.findDOMNode(this.refs.username).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;
        if (username !== "" && password !== "") {
            this.setState({
                check: true
            })
            this.props.handleClick(username, password);
        }
        else {
            this.setState({
                check: false
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.check ?
                    <div></div>
                    : <Alert variant="danger">Please fill out every section</Alert>
                }
                <Form style={{ width: "30%", marginLeft: "35%", marginRight: "33%" }}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control ref="username" type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.handleSubmit} style={{ marginBottom: "5%" }} variant="success">Login</Button>
                </Form>
            </div>
        )
    }
}