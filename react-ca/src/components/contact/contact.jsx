import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

import Heading from '../layout/heading';
import ErrorMessage from './errorMessage';

const schema = yup.object().shape({
    firstName: yup.string().min(2, 'First name must be at least 2 characters').required('First name is required'),
    lastName: yup.string().min(2, 'Last name must be at least 2 characters').required('Last name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    message: yup.string().min(10, 'The message must be at least 10 characters').required('A message is required'),
});

export default function Contact() {
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="contactContainer">
            <Heading title="Contact" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                    {errors.firstName && <ErrorMessage message={errors.firstName.message} />}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                    {errors.lastName && <ErrorMessage message={errors.lastName.message} />}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Example@email.com" ref={register} />
                    {errors.email && <ErrorMessage message={errors.email.message} />}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        name="message"
                        placeholder="Enter your message here"
                        as="textarea"
                        rows={3}
                        ref={register}
                    />
                    {errors.message && <ErrorMessage message={errors.message.message} />}
                </Form.Group>
                <div className="btnContainer">
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}
