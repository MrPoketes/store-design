import React, { Component } from "react";
import "../css/styles.css";
import LogInForm from "../components/LogInForm";
import { connect } from "react-redux";
import { registerUser } from "../actions";

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
            <div style={{ marginTop: "2%" }} className="App">
                <h2>Register</h2>
                <hr style={{ marginBottom: "2%" }} className="line" />
                <LogInForm handleClick={this.handleRegister}/>
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