import React, { Component } from "react";
import "../css/styles.css";
import { Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

// Global variables

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxValue: 0,
            minValue: 999999,
            value: 0
        };
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }
    componentDidMount() {
        let min = this.state.minValue;
        let max = this.state.maxValue;
        Object.keys(this.props.values).forEach((key) => {
            if (this.props.values[key].price > max) {
                max = this.props.values[key].price;
            }
            else if (this.props.values[key].price < min) {
                min = this.props.values[key].price;
            }
        });
        this.setState({
            value: min,
            maxValue: max,
            minValue: min
        });
    }
    componentWillUnmount() {
        this.setState({
            value: 0,
            maxValue: 0,
            minValue: 999999,
        })
    }
    handleSliderChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div>
                {/* Categories */}
                <div>
                    <h3>Categories</h3>
                    <hr className="side-line" />
                    {/* Checkboxes */}
                    <Form style={{ marginLeft: "5%", textAlign: "left" }}>
                        {this.props.categories.map((data, i) =>
                            <Form.Check key={i} type="checkbox" label={data} />
                        )}
                    </Form>
                </div>
                {/* Price */}
                <div style={{ marginTop: "10%" }}>
                    <h3>Price</h3>
                    <hr className="side-line" />
                    {/* Still glitchy */}
                    <RangeSlider
                        value={this.state.value}
                        min={this.state.minValue}
                        max={this.state.maxValue}
                        onChange={changeEvent => this.handleSliderChange(changeEvent)}
                    />
                </div>
                {/* Size */}
                <div style={{ marginTop: "10%" }}>
                    <h3>Size</h3>
                    <hr className="side-line" />
                    {/* Sizes */}
                    <Form style={{ marginLeft: "5%", textAlign: "left" }}>
                        <Form.Check label="S" />
                        <Form.Check label="M" />
                        <Form.Check label="L" />
                    </Form>
                </div>
            </div>
        )
    }
}
