import React, { Component } from "react";
import "../css/styles.css";
import LogInForm from "../components/LogInForm";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { Alert } from "react-bootstrap";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    async handleRegister(username, password) {
        await this.props.registerUser(username, password);
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {this.props.user && this.props.user.data === "User Already Exists" ?
                    <Alert variant="danger">This user already exists</Alert>
                    : <div></div>
                }
                <div style={{ marginTop: "2%" }} className="App">
                    <h2>Register</h2>
                    <hr style={{ marginBottom: "2%" }} className="line" />
                    <LogInForm handleClick={this.handleRegister} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userRegister
    }
};
const mapDispatchToProps = {
    registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);