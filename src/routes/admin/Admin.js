import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import NavBar from "../../modules/navigation/NavBar";

import './Admin.css'

const Admin = () => {
    const [isEntered, setIsEntered] = useState(false);

    return (
        <div>
            <NavBar/>
            {!isEntered && <div className={"mx-2 width-500"}>
                <p>Доступ до цієї сторінки потребує входу в акаунт.</p>
                <p>    Будь ласка, авторизуйтесь для продовження роботи.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Увійти</Button>
                </Form>
            </div> }

        </div>
    );
};

export default Admin;