import React, { Component } from "react";
import "../css/styles.css";
import {Form} from "react-bootstrap";

export default class SideMenu extends Component{
    render(){
        return (
            <div>
                {/* Categories */}
                <div>
                    <h3>Categories</h3>
                    <hr className="side-line" />
                    {/* Checkboxes */}
                    <Form style={{marginLeft:"5%",textAlign:"left"}}>
                        {this.props.categories.map((data,i)=>
                            <Form.Check key={i} label={data}/>
                        )}
                    </Form>
                </div>
                {/* Price */}
                <div style={{ marginTop: "10%" }}>
                    <h3>Price</h3>
                    <hr className="side-line" />
                    <div className="my-5">
                        <input type="range" className="custom-range" id="custom-range1" />
                    </div>
                </div>
                {/* Size */}
                <div style={{ marginTop: "10%" }}>
                    <h3>Size</h3>
                    <hr className="side-line" />
                    {/* Sizes */}
                    <Form style={{marginLeft:"5%",textAlign:"left"}}>
                        <Form.Check label="S"/>
                        <Form.Check label="M"/>
                        <Form.Check label="L"/>
                    </Form>
                </div>
            </div>
        )
    }
}
