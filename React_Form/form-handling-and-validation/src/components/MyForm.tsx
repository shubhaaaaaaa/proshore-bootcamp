import * as React from 'react';
import { Formik, Form } from 'formik'
import { Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

// custom form components
import { InputElement } from './modules/InputElement.tsx'
import { RadioElement } from './modules/RadioElement.tsx'
import { SelectElement } from './modules/SelectElement.tsx'
import { CheckboxElement } from './modules/CheckboxElement.tsx'
import { SliderElement } from './modules/SliderElement.tsx'
import { TextareaElement } from './modules/TextareaElement.tsx'
import { TermsandCondition } from './modules/TermsandCondition.tsx';

const MyForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    address: '',  
                    condition: '',  
                    dob: '',  
                    education: '',  
                    email: '',  
                    fname: '',
                    gender: '',  
                    interests: '',  
                    lname: '',
                    number: '',
                    rating: '',
                    textarea:'',
                    username:'',
                    password:'',
                    repassword:'',
                }}
                onSubmit={async(values, actions) => {
                    console.log('Submitted Data:', values); 
                    actions.resetForm();
                }}
            >
                <Form className="main-container">
                    {/* Personal Info  */}
                    <Box
                        border={1}
                        borderColor="primary.main"
                        sx={{
                            borderRadius: '5px',
                            padding:'2rem'
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '2rem'
                        }}>
                        Personal Information
                        </Typography>
                        
                        <Grid container rowSpacing={2} columnSpacing={5}>
                            <Grid size={6} className="mb-2">
                                <InputElement label='First Name' type='text' name='fname'/>
                            </Grid>
                            <Grid size={6} className="mb-2">
                                <InputElement label='Last Name' type='text' name='lname'/>
                            </Grid>
                            
                            <Grid size={4}>
                                <InputElement label='Contact Number' type='number' name='number'/>
                            </Grid>
                            <Grid size={4}>
                                <InputElement label='Address' type='text' name='address'/>
                            </Grid>
                            <Grid size={4}>
                                <InputElement label='Email' type='text' name='email'/>
                            </Grid>

                            <Grid size={4}>
                                <RadioElement name='gender'/>
                            </Grid>
                            <Grid size={4} className="mt-5">
                                <InputElement label='Date of Birth' type='date' name='dob'/>
                            </Grid>
                            <Grid size={4} >
                                <SelectElement name='education'/>
                            </Grid>
                        </Grid>
                    </Box>
                    <br /> <br />

                    {/* Additional Info  */}
                    <Box
                        border={1}
                        borderColor="primary.main"
                        sx={{
                            borderRadius: '5px',
                            padding:'2rem'
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '2rem'
                        }}>
                        Additional Information
                        </Typography>
                        
                        <Grid container rowSpacing={2} columnSpacing={5}>
                            <Grid size={4}>
                                <CheckboxElement name='interests' />
                            </Grid>
                            <Grid size={8}>
                                <SliderElement name='rating' />
                                <TextareaElement name='textarea' />
                            </Grid>                            
                        </Grid>
                    </Box>
                    <br /> <br />

                    {/* Credential Details  */}
                    <Box
                        border={1}
                        borderColor="primary.main"
                        sx={{
                            borderRadius: '5px',
                            padding:'2rem'
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '2rem'
                        }}>
                        Credential Details
                        </Typography>
                        
                        <Grid container rowSpacing={2} columnSpacing={5}>
                            <Grid size={12}>
                                <InputElement label='Username' type='text' name='username'/>
                            </Grid>

                            <Grid size={6}>
                                <InputElement label='Password' type='password' name='password'/>
                            </Grid>
                            <Grid size={6}>
                                <InputElement label='Retype Password' type='password' name='repassword'/>
                            </Grid>

                            <Grid size={12}>
                                <TermsandCondition name='condition'/>
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <br /> <br />

                    <Box className='flex justify-center gap-20'>
                        <Button
                            sx={{
                            width:'20rem'   
                            }}
                            variant='contained'
                            type="submit">
                            Cancel
                        </Button>

                        <Button
                            sx={{
                            width:'20rem'   
                            }}
                            variant='contained'
                            type="submit">
                            Sign Up
                        </Button>
                    </Box>

                </Form>
            </Formik>
        </>
    )
}

export default MyForm