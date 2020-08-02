import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/styles.css";

const Checkout = (props) => {
    return (
        <div>
            <div>
                <h4 style={{ width: "20%", textAlign: "left", marginRight: "15%", display: "inline-block" }}>{props.items} items</h4>
                <h4 style={{ width: "20%", textAlign: "right", display: "inline-block" }}>{props.total} $</h4>
            </div>
            <div style={{ marginTop: "1%" }}>
                <h4 style={{ textAlign: "left", width: "20%", marginRight: "15%", display: "inline-block" }}>Shipping</h4>
                <h4 style={{ width: "20%", textAlign: "right", display: "inline-block" }}>0 $</h4>
            </div>
            <hr style={{ width: "50%" }} className="line" />
            <div style={{ marginTop: "2%" }}>
                <Form>
                    <Form.Group style={{ marginRight: "5%", display: "inline-block" }}>
                        <Form.Control type="text" placeholder="Discount Code" />
                    </Form.Group>
                    <Button style={{ display: "inline-block" }} variant="success">Apply</Button>
                </Form>
            </div>
            <hr style={{ width: "50%" }} className="line" />
            <h4>Total For Everything: {props.total} $</h4>
            <Button onClick={() => props.remove()} variant="success">Checkout</Button>
        </div>
    )
}
export default Checkout;