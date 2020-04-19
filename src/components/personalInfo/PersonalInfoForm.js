import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Button, Form, Col } from 'react-bootstrap';
import { FadeInAnimation } from '../Animations';
import { validationSchema } from '../../validationSchemas/PersonalInfoForm';

const PersonalInfoForm = ({ user, isFetching, onSubmit }) => {
    return (
        <FormWrapper>
            <Formik
                onSubmit={(values) => onSubmit(values.email, values.password)}
                validationSchema={validationSchema}
                initialValues={{
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    email: user.email,
                    birthdate: user.birthdate,
                    city: user.city,
                    state: user.state
                }}
            >
                {({ handleSubmit, values, handleChange, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <GroupTitle>Who are you?</GroupTitle>
                        <InputGroup>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikFirstname'
                                >
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.firstname}
                                        type='text'
                                        name='firstname'
                                        placeholder=''
                                        isValid={
                                            touched.firstname &&
                                            !errors.firstname
                                        }
                                        isInvalid={!!errors.firstname}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.firstname}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikLastname'
                                >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.lastname}
                                        type='text'
                                        name='lastname'
                                        placeholder=''
                                        isValid={
                                            touched.lastname && !errors.lastname
                                        }
                                        isInvalid={!!errors.lastname}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.lastname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId='validationFormikUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.username}
                                    type='text'
                                    name='username'
                                    placeholder=''
                                    isValid={
                                        touched.username && !errors.username
                                    }
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type='valid'>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId='validationFormikBirthdate'>
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.birthdate}
                                    type='date'
                                    name='birthdate'
                                    placeholder=''
                                    isValid={
                                        touched.birthdate && !errors.birthdate
                                    }
                                    isInvalid={!!errors.birthdate}
                                />
                                <Form.Control.Feedback type='valid'>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.birthdate}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </InputGroup>

                        <GroupTitle>How to get you?</GroupTitle>
                        <InputGroup>
                            <Form.Group controlId='validationFormikEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    readOnly
                                    defaultValue={values.email}
                                    value={user.email}
                                />
                                <Form.Control.Feedback type='valid'>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikCity'
                                >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.city}
                                        type='text'
                                        name='city'
                                        placeholder='Enter your city'
                                        isValid={touched.email && !errors.city}
                                        isInvalid={!!errors.city}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikState'
                                >
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.state}
                                        type='text'
                                        name='state'
                                        placeholder='Enter your state'
                                        isValid={touched.state && !errors.state}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </InputGroup>
                        <ButtonWrapper>
                            <Button
                                disabled={isFetching}
                                variant='primary'
                                type='submit'
                            >
                                {isFetching ? 'I`m on it...' : 'Update'}
                            </Button>
                        </ButtonWrapper>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

const GroupTitle = styled.div`
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.white};
`;

const FormWrapper = styled.div`
    animation: ${FadeInAnimation} 2s;
`;

const InputGroup = styled.div`
    border-radius: 5px;
    color: ${(props) => props.theme.colors.darkBlueFont};
    padding: 30px;
    background-color: ${(props) => props.theme.colors.sectionBackground};
    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 70px;
`;

export default PersonalInfoForm;
