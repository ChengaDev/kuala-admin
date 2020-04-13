import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Please insert valid email')
        .required('Please insert your email'),
    password: Yup.string()
        .required('Please insert you password')
        .min(8, 'Minimum 8 chearacters')
});

const LoginForm = ({ onSubmit, isFetching }) => {
    return (
        <FormWrapper>
            <Formik
                onSubmit={(values) => onSubmit(values.email, values.password)}
                validationSchema={validationSchema}
                initialValues={{
                    email: '',
                    password: ''
                }}
            >
                {({ handleSubmit, values, handleChange, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId='validationFormikEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={values.email}
                                type='email'
                                name='email'
                                placeholder='Enter email'
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='valid'>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='validationFormikPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type='password'
                                name='password'
                                value={values.password}
                                isValid={touched.password && !errors.password}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type='valid'>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <ButtonWrapper>
                            <Button
                                disabled={isFetching}
                                variant='primary'
                                type='submit'
                            >
                                {isFetching ? 'Get Ready...' : 'Get in!'}
                            </Button>
                        </ButtonWrapper>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
    margin-top: 30px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 4vh;
    margin-bottom: 2vh;

    ${Button} {
        min-width: 150px;
    }
`;

export default LoginForm;
