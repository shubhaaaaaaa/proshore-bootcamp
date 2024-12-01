import * as yup from 'yup';

export const SchemaCustom = yup.object().shape({

    address: yup.string()
                .matches(/^[A-Za-z0-9-]+$/, 'Address cannot contain speacial characters'),

    condition: yup.bool()
                    .oneOf([true], 'Please tick the box'),
    
    dob: yup.date()
            .max(new Date(), 'Date of birth cannot be in the future')
            .required('Date of birth is required'),
    
    education: yup.string()
        .required(),
    
    email: yup.string()
            .email()
            .required('Email is required'),
    
    fname: yup.string()
        .required('First name is required')
        .matches(/^[A-Za-z]+$/, 'Name can only have alphabets'),
    
    gender: yup.string()
                .required('Choose a gender'),
    
    interests: yup.array()
                .min(1,'Select atleast one interest'),
    
    lname: yup.string()
                .matches(/^[A-Za-z]+$/, 'Name can only have alphabets'),

    number: yup.string()
            .matches(/^98[0-9]{8}$/, 'Begin with 98 and should be 10 digits long'),
    
    rating: yup.number()
            .required('Choose your level of English'),
    
    textarea: yup.string().required('The text field cannot be blank'),

    username: yup.string()
                .required('Username is required')
                .min(6, 'Must be 6 characters or more'),
    
    password: yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[0-9]/, 'Password requires a number.')
                .matches(/[a-z]/, 'Password requires a lowercase letter.')
                .matches(/[A-Z]/, 'Password requires an uppercase letter.'),

    repassword: yup.string()
                .oneOf([yup.ref('password')], 'Passwords must match'),    
});