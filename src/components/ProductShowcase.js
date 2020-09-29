import React from "react";
import { Figure } from "react-bootstrap";


const ProductShowcase = (props) => {
    return (
        <Figure style={{ marginRight: "3%" }}>
            <Figure.Image
                width={250}
                height={280}
                alt="image"
                src={props.image}
            />
            <Figure.Caption>
                <h3>{props.name}</h3>
                <h3>{props.price + " $"}</h3>
            </Figure.Caption>
        </Figure>
    )
}
export default ProductShowcase;