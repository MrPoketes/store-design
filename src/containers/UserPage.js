import React, { Component } from "react";
import "../css/styles.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import config from "../config";
// Global variables
var username = "";

class UserPage extends Component {
    constructor(props) {
        super(props);
        if (this.props.user && this.props.user.data === "Successfully Authenticated") {
            username = JSON.parse(this.props.user.config.data).username;
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        config.logedOut = true;
        this.props.logout();
    }
    render() {
        return (
            <div style={{ marginTop: "2%" }} className="App">
                {this.props.user && this.props.user.data === "Successfully Authenticated" ?
                    <div>
                        <h2>Welcome {username}!</h2>
                        <h3>If you would like to logout press the button</h3>
                        <Button onClick={this.handleClick} variant="success">Logout</Button>
                    </div>
                    : <div></div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userLogin,
    }
}
export default connect(mapStateToProps)(UserPage);