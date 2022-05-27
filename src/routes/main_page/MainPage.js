import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../../modules/navigation/NavBar";
import {Button, Col, Container, Form, FormControl, Image, Row} from "react-bootstrap";
import contextData from "../../context/data/ContextData";

import './MainPage.css'
import ImageItem from "../../components/image_item/ImageItem";
import {imageService} from "../../services/image.service";

const MainPage = () => {
    const {stateData, dispatchData} = useContext(contextData);
    const images = stateData.images;
    const [imagesToDisplay, setImagesToDisplay] = useState([]);
    // let imagesToDisplay = images;

    useEffect(() => {
        imageService.getAll().then(value => {
            dispatchData({
                type: "GET_IMAGES",
                payload: value.data
            })
            // console.log(value.data);
            setImagesToDisplay(value.data);
            // console.log("images to display")
            // console.log(imagesToDisplay)
        })
    }, [])

    const search = (e) => {
        console.log(e.target.value)
        const searchFor = e.target.value;

        // imagesToDisplay = images.filter(item => item.caption.includes(searchFor) || item.description.includes(searchFor) )
        // let localvar = images.filter(item => (item.caption.toLowerCase().includes(searchFor.toLowerCase()) ||
        //         item.description.toLowerCase().includes(searchFor.toLowerCase())) )

        setImagesToDisplay(
            images.filter(item => (item.caption.toLowerCase().includes(searchFor.toLowerCase()) ||
                item.description.toLowerCase().includes(searchFor.toLowerCase())) )
        )

        // console.log("local")
        // console.log(localvar)

    }

    return (
        <Container>
            <Row>
                <Col className={"col-12"}>
                    <NavBar/>
                </Col>
            </Row>

            <Row className={"justify-content-center"}>
                <Col className={"col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mx-2 mt-2"}>
                    {/*<Form className="d-flex ">*/}
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onInput={search}
                        />
                    {/*</Form>*/}
                </Col>
            </Row>

            <Row>
                {
                    imagesToDisplay.map((elem, index) => {
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