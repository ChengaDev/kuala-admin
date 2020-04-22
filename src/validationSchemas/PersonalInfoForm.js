import * as Yup from 'yup';

export const validationSchema = (localization) =>
    Yup.object({
        firstname: Yup.string().required(localization.requiredError),
        lastname: Yup.string().required(localization.requiredError),
        username: Yup.string().required(localization.requiredError),
        birthdate: Yup.string().required(localization.requiredError),
        city: Yup.string().required(localization.requiredError),
        state: Yup.string().required(localization.requiredError)
    });
