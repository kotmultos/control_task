import React, {useState, useEffect} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import {AddNewValidator} from "../../modules/validation/AddNewValidator";
import {imageService} from "../../services/image.service";

const AddNewForm = () => {
    const [isDataCorrect, setIsDataCorrect] = useState(false);

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

            {isDataCorrect &&
                    <Alert variant={"success"} className={'mt-2'}>Зображення успішно додано</Alert>
            }
        </div>
    );
};

export default AddNewForm;