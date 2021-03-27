import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

import SocialMedia from '../../res/SocialMedia';

class Contact extends Component {

    render() {
        const { className, fluid } = this.props;
        return(
            <div id="Contact">
            <Container fluid={fluid} className={className}>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Contact us
            </h2>
            <p className="text-center w-responsive mx-auto pb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <Row>
                <Col lg={5} className="lg-0 mb-4">
                <MDBCard>
                    <MDBCardBody>
                    <div className="form-header sandre-color accent-1">
                        <h3 className="mt-2">
                        <MDBIcon icon="envelope" /> Write to us:
                        </h3>
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        id="form-name"
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="tag"
                        label="Subject"
                        iconClass="grey-text"
                        type="text"
                        id="form-subject"
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="pencil-alt"
                        label="Message"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn color="elegant" className="sandre-color">Submit</MDBBtn>
                    </div>
                    </MDBCardBody>
                </MDBCard>
                </Col>
                <Col lg={2} />
                <Col lg={5}>
                <br />
                <MDBBtn tag="a" floating color="elegant" className="sandre-color accent-1">
                    <MDBIcon icon="phone" />
                </MDBBtn>
                <p className="d-inline" style={{ fontWeight: 600 }}>516-768-6363</p>
                <br />
                <MDBBtn tag="a" floating color="elegant" className="sandre-color accent-1">
                    <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="d-inline" style={{ fontWeight: 600 }}>sophia@sandrehomedesign.com</p>
                <hr className="mb-2 mt-2" />
                <MDBBtn tag="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook.url} floating color="elegant" className="sandre-color accent-1">
                    <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <p className="d-inline" style={{ fontWeight: 600 }}>Facebook.com/{SocialMedia.facebook.handle}</p>
                <br />
                <MDBBtn tag="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.instagram.url} floating color="elegant" className="sandre-color accent-1">
                    <MDBIcon fab icon="instagram" />
                </MDBBtn>
                <p className="d-inline" style={{ fontWeight: 600 }}>@{SocialMedia.instagram.handle}</p>
                <br />
                <MDBBtn tag="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.linkedin.url} floating color="elegant" className="sandre-color accent-1">
                    <MDBIcon fab icon="linkedin" />
                </MDBBtn>
                <p className="d-inline" style={{ fontWeight: 600 }}>Linkedin.com/in/{SocialMedia.linkedin.handle}</p>
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
};

export default Contact;