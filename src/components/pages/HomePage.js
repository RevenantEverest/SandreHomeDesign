import React, { Component } from 'react';
import '../css/HomePage.css';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse,
    MDBBtn
} from 'mdbreact';

import AboutPreview from '../sections/AboutPreview';
import Contact from './Contact';

import Logo from '../../res/images/Logo.png';
import Video from '../../res/videos/WebsiteVideo.mp4';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }
    
    onClick =() => this.setState({ collapse: !this.state.collapse });

    render() {
        const overlay = (
          <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}
            onClick={this.handleTogglerClick}
          />
        );
    
        const { collapsed } = this.state;
        return (
            <div id="HomePage">
            <div>
                <MDBNavbar
                color="pink darken-1"
                dark
                expand='md'
                fixed='top'
                scrolling
                transparent
                >
                <Container>
                    <MDBNavbarBrand>
                    <MDBNavLink to='/'>
                        <strong className='white-text'>Sandre Home Design Inc.</strong>
                    </MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.handleTogglerClick} />
                    <MDBCollapse isOpen={collapsed} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                        <MDBNavLink to='/'>Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to='/about'>About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to='/gallery'>Gallery</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to='/instagram'>Instagram</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to='/contact'>Contact</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </Container>
                </MDBNavbar>
                {collapsed && overlay}
            </div>
            {/* Video Background */}
            <div className="embed-responsive embed-responsive-16by9 video-wrapper">
                <div className="black-overlay" >
                <Container
                    className='d-flex justify-content-center align-items-center LogoContainer'
                    style={{ height: '100%', width: '100%'}}
                >
                    <Row className="d-flex justify-content-center">
                    <Col lg={6} md={12}>
                        <img className="img-fluid Logo" src={Logo} alt="" />
                        <br />
                        <MDBBtn className='sandre-color' size='md'>Portfolio</MDBBtn>
                        <MDBBtn className='sandre-color' size='md'>Services</MDBBtn>
                        <MDBBtn className='sandre-color' size='md'>About</MDBBtn>
                    </Col>
                    </Row>
                </Container>
                </div>
                <video className="video embed-responsive-item" src={Video} autoPlay={true} muted={true} loop={true} />
            </div>
            <main>
            <Container className="mt-5">
            <Row className="mt-5">
                <Col>
                <AboutPreview fluid className="pl-0 pr-0" />
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col>
                <Contact fluid className="pl-0 pr-0" />
                </Col>
            </Row>
            </Container>
            </main>
            </div>
        );
    }
};

export default HomePage;