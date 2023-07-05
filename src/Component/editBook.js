import React from "react";
import BaseApp from "../baseApp";
import * as yup from 'yup'
import {useFormik} from "formik"
import { AppState } from "../Context/AppProvider";
import { useHistory, useParams } from "react-router-dom";

const userSchemaValidation = yup.object({
    id : yup.string().required("Id required"),
    name: yup.string().required("Name required"),
    image: yup.string().required("Image URL required"),
    author: yup.string().required("Author name required"),
    description: yup.string().required("required").min(15,"Minimum 15 letter required"),
})



export default function EditBook(){
    const{book}= AppState()
    const history = useHistory()
    const{id}=useParams()
    const idx = id
    const selectedBook = book.find((data)=>{
        return data.id  === idx
    })
    const indexSelectedBook = book.findIndex((data)=>{

        return data.id === idx
    })
    //formik validation
    const {values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            id: selectedBook.id,
            name:selectedBook.name,
            image:selectedBook.image,
            author:selectedBook.author,
            description:selectedBook.description
        },
        validationSchema : userSchemaValidation,
        onSubmit : (newData)=>{
            book[indexSelectedBook]=newData
            history.push("/book")
        }
        
    })

    return(
        <BaseApp>
            <form className="form" onSubmit={handleSubmit}>
                <label>Id :</label>
                <input
                placeholder="ID"
                name="id"
                value={values.id}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {touched.id && errors.id ? <p style={{color:"crimson"}}>{errors.id}</p>:" "}

                <label>Name :</label>
                <input
                placeholder="name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {touched.name && errors.name ? <p style={{color:"crimson"}}>{errors.name}</p>:" "}

                <label>Image URL :</label>
                <input
                placeholder="image URL"
                name="image"
                value={values.image}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {touched.image && errors.image ? <p style={{color:"crimson"}}>{errors.image}</p>:" "}

                <label>Author Name :</label>
                <input
                placeholder="Author"
                name="author"
                value={values.author}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {touched.author && errors.author ? <p style={{color:"crimson"}}>{errors.author}</p>:" "}

                <label>Description :</label>
                <input
                placeholder="Description"
                name="description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {touched.description && errors.description ? <p style={{color:"crimson"}}>{errors.description}</p>:" "}

                <button type="submit" className="btn btn-success">Success</button>
            </form>
        </BaseApp>
    )
}