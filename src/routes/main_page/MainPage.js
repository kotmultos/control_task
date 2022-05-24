import React, {useContext, useEffect} from 'react';
import NavBar from "../../modules/navigation/NavBar";
import {Button, Col, Container, Form, FormControl, Image, Row} from "react-bootstrap";
import contextData from "../../context/data/ContextData";

import './MainPage.css'
import ImageItem from "../../components/image_item/ImageItem";
import {imageService} from "../../services/image.service";

const MainPage = () => {
    const {stateData, dispatchData} = useContext(contextData);
    const images = stateData.images;

    useEffect(() => {
        imageService.getAll().then(value => {
            dispatchData({
                type: "GET_IMAGES",
                payload: value.data
            })
            console.log(value.data);
        })
    }, [])

    return (
        <Container>
            <Row>
                <Col className={"col-12"}>
                    <NavBar/>
                </Col>
            </Row>

            <Row className={"justify-content-center"}>
                <Col className={"col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mx-2 mt-2"}>
                    <Form className="d-flex ">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                {
                    images.map((elem, index) => {
                        return (
                            <ImageItem data={elem} key={index}/>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default MainPage;