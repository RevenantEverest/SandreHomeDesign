import React, { Component } from 'react';
import '../css/About.css';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

import Headshot from '../../res/images/Headshot2.jpg';

import SocialMedia from '../../res/SocialMedia';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, fluid } = this.props;
        return(
            <div id="About">
                <Container fluid={fluid} className={className}>
                <Row>
                    <Col>
                    <MDBCard>
                    <MDBCardBody>
                    <Row>
                        <Col lg={6} mg={6} sm={12} xs={12}>
                        <MDBCardText className="black-text">
                        <h3>Sophia Aksoy</h3>
                        <h6 className="grey-text">Founder</h6>
                        <MDBBtn color="elegant" className="sandre-color ml-0" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.facebook.url}>
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn color="elegant" className="sandre-color" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.instagram.url}>
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn color="elegant" className="sandre-color" floating role="a" target="_blank" rel="noopener noreferrer" href={SocialMedia.linkedin.url}>
                            <MDBIcon fab icon="linkedin" />
                        </MDBBtn>
                        <br />
                        <br />
                        <p>
                        Sophia is a graduate of the Fashion Institute of Technology in NYC. She graduated with a degree in Patternmaking 
                        Technology and worked for over 20 years in NY’s garment center.
                        </p>
                        <p>
                        This vast experience has contributed to Sophia’s ability to understand fabrics and their properties, so you are 
                        assured of the best result for your custom window soft treatments.
                        </p>
                        <p>
                        Sophia has been sewing since she is 9 years old and her creativity flows into many areas. She understands measuring, 
                        fabrication, and installation. She offers selected design services as well. 
                        </p>
                        <p>
                        Sophia is the proud parent of her son Andre, a recent college graduate.
                        She enjoys many creative pastimes which include painting with watercolors and creating apparel.
                        </p>
                        </MDBCardText>
                        </Col>
                        <Col lg={2} />
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

export default About;