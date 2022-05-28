import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../../modules/navigation/NavBar";
import {Col, Container, FormControl, Row} from "react-bootstrap";
import contextData from "../../context/data/ContextData";

import ImageItem from "../../components/image_item/ImageItem";
import {imageService} from "../../services/image.service";

const MainPage = () => {
    const {stateData, dispatchData} = useContext(contextData);
    const images = stateData.images;
    const [imagesToDisplay, setImagesToDisplay] = useState([]);

    useEffect(() => {
        imageService.getAll().then(value => {
            dispatchData({
                type: "GET_IMAGES",
                payload: value.data
            })
            setImagesToDisplay(value.data);
        })
    })

    const search = (e) => {
        const searchFor = e.target.value;

        setImagesToDisplay(
            images.filter(item => (item.caption.toLowerCase().includes(searchFor.toLowerCase()) ||
                item.description.toLowerCase().includes(searchFor.toLowerCase())) )
        )
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
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onInput={search}
                    />
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