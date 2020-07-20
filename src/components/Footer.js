import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../css/styles.css";

const Footer = () => {
    return (
        <div className="footer">
            <MDBFooter color="grey lighten-2" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer</h5>
                            <p>Some Random stuff</p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Contacts</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <h6><a href="https://github.com/MrPoketes">Github</a></h6>
                                </li>
                                <li className="list-unstyled">
                                    <h6>Phone Number: +6666666</h6>
                                </li>
                                <li className="list-unstyled">
                                    <h6>Email: test@test.com</h6>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/MrPoketes">MrPoketes</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}
export default Footer;