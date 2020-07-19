import React from "react";
import pic2 from "../images/home-pics/pic2.jpg";
import pic3 from "../images/home-pics/pic3.jpg";
import {Carousel} from "react-bootstrap";
const ImageShowcase = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ height: "35rem" }}>
                    <img style={{ height: "35rem" }}
                        className="w-100"
                        src={pic2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: "35rem" }}>
                    <img style={{ height: "35rem" }}
                        className="w-100"
                        src={pic3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default ImageShowcase;