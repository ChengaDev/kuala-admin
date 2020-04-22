import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Button, Form, Col } from 'react-bootstrap';
import { FadeInAnimation } from '../Animations';
import { validationSchema } from '../../validationSchemas/PersonalInfoForm';
import { eLanguageDirection } from '../../staticData/language';

const PersonalInfoForm = ({
    user,
    isFetching,
    onSubmit,
    localization,
    currentLanguage
}) => {
    return (
        <FormWrapper currentLanguage={currentLanguage}>
            <Formik
                onSubmit={(values) => onSubmit(values.email, values.password)}
                validationSchema={validationSchema(localization)}
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
                        <GroupTitle direction={currentLanguage.direction}>
                            {localization.firstSectionTitle}
                        </GroupTitle>
                        <InputGroup>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikFirstname'
                                >
                                    <Form.Label>
                                        {localization.firstname.label}
                                    </Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.firstname}
                                        type='text'
                                        name={
                                            localization.firstname.placeholder
                                        }
                                        placeholder=''
                                        isValid={
                                            touched.firstname &&
                                            !errors.firstname
                                        }
                                        isInvalid={!!errors.firstname}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        {localization.validInputHint}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.firstname}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikLastname'
                                >
                                    <Form.Label>
                                        {localization.lastname.label}
                                    </Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.lastname}
                                        type='text'
                                        name='lastname'
                                        placeholder={
                                            localization.lastname.placeholder
                                        }
                                        isValid={
                                            touched.lastname && !errors.lastname
                                        }
                                        isInvalid={!!errors.lastname}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        {localization.validInputHint}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.lastname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId='validationFormikUsername'>
                                <Form.Label>
                                    {localization.username.label}
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.username}
                                    type='text'
                                    name='username'
                                    placeholder={
                                        localization.username.placeholder
                                    }
                                    isValid={
                                        touched.username && !errors.username
                                    }
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type='valid'>
                                    {localization.validInputHint}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId='validationFormikBirthdate'>
                                <Form.Label>
                                    {localization.birthdate.label}
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.birthdate}
                                    type='date'
                                    name='birthdate'
                                    placeholder={
                                        localization.birthdate.placeholder
                                    }
                                    isValid={
                                        touched.birthdate && !errors.birthdate
                                    }
                                    isInvalid={!!errors.birthdate}
                                />
                                <Form.Control.Feedback type='valid'>
                                    {localization.validInputHint}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.birthdate}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </InputGroup>

                        <GroupTitle direction={currentLanguage.direction}>
                            {localization.secondSectionTitle}
                        </GroupTitle>
                        <InputGroup>
                            <Form.Group controlId='validationFormikEmail'>
                                <Form.Label>
                                    {localization.email.label}
                                </Form.Label>
                                <Form.Control
                                    readOnly
                                    defaultValue={values.email}
                                    value={user.email}
                                />
                                <Form.Control.Feedback type='valid'>
                                    {localization.validInputHint}
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
                                    <Form.Label>
                                        {localization.city.label}
                                    </Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.city}
                                        type='text'
                                        name='city'
                                        placeholder={
                                            localization.city.placeholder
                                        }
                                        isValid={touched.email && !errors.city}
                                        isInvalid={!!errors.city}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        {localization.validInputHint}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId='validationFormikState'
                                >
                                    <Form.Label>
                                        {localization.state.label}
                                    </Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        value={values.state}
                                        type='text'
                                        name='state'
                                        placeholder={
                                            localization.state.placeholder
                                        }
                                        isValid={touched.state && !errors.state}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type='valid'>
                                        {localization.validInputHint}
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
                                {isFetching
                                    ? localization.submitButton.processing
                                    : localization.submitButton.idle}
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
    direction: ${(props) => props.direction};
`;

const FormWrapper = styled.div`
    animation: ${FadeInAnimation} 2s;

    ${(props) =>
        props.currentLanguage.direction === eLanguageDirection.RightToLeft &&
        `
        div[class$="feedback"] {
            text-align: right;
            direction: rtl;
        }

        & input {
            direction: rtl;
        }

        & label {
            float: right;
        }
    `};
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
