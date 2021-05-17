import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    toast,
    ToastContainer
} from 'mdbreact';

import SocialMedia from '../../res/SocialMedia';

import apiServices from '../../services/apiServices';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            subject: null,
            message: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();

        // let data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     subject: this.state.subject,
        //     message: this.state.subject
        // };

        let data = {
            name: "Stefan Fischer",
            email: "RevenantEverest@gmail.com",
            subject: "I want to work with you!",
            message: "I'd like to get in contact to get a quote from your services"
        };
        apiServices.handleFormSubmission(data)
        .then(() => {
            this.toggleSuccessNotify();
            document.querySelector("#contact-form").reset();
        })
        .catch(err => {
            this.toggleFailureNotify("Form failed to submit");
            console.error(err);
        });
    };

    toggleSuccessNotify = () => toast.success("Added Successfully", { position: "top-right", autoClose: 5000 });
    toggleFailureNotify = (reason) => toast.error(`ERROR: ${reason}`, { position: "top-right", autoClose: 5000 });

    render() {
        const { className, fluid } = this.props;
        return(
            <div id="Contact">
            <Container fluid={fluid} className={className}>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Contact us
            </h2>
            <Row className="justify-content-center">
                {/* <Col lg={5} className="lg-0 mb-4">
                <MDBCard>
                    <MDBCardBody>
                    <form id="contact-form" onSubmit={this.handleSubmit}>
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
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="tag"
                        label="Subject"
                        iconClass="grey-text"
                        type="text"
                        id="form-subject"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="md-form">
                        <MDBInput
                        icon="pencil-alt"
                        label="Message"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn color="elegant" className="sandre-color">
                            <input type="submit" value="Submit" />
                        </MDBBtn>
                    </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </Col> */}
                {/* <Col lg={2} /> */}
                <Col lg={5}>
                <MDBCard>
                    <MDBCardBody>
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
                    </MDBCardBody>
                </MDBCard>
                </Col>
            </Row>
            </Container>

            <ToastContainer position="top-center" autoClose={5000} newestOnTop rtl={false} />
            </div>
        );
    }
};

export default Contact;