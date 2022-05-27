import React from 'react';
import {Col, Image} from "react-bootstrap";

import './ImageItem.css'

const ImageItem = ({data}) => {
    return (
        <Col className={"col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12"}>
            <div className={"mx-2 mt-2 d-flex bg-light block-height"}>
                <div>
                    <Image className={"image-size"} src={data.url}/>
                </div>
                <div className={"mx-2 mt-2"}>
                    <div className={"text-primary fw-bold  text-left"}>{data.caption}</div>
                    <div className={"text-secondary fw-normal text-overflow-hidden"}>{data.description.slice(0, 250)}...</div>
                </div>
            </div>
        </Col>
    );
};

export default ImageItem;