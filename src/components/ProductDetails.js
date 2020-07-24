import React from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

const ProductDetails = (props) => {
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
                    <Dropdown.Item href="">S</Dropdown.Item>
                    <Dropdown.Item href="">M</Dropdown.Item>
                    <Dropdown.Item href="">L</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div style={{ marginBottom: "2%" }}>
                <Form style={{ width: "5%", marginLeft: "47%"}}>
                    <Form.Group controlId="basicQuantityCounter">
                        <Form.Control placeholder="1" type="text" />
                    </Form.Group>
                </Form>
                <Button onClick={()=>console.log("clicked")} variant="grey lighten-2">Add To Basket</Button>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
export default ProductDetails;