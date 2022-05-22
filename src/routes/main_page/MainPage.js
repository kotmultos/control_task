import React, {useContext, useEffect} from 'react';
import NavBar from "../../modules/navigation/NavBar";
import {Button, Col, Container, Form, FormControl, Image, Row} from "react-bootstrap";
import contextData from "../../context/data/ContextData";

import './MainPage.css'
import ImageItem from "../../components/image_item/ImageItem";

const MainPage = () => {
    const {stateData, dispatchData} = useContext(contextData);
    const images = stateData.images;

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(stateData.database_route);
                // console.log(await response.json())
                console.log("status " + response.status);
                if (response.status === 200) {
                    const result = await response.json();
                    console.log(result);
                    dispatchData({
                        type: "FETCH_IMAGES",
                        payload: result
                    })
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchImages();
    }, [])

    return (
        <Container>
            <Row>
                <Col className={"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12"}>
                    <NavBar/>
                </Col>
            </Row>

            <Row>
                <div className={"mx-2 mt-2"}>
                    <Form className="d-flex col-6">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </Row>

            <Row>
                <Col className={"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12"}>
                    <div /*className={"d-flex col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12"}*/>
                        {
                            images.map((elem, index) => {
                                return (
                                    <ImageItem className={"col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-6"} data={elem} key={index}/>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default MainPage;