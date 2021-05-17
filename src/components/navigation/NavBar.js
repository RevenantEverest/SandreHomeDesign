import React, { Component } from 'react';
import '../css/NavBar.css';
import { withRouter } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
    MDBCollapse,
    MDBIcon
} from 'mdbreact';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }
    
    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => this.setState({ windowWidth: window.innerWidth });
    onClick =() => this.setState({ collapse: !this.state.collapse });

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
        return(
            <div id="NavBar">
            <MDBNavbar color="pink darken-1" fixed="top" dark expand="md">
                <MDBContainer>
                <MDBNavbarBrand href="/">
                    <strong>Sandre Home Design Inc.</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
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
                </MDBContainer>
            </MDBNavbar>
            </div>
        );
    }
};

export default withRouter(NavBar);