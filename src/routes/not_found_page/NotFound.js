import React from 'react';
import {Row} from "react-bootstrap";
import NavBar from "../../modules/navigation/NavBar";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <NavBar/>

            <Row>
                <p>Oops... Wrong route was specified;(</p>
                <Link to={'/'}>Go to home page</Link>
            </Row>

        </div>
    );
};

export default NotFound;