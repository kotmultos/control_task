import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavBar from "../../modules/navigation/NavBar";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col className={"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12"}>
                    <NavBar/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={'mt-2 mx-2 text-center'}>
                        <p>Oops... Wrong route was specified;( <Link to={'/'}>Go to home page</Link></p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default NotFound;