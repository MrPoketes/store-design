import React, { Component } from "react";
import "../css/styles.css";
import LogInForm from "../components/LogInForm";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../actions";
class Authentication extends Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    async handleLogin(username,password){
        await this.props.loginUser(username,password);
    }
    render(){
        return(
            <div style={{marginTop:"2%"}} className="App">
                <h2>Login</h2>
                <hr style={{marginBottom:"2%"}} className="line" />
                <NavLink exact to="/"><LogInForm handleClick={this.handleLogin}/></NavLink>
                <h3>Don't have an account?</h3>
                <NavLink exact to="/user/register"><h4>Register Here</h4></NavLink>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user.userLogin
    }
  };
  const mapDispatchToProps = {
    loginUser
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Authentication);