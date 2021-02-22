import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import apiServices from '../../services/apiServices';

class Instagram extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this.getInstagramFeed();
    }

    componentWillUnmount = () => this._isMounted = false;

    getInstagramFeed() {
        if(!this._isMounted) return;
        apiServices.getInstagramImages()
        .then(results => {
            console.log(results.data);
        })
        .catch(err => console.error(err));
    }

    render() {
        return(
            <div id="Instagram">
                <Container className={this.props.className}>
                <Row>
                    <Col>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default Instagram;