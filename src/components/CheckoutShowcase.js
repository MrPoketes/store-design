import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../css/styles.css";

const CheckoutShowcase = (props) => {
    const [placeholder, setValue] = useState(props.quantity);
    const handleAdding = () => {
        if (placeholder !== 9) {
            setValue(placeholder + 1);
            props.change(props.itemId, placeholder + 1);
        }
    }
    const handleMinus = () => {
        if (placeholder !== 0) {
            setValue(placeholder - 1);
            props.change(props.itemId, placeholder - 1);
        }
    }
    return (
        <div>
            <Form style={{ width: "100%", display: "inline-block" }} >
                <div className="form-row">
                    <Form.Group style={{ width: "100%", textAlign: "right" }}>
                        <Form.Label style={{ marginRight: "5%", display: "inline-block" }} htmlFor="form">{props.name}</Form.Label>
                        <Form.Control style={{ width: "5%", minWidth: "5%", marginRight: "5%", textAlign: "center", display: "inline-block" }} id="form" disabled={true} placeholder={placeholder} type="text" />
                        <i onClick={handleAdding} style={{ display: "inline-block", marginRight: "5%" }} className="fas fa-plus plus"></i>
                        <i onClick={handleMinus} className="fas fa-minus minus"></i>
                        <h5 style={{ display: "inline-block" }}>Price: {props.fullPrice} $</h5>
                    </Form.Group>
                </div>
            </Form>
            <hr style={{ width: "100%" }} className="line" />
        </div>
    )
}
export default CheckoutShowcase;