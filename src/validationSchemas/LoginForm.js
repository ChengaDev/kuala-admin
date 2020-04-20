import * as Yup from 'yup';

export const validationSchema = (localization) =>
    Yup.object({
        email: Yup.string()
            .email(localization.email.errors.invalid)
            .required(localization.email.errors.required),
        password: Yup.string()
            .required(localization.password.errors.required)
            .min(8, localization.password.errors.short)
    });
