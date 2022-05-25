import React, {useState, useContext} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';
import {LoginValidator} from "../../modules/validation/LoginValidator";
import ContextData from "../../context/data/ContextData";

const LoginForm = ({setFunc}) => {
    const {stateData} = useContext(ContextData);
    const [isDataCorrect, setIsDataCorrect] = useState(true);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(LoginValidator), mode: 'onChange'});


    function submitForm(e) {
        // e.preventDefault();
        console.log(stateData)
        try {
            // connect to DB and confirm if the user exists

            if(e.username==="admin" && e.password==="password") {
                setFunc(true);
            }// user exists + password is correct
            else {
                setIsDataCorrect(false);
            }
        }
        catch (e) {
            // catch problems with connnection

        }

    }

    const resetState = () => { setIsDataCorrect(true);}

    return (
        <div className={"mt-2 mx-2"}>
            <p>Доступ до цієї сторінки потребує входу в акаунт.</p>
            <p>Будь ласка, авторизуйтесь для продовження роботи.</p>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name={"username"} onInput={resetState}
                                  placeholder="Enter username" {...register('username')} />
                </Form.Group>
                {errors.username && <Alert variant={'warning'} className={'mt-2'}>{errors.username.message}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onInput={resetState}
                                  name={"password"} {...register('password')}/>
                </Form.Group>
                {errors.password && <Alert variant={'warning'} className={'mt-2'}>{errors.password.message}</Alert>}
                <Button variant="primary"  type="submit">Увійти</Button>
                {!isDataCorrect && <Alert variant={"danger"} className={'mt-2'}>Wrong username or password</Alert>}
            </Form>
        </div>
    );
};

export default LoginForm;