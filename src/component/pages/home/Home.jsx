import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";

import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Too Short!').required('Name is required'),
        }),
        onSubmit: (values) => {
            navigate("/quize", { state: { name: values.name } })
        },

    });
    return (
        <>
            <div>
                <h1>Quize test</h1>
                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor="name"> Enter Your Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    ) : null}
                    <button type='submit'> Start Qize</button>
                </form>
            </div>
        </>
    )
}

export default Home
