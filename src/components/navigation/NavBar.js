import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
    MDBCollapse
} from 'mdbreact';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick =() => this.setState({ collapse: !this.state.collapse });

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
                        <MDBNavItem>
                            <MDBNavLink to='/instagram'>Instagram</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='/contact'>Contact</MDBNavLink>
                        </MDBNavItem>
                        </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            </div>
        );
    }
};

export default withRouter(NavBar);