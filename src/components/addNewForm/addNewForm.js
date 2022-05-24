import React, {useState, useContext} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import ContextData from "../../context/data/ContextData";
import {AddNewValidator} from "../../modules/validation/AddNewValidator";

const AddNewForm = () => {

    const {stateData} = useContext(ContextData);
    const [isDataCorrect, setIsDataCorrect] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(AddNewValidator), mode: 'onChange'});

    function submitForm(e) {
        console.log(e);

        try {
            // connect to DB and confirm if the user exists

            if(1) {
                setIsDataCorrect(true);
            }// user exists + password is correct
            else {
                setIsDataCorrect(false);
            }
        }
        catch (e) {
            // catch problems with connnection

        }
    }

    const resetState = () => { setIsDataCorrect(false);}

    return (
        <div className={"mt-2 mx-2"}>
            { !isDataCorrect &&
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3" controlId="formUrl">
                        <Form.Label>Image link</Form.Label>
                        <Form.Control type="text" name={"url"}
                                      placeholder="Enter image link here" {...register('url')} />
                    </Form.Group>
                    {errors.url && <Alert variant={'warning'} className={'mt-2'}>{errors.url.message}</Alert>}

                    <Form.Group className="mb-3" controlId="formCaption">
                        <Form.Label>Image caption</Form.Label>
                        <Form.Control type="text" placeholder="Enter image caption here"
                                      name={"caption"} {...register('caption')}/>
                    </Form.Group>
                    {errors.caption && <Alert variant={'warning'} className={'mt-2'}>{errors.caption.message}</Alert>}

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Image description</Form.Label>
                        <Form.Control type="text" placeholder="Enter image description here"
                                      name={"description"} {...register('description')}/>
                    </Form.Group>
                    {errors.description && <Alert variant={'warning'} className={'mt-2'}>{errors.description.message}</Alert>}

                    <Button variant="primary"  type="submit">Додати</Button>
                </Form>
            }

            {isDataCorrect &&
                <div>
                    <Alert variant={"success"} className={'mt-2'}>Зображення успішно додано</Alert>
                    <Button variant="primary"  type="button" onClick={resetState}>Додати ще!</Button>
                </div>
            }
        </div>
    );
};

export default AddNewForm;