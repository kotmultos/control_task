import React from 'react';
import NavBar from "../../modules/navigation/NavBar";
import {Button, Form, FormControl, Row} from "react-bootstrap";

const MainPage = () => {
    return (
        <div>
            <NavBar/>

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

        </div>
    );
};

export default MainPage;