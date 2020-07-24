import React, {useState} from "react";
import { Dropdown, Button, Form, Alert } from "react-bootstrap";



const ProductDetails = (props) => {
    const [clicked,setClicked] = useState(false);
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
                <Form style={{ width: "5%", marginLeft: "47%"}}>
                    <Form.Group controlId="basicQuantityCounter">
                        <Form.Control placeholder="1" type="text" />
                    </Form.Group>
                </Form>
                <Button onClick={()=>setClicked(true)} variant="grey lighten-2">Add To Basket</Button>
                {clicked?
                <Alert variant="success">Successfully added product to cart</Alert>
                :<div></div>
            }
            </div>
            <p>{props.description}</p>
        </div>
    )
}
export default ProductDetails;