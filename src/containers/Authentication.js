import React, { Component } from "react";
import "../css/styles.css";
import LogInForm from "../components/LogInForm";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import { Alert } from "react-bootstrap";

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    async componentDidMount() {
        if (this.props.userRegister && this.props.userRegister.data === "User Created") {
            this.setState({ visible: true }, () => {
                window.setTimeout(() => {
                    this.setState({ visible: false })
                }, 2000)
            })
        }
    }
    async handleLogin(username, password) {
        await this.props.loginUser(username, password);
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {this.state.visible ?
                    <Alert variant="success">Successfully Registered</Alert>
                    : <div></div>
                }
                {this.props.userLogin && this.props.userLogin.data === "No User Found" ?
                    <Alert variant="danger">User not found. Please check your username and/or password</Alert> : <div></div>
                }
                <div style={{ marginTop: "2%" }} className="App">
                    <h2>Login</h2>
                    <hr style={{ marginBottom: "2%" }} className="line" />
                    <LogInForm handleClick={this.handleLogin} />
                    <h3>Don't have an account?</h3>
                    <NavLink exact to="/user/register"><h4>Register Here</h4></NavLink>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userLogin: state.user.userLogin,
        userRegister: state.user.userRegister
    }
};
const mapDispatchToProps = {
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);