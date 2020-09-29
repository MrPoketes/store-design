import React from "react";
import { Figure } from "react-bootstrap";

var url = "https://store-design-backend.herokuapp.com/";

const ProductShowcase = (props) => {
    var src = `${url}${props.image}`;
    var fixedSrc = src.replace("/\src", "");
    return (
        <Figure style={{ marginRight: "3%" }}>
            <Figure.Image
                width={250}
                height={280}
                alt="image"
                src={fixedSrc}
            />
            <Figure.Caption>
                <h3>{props.name}</h3>
                <h3>{props.price + " $"}</h3>
            </Figure.Caption>
        </Figure>
    )
}
export default ProductShowcase;