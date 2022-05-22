import React from 'react';
import {Image} from "react-bootstrap";

import './ImageItem.css'

const ImageItem = ({data}) => {
    return (
        <div className={"mx-2 mt-2 d-flex bg-light"}>
            <div>
                <Image className={"image-size"} src={data.url}/>
            </div>
            <div className={"mx-2 mt-2"}>
                <div className={"text-primary fw-bold  text-center"}>{data.caption}</div>
                <div className={"text-secondary fw-normal"}>{data.description}</div>
            </div>
        </div>
    );
};

export default ImageItem;