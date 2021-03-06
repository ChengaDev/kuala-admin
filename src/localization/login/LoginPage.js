export default {
    en: {
        title: 'Kuala',
        form: {
            email: {
                label: 'Email',
                placeholder: 'Enter email',
                errors: {
                    required: 'Email is required',
                    invalid: 'Email not valid'
                }
            },
            password: {
                label: 'Password',
                placeholder: 'Please type your password',
                errors: {
                    required: 'Password is required',
                    short: 'Minimum 8 chearacters'
                }
            },
            button: {
                fetching: 'Get Ready...',
                idle: 'Get in!'
            },
            errors: {
                loginFailed: 'Login failed, please try again'
            },
            validInputHint: 'Looks good!'
        },
        forgotPasswordButton: 'Forgot your password?'
    },
    he: {
        title: 'קואלה',
        form: {
            email: {
                label: 'דוא"ל',
                placeholder: 'הכנס כתובת מייל',
                errors: {
                    required: 'דוא"ל הוא שדה חובה',
                    invalid: 'דוא"ל לא תקני'
                }
            },
            password: {
                label: 'סיסמא',
                placeholder: 'הכנס סיסמא',
                errors: {
                    required: 'סיסמא היא שדה חובה',
                    short: 'מינימום 8 תווים'
                }
            },
            button: {
                fetching: 'כבר מגיעים...',
                idle: 'יאללה!'
            },
            errors: {
                loginFailed: 'התחברות נכשלה, נסה שנית'
            },
            validInputHint: 'תקין!'
        },
        forgotPasswordButton: 'שכחת סיסמא?'
    }
};
