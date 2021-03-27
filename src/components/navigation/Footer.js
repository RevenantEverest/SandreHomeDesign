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
                    <p>
                    This is some sample flavor text that will be changed before production. It is meant
                    to display some text underneath the company name.
                    </p>
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
                    <a href="#!">Get a Quote</a>
                    </p>
                    <p>
                    <a href="#!">Portfolio</a>
                    </p>
                    <p>
                    <a href="#!">About</a>
                    </p>
                    <p>
                    <a href="#!">Help</a>
                    </p>
                </Col>
                <Col md={4} lg={3} xl={3} className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                    </h6>
                    <hr className="pink darken-1 accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    <p>
                    <i className="fa fa-home mr-3" /> New York, NY 10012, US
                    </p>
                    <p>
                    <i className="fa fa-envelope mr-3" /> sophiaaksoy@gmail.com
                    </p>
                    <p>
                    <i className="fa fa-phone mr-3" /> + 01 234 567 88
                    </p>
                    <p>
                    <i className="fa fa-print mr-3" /> + 01 234 567 89
                    </p>
                </Col>
                </Row>
            </Container>
            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-fb mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                    <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-tw mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                    <i className="fab fa-twitter" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                    <i className="fab fa-instagram" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-li mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                    <i className="fab fa-linkedin-in" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-dribbble mx-1 sandre-color" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                    <i className="fab fa-pintrest" />
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