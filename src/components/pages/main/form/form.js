import React, { useState } from 'react'
import './form.css'
import { Form, Button } from 'react-bootstrap'
import {saveUser} from '../../../../services/users.service'
import {toast} from 'react-toastify'

function AppForm() {

    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSubmit=async (e)=>{
        setLoading(true)
        e.preventDefault();
       

        toast.promise(
            saveUser({fullName,email,password}),
            {
              pending: 'Saving User',
              success: 'User Saved',
              error: 'An Error Occured'
            }
        )
       
        setLoading(false)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTest">
                <Form.Label>Full Name</Form.Label>
                <Form.Control required onChange={e=>{setFullName(e.target.value)}} type="text" placeholder="Enter Full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e=>{setEmail(e.target.value)}} required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e=>{setPassword(e.target.value)}} required type="password" placeholder="Password" />
            </Form.Group>
            
            <Button disabled={loading} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AppForm