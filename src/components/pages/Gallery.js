import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBtn, 
    MDBCard, 
    MDBCardBody
} from 'mdbreact';

import GallerySection from '../sections/GallerySection';
import GalleryImages from '../../res/gallery/_GalleryImages';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                "cornices",
                "drapery",
                "pillows",
                "roman shades",
                "upholstery",
                "valences"
            ],
            filter: []
        };
    }

    handleFilter(el) {
        let temp = this.state.filter;
        if(!this.state.filter.includes(el))
            temp[0] = el;
        else if(this.state.filter.includes(el))
            temp = [];

        this.setState({ filter: temp })
    }

    renderGallerySection() {
        const Section = GalleryImages.map((el, idx) => {
            let filter = this.state.filter;
            if(!filter.includes(el.category.toLowerCase()) && filter.length > 0) return <div />;
            return(
                <Row key={idx}>
                    <Col>
                    <GallerySection category={el.category} images={el.images} />
                    </Col>
                </Row>
            );
        });

        return Section;
    }

    renderFilterButtons() {
        return this.state.categories.map((el, idx) => {
            let color = "sandre-color";
            if(this.state.filter.includes(el))
                color = "success-color-dark";
            return(
                <Col 
                lg={2} md={4} sm={4} xs={6}
                className="d-flex justify-content-lg-center" 
                key={GalleryImages.length + idx}
                onClick={() => this.handleFilter(el)}>
                <MDBBtn color="elegant" className={`${color} ml-0 mr-0 w-100`} size="md">
                    {el}
                </MDBBtn>
                </Col>
            );
        });
    }

    render() {
        return(
            <div id="Gallery">
            <Container className={this.props.className}>
            <Row className="mb-5">
                <Col className="text-center">
                <h1 className="h1 font-weight-bold">GALLERY</h1>
                </Col>
            </Row>
            <Row className="mb-2">
                <MDBCard className="w-100">
                <MDBCardBody>
                <Row>
                    {this.renderFilterButtons()}
                </Row>
                </MDBCardBody>
                </MDBCard>
            </Row>
            {this.renderGallerySection()}
            </Container>
            </div>
        );
    }
};

export default Gallery;