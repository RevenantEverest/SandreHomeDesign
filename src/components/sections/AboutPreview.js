import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

import Headshot from '../../res/images/Headshot1.jpg';

import SocialMedia from '../../res/SocialMedia';

class AboutPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, fluid } = this.props;
        return(
            <div className="AboutPreview">
                <Container fluid={fluid} className={`${className}`}>
                <Row>
                    <Col>
                    <MDBCard>
                    <MDBCardBody>
                    <Row>
                        <Col lg={6} mg={6} sm={12} xs={12}>
                        <MDBCardText className="black-text">
                        <h3>Sophia Aksoy</h3>
                        <h6 className="grey-text">Founder</h6>
                        <MDBBtn color="elegant" className="sandre-color ml-0" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn color="elegant" className="sandre-color" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn color="elegant" className="sandre-color" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook}>
                            <MDBIcon fab icon="yelp" />
                        </MDBBtn>
                        <br />
                        <br />
                        <p>Sophia Martorella Aksoy is the owner and founder of Sandre Home Design Inc. </p>
                        <p>
                        Sophia offers her services as a full-service window treatment specialist. From measure to install, 
                        Sophia provides a personal touch to her client’s custom treatments.  Sophia offers soft treatments, 
                        hard treatments, upholstery services, fabrics, trims and much more. 
                        </p>
                        <p>
                        With over 20 years in business and repeat customers, Sophia will be happy to help you with your 
                        project. She will work with each client’s budget. Many other decorating services are available. They 
                        include paint selection, furniture and accessory shopping and in-home placement.
                        </p>
                        <p>Please call for your complimentary “in – home “consultation today!</p>
                        <Link to="/about">
                        <MDBBtn color="elegant" className="sandre-color ml-0" size="md">Read More</MDBBtn>
                        </Link>
                        </MDBCardText>
                        </Col>
                        <Col lg={2} className="mt-4" />
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <img className="img-fluid" src={Headshot} alt="" />
                        </Col>
                    </Row>
                    </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default AboutPreview;