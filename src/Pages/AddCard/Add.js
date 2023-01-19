import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';

const Add = () => {
    let bizim = ""
    function handleFile(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            bizim = reader.result
        }
        reader.readAsDataURL(file);

    }
    return (
        <div className='FormContainer-register'>
        <Formik
            initialValues={{ description: '', title: '', image: '', price: '' }}
            validationSchema={Yup.object({
                description: Yup.string()
                    ,
                price: Yup.string()
                    ,
                title: Yup.string()
                    ,

            })}
            onSubmit={(values,) => {
                axios.post("http://localhost:3000/categories", { ...values, image: bizim })
            }}
        >
            <Form>
                <label htmlFor="description">Description</label>
                <Field name="description" type="text" />
                <ErrorMessage name="description" />

                <label htmlFor="title">Title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />
                <Field name="image" type="image" />

                <label htmlFor="price">Price</label>
                <Field name="price" type="text" />
                <ErrorMessage name="price" />






                <label htmlFor="image"></label>


                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg" onChange={(e) => handleFile(e.target)} ></input>







                <button class="glow-on-hover"  type="submit">Göndər</button>
            </Form>
        </Formik>
        </div>
    );
};


export default Add