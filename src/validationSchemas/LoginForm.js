import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Please insert valid email')
        .required('Please insert your email'),
    password: Yup.string()
        .required('Please insert you password')
        .min(8, 'Minimum 8 chearacters')
});
