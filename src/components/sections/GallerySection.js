import React, { Component } from "react";
import "../css/GallerySection.css";

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody
} from 'mdbreact';
import Lightbox from "react-image-lightbox";

class GallerySection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        }
    }
    
    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.props;
    
        return images.map(image => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <Col lg={4} md={6} sm={12} xs={12} key={photoIndex}>
                <div className="wrapper d-flex justify-content-sm-center">
                <figure>
                    <img
                    src={image.src}
                    alt="Gallery"
                    className="z-depth-1 thumbnail-crop"
                    onClick={() => this.setState({ photoIndex: privateKey, isOpen: true })}
                    />
                </figure>
                </div>
                </Col>
            );
        })
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const { images, className } = this.props;
        return (
            <div className="GallerySection">
            <Container fluid className={`mt-5 pl-0 pr-0 ${className}`} >
            <Row>
                <Col>
                <h2 className="h2 font-weight-bold">{this.props.category.toUpperCase()}</h2>
                </Col>
            </Row>
            <div className="mdb-lightbox p-3">
            <Row>
                <Col className="pl-0 pr-0">
                <MDBCard>
                <MDBCardBody>
                    <Row>
                    {this.renderImages()}
                    </Row>
                </MDBCardBody>
                </MDBCard>
                </Col>
            </Row>
            </div>
            {isOpen && (
                <Lightbox
                wrapperClassName={"Lightbox-Wrapper"}
                mainSrc={images[photoIndex].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                imageTitle={photoIndex + 1 + "/" + images.length + ` ${this.props.category}`}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length
                    })
                }
                imagePadding={40}
                />
            )}
            </Container>
            </div>
        );
    }
};

export default GallerySection;