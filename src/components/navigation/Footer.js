import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBFooter
} from 'mdbreact';

import SocialMedia from '../../res/SocialMedia';

class Footer extends Component {

    render() {
        return(
            <div id="Footer">
            <MDBFooter color="elegant-color-dark" className="page-footer font-small pt-0 mt-5">
            <Container className="pt-5 mb-4 text-center text-md-left">
                <Row className="mt-2 d-flex justify-content-center">
                <Col md={3} lg={4} xl={3} className="mb-4">
                    <Link to="/">
                        <h6 className="text-uppercase font-weight-bold">
                        <strong>Sandre Home Design Inc.</strong>
                        </h6>
                        <hr className="pink darken-1 accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    </Link>
                </Col>
                <Col md={2} lg={2} xl={2} className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Services</strong>
                    </h6>
                    <hr className="pink darken-1 accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    <p>
                    <Link to="/gallery">Cornices</Link>
                    </p>
                    <p>
                    <Link to="/gallery">Drapery</Link>
                    </p>
                    <p>
                    <Link to="/">Pillows</Link>
                    </p>
                    <p>
                    <Link to="/gallery">Roman Shades</Link>
                    </p>
                    <p>
                    <Link to="/gallery">Upholstery</Link>
                    </p>
                    <p>
                    <Link to="/gallery">Valences</Link>
                    </p>
                </Col>
                <Col md={3} lg={2} xl={2} className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Useful links</strong>
                    </h6>
                    <hr className="pink darken-1 accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    <p>
                    <Link to="/gallery">Portfolio</Link>
                    </p>
                    <p>
                    <Link to="/about">About</Link>
                    </p>
                </Col>
                <Col md={4} lg={3} xl={3} className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                    </h6>
                    <hr className="pink darken-1 accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    <p>
                    <i className="fa fa-envelope mr-3" /> sophiaaksoy@gmail.com
                    </p>
                    <p>
                    <i className="fa fa-phone mr-3" /> 516-768-6363
                    </p>
                </Col>
                </Row>
            </Container>
            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-fb mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook.url}>
                    <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.instagram.url}>
                    <i className="fab fa-instagram" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-li mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.linkedin.url}>
                    <i className="fab fa-linkedin-in" />
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://sandrehomedesign.com"> SandreHomeDesign.com </a>
                </Container>
            </div>
            </MDBFooter>
            </div>
        );
    }
};

export default Footer;