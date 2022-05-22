import React, {useContext, useState} from 'react';

import NavBar from "../../modules/navigation/NavBar";
import LoginForm from "../../components/loginForm/loginForm";
import AddNewForm from "../../components/addNewForm/addNewForm";

import './Admin.css'
import {Col, Container, Row} from "react-bootstrap";

const Admin = () => {

    const [isEntered, setIsEntered] = useState(false);

    return (
        <Container>
            <Row>
                <Col className={"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12"}>
                    <NavBar/>
                </Col>
            </Row>
            <Row>
                { !isEntered && <Col className={"col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-12"}>
                     <LoginForm setFunc={setIsEntered}/>
                </Col> }

                {isEntered && <Col className={"col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-12"}>
                    <AddNewForm/>
                </Col> }
            </Row>


        </Container>
    );
};

export default Admin;