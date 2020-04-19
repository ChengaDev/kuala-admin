import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstname: Yup.string().required('Please insert your first name'),
    lastname: Yup.string().required('Please insert your last name'),
    username: Yup.string().required('Please insert a cool username'),
    birthdate: Yup.string().required('Please insert a date of birth'),
    city: Yup.string().required('Please insert your city'),
    state: Yup.string().required('Please insert your state')
});
