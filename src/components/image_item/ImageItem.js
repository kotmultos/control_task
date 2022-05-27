import React, {useState} from 'react';
import {Button, Col, Image, Modal, Nav} from "react-bootstrap";

import './ImageItem.css'

const ImageItem = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Col className={"col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12"}>
            <div className={"mx-2 mt-2 d-flex bg-light block-height"}>
                <div>
                    <Image className={"image-size"} src={data.url}/>
                </div>
                <div className={"mx-2 mt-2"}>
                    <div className={"text-primary fw-bold  text-left"}>{data.caption}</div>
                    <div className={"text-secondary text-justify fw-normal"}>{data.description.slice(0, 100)}...</div>
                    <Nav.Link onClick={handleShow}>Детальніше...</Nav.Link>
                </div>
            </div>

            < >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={"text-primary fw-bold text-left"}>{data.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={" fw-normal"}>
                        <p className={"text-justify"}><Image className={"image-size left-img "} src={data.url}/>
                            {data.description}</p>
                    </Modal.Body>
                    <Modal.Footer className={"text-secondary fw-normal"}>
                        Щоб сховати повідомлення, натисніть за його межами або на відповідну кнопку
                    </Modal.Footer>
                </Modal>
            </>
        </Col>
    );
};

export default ImageItem;