import React, { Component } from 'react';
import '../css/HomePage.css';

import {
    MDBView,
    MDBMask,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
    MDBCollapse
} from 'mdbreact';

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
        return (
            <div id="HomePage">
            <header>
            <MDBView className="pink-gradient">
                <MDBNavbar dark expand="md" className="z-1">
                    <MDBContainer>
                    <MDBNavbarBrand href="/">
                        <strong>Sandre Home Design Inc.</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.onClick} />
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/instagram">Instagram</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/contact">Contact</MDBNavLink>
                        </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>

                <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
                </MDBMask>
            </MDBView>
            </header>
            <main>

            </main>
            </div>
        );
    }
};

export default HomePage;