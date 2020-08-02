import React, { useState, useRef } from "react";
import { Dropdown, Button, Form, Alert } from "react-bootstrap";

const ProductDetails = (props) => {
    const [clicked, setClicked] = useState(false);
    const [placeholder, setValue] = useState(0);
    const quantity = useRef(0);
    const handleAdding = () => {
        setValue(placeholder + 1);
        quantity.current += 1;
    }
    const handleMinus = () => {
        if (quantity.current !== 0) {
            quantity.current -= 1;
            setValue(placeholder - 1);
        }
    }
    return (
        <div>
            <h3 style={{ marginBottom: "2%" }}>{props.name}</h3>
            <h3 style={{ marginBottom: "2%" }}>{props.price + " $"}</h3>
            <h3 style={{ marginBottom: "2%" }}>Size</h3>
            <Dropdown style={{ marginBottom: "2%" }}>
                <Dropdown.Toggle variant="grey lighten-2" id="dropdown-basic">
                    Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >S</Dropdown.Item>
                    <Dropdown.Item >M</Dropdown.Item>
                    <Dropdown.Item >L</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div style={{ marginBottom: "2%" }}>
                <Form style={{ width: "5%", marginLeft: "47%" }}>
                    <Form.Group controlId="basicQuantityCounter">
                        <Form.Control disabled={true} placeholder={placeholder} type="text" />
                        <i style={{ marginRight: "15%" }} onClick={handleAdding} className="fas fa-plus"></i>
                        <i className="fas fa-minus" onClick={handleMinus}></i>
                    </Form.Group>
                </Form>
                <Button onClick={() => {
                    setClicked(true);
                    props.handleAdd(quantity.current);
                }} variant="grey lighten-2">Add To Basket</Button>
                {clicked ?
                    <div>
                        {props.userData !== "" ?
                            <div>
                                {quantity.current !== 0 ?
                                    <Alert variant="success">Successfully added product to cart</Alert>
                                    : <Alert variant="danger">Please select a valid quantity</Alert>
                                }
                            </div> :
                            <Alert variant="danger">Please First Log In</Alert>
                        }
                    </div>
                    : <div></div>
                }
            </div>
            <p>{props.description}</p>
        </div>
    )
}
export default ProductDetails;