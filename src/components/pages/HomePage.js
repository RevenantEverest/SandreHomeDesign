import React, { Component } from 'react';
import '../css/HomePage.css';

import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBView,
    MDBMask
} from 'mdbreact';

import AboutPreview from '../sections/AboutPreview';
import Contact from './Contact';

import Logo from '../../res/images/Logo.png';
import Video from '../../res/videos/WebsiteVideo.mp4';

class HomePage extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            collapsed: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        Events.scrollEvent.register('begin', () => console.log("begin", arguments));
        Events.scrollEvent.register('end', () => console.log("end", arguments));
    }
    
    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("resize", this.handleResize);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleResize = () => this.setState({ windowWidth: window.innerWidth });
    handleTogglerClick =() => this.setState({ collapsed: !this.state.collapsed });

    renderVideo() {
        return(
            <div className="embed-responsive embed-responsive-16by9 video-wrapper">
                <video className="video embed-responsive-item" src={Video} autoPlay loop muted playsInline />
                <div className="black-overlay">
                <Container
                    className='d-flex justify-content-center align-items-center LogoContainer'
                    style={{ height: '100%', width: '100%'}}
                >
                    <Row className="d-flex justify-content-center">
                    <Col lg={6} md={12}>
                        <img className="img-fluid Logo" src={Logo} alt="" />
                        <br />
                        <Link to="/gallery">
                            <MDBBtn className='sandre-color' size='md'>Portfolio</MDBBtn>
                        </Link>
                        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={800}>
                            <MDBBtn className='sandre-color' size='md'>About</MDBBtn>
                        </ScrollLink>
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }

    renderLandingImage() {
        return(
            <MDBView src="https://i.imgur.com/jUpE5kd.jpg">
            <MDBMask className='white-text gradient' overlay="black-light" />
            <Container
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='d-flex justify-content-center white-text align-items-center'
            >
            <Row className="d-flex justify-content-center">
                <Col lg={6} md={12}>
                    <img className="img-fluid Logo" src={Logo} alt="" />
                    <br />
                    <Link to="/gallery">
                        <MDBBtn className='sandre-color' size='md'>Portfolio</MDBBtn>
                    </Link>
                    <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={800}>
                        <MDBBtn className='sandre-color' size='md'>About</MDBBtn>
                    </ScrollLink>
                </Col>
                </Row>
            </Container>
            </MDBView>
        );
    }

    renderNavBarContactInfo() {
        return(
            <MDBNavbarNav right>
                <MDBNavItem>
                    <div className="nav-link cursor-pointer">
                    <MDBIcon icon="envelope" />
                    <p className="d-inline"> sophia@sandrehomedesign.com</p>
                    </div>
                </MDBNavItem>
                <MDBNavItem>
                    <div className="nav-link cursor-pointer">
                    <MDBIcon icon="phone" />
                    <p className="d-inline"> 516-768-6363</p>
                    </div>
                </MDBNavItem>
            </MDBNavbarNav>
        );
    }

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
                    <MDBNavbarBrand className="nav-brand">
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
                        {/* <MDBNavItem>
                        <MDBNavLink to='/instagram'>Instagram</MDBNavLink>
                        </MDBNavItem> */}
                        <MDBNavItem>
                        <MDBNavLink to='/contact'>Contact</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    {this.state.windowWidth >= 1024 || this.state.windowWidth < 755 ? this.renderNavBarContactInfo() : ''}
                    </MDBCollapse>
                </Container>
                </MDBNavbar>
                {collapsed && overlay}
            </div>
            {this.state.windowWidth > 1280 ? this.renderVideo() : this.renderLandingImage()}
            <main>
            <Container className="mt-5">
            <br />
            <br />
            <Row>
                
                <Col>
                <Element id="about" className="pt-5">
                <AboutPreview fluid className="pl-0 pr-0 pt-5" />
                </Element>
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