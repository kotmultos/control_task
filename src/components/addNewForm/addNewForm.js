import React, {useState, useContext, useEffect} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import ContextData from "../../context/data/ContextData";
import {AddNewValidator} from "../../modules/validation/AddNewValidator";
import {imageService} from "../../services/image.service";
import contextData from "../../context/data/ContextData";

const AddNewForm = () => {

    // const {stateData} = useContext(ContextData);
    const [isDataCorrect, setIsDataCorrect] = useState(false);
    const {stateData, dispatchData} = useContext(contextData);

    const defVal = {
        caption: "",
        description:"",
        url: ""
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(AddNewValidator), mode: 'onChange', defaultValues: defVal});

    useEffect(() =>{
        if(isDataCorrect)  reset(defVal);
    }, [isDataCorrect, reset])

    function submitForm(e) {
        console.log(e);

        imageService.addNew(e).then(response => {
            // dispatchData({
            //     type: "GET_IMAGES",
            //     payload: value.data
            // })
            console.log(response);
            if(response.status === 200) {
                setIsDataCorrect(true);
            }
            else {
                setIsDataCorrect(false);
            }
        })
    }

    const resetState = () => { setIsDataCorrect(false);}

    return (
        <div className={"mt-2 mx-2"}>
            {/*{ !isDataCorrect &&*/}
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3" controlId="formCaption">
                        <Form.Label>Image caption</Form.Label>
                        <Form.Control type="text" placeholder="Enter image caption here" onInput={resetState}
                                      name={"caption"} {...register('caption')}/>
                    </Form.Group>
                    {errors.caption && <Alert variant={'warning'} className={'mt-2'}>{errors.caption.message}</Alert>}

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Image description</Form.Label>
                        <Form.Control as={"textarea"} placeholder="Enter image description here" rows={10} onInput={resetState}
                                      name={"description"} {...register('description')}/>
                    </Form.Group>
                    {errors.description && <Alert variant={'warning'} className={'mt-2'}>{errors.description.message}</Alert>}

                    <Form.Group className="mb-3" controlId="formUrl">
                        <Form.Label>Image link</Form.Label>
                        <Form.Control type="text" name={"url"} onInput={resetState}
                                      placeholder="Enter image link here" {...register('url')} />
                    </Form.Group>
                    {errors.url && <Alert variant={'warning'} className={'mt-2'}>{errors.url.message}</Alert>}

                    <Button variant="primary"  type="submit">Додати</Button>
                </Form>
             {/*}*/}

            {isDataCorrect &&
                <div>
                    <Alert variant={"success"} className={'mt-2'}>Зображення успішно додано</Alert>
                    {/*<Button variant="primary"  type="button" onClick={resetState}>Додати ще!</Button>*/}
                </div>
            }
        </div>
    );
};

export default AddNewForm;