import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';

const LoginForm = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email Address</label>
                <input type='email' name='email' required />
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </Form>
    );
};

const Form = styled.form`
    font-size: 20px;
`;

export default LoginForm;
