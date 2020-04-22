import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { validationSchema } from '../../validationSchemas/LoginForm';

const LoginForm = ({ onSubmit, isFetching, localization }) => {
    const formValidationSchema = validationSchema(localization);

    return (
        <FormWrapper>
            <Formik
                onSubmit={(values) => onSubmit(values.email, values.password)}
                validationSchema={formValidationSchema}
                initialValues={{
                    email: '',
                    password: ''
                }}
            >
                {({ handleSubmit, values, handleChange, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId='validationFormikEmail'>
                            <Form.Label>{localization.email.label}</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={values.email}
                                type='email'
                                name='email'
                                placeholder={localization.email.placeholder}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='valid'>
                                {localization.validInputHint}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='validationFormikPassword'>
                            <Form.Label>
                                {localization.password.label}
                            </Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type='password'
                                name='password'
                                value={values.password}
                                isValid={touched.password && !errors.password}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type='valid'>
                                {localization.validInputHint}
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
                                {isFetching
                                    ? localization.button.fetching
                                    : localization.button.idle}
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
`;

export default LoginForm;
