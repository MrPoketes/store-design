import React, { Component } from "react";
import "../css/styles.css";
import LogInForm from "../components/LogInForm";
import {connect} from "react-redux";
import {registerUser} from "../actions";
import {NavLink} from "react-router-dom";

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    async handleRegister(username,password){
        await this.props.registerUser(username,password);
    }
    render(){
        return(
            <div style={{marginTop:"2%"}} className="App">
                <NavLink exact to="/user/login"><LogInForm handleClick={this.handleRegister}/></NavLink>
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