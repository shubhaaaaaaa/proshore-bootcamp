import * as React from "react";
import { Formik, Form } from "formik";
import { Button, Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

// custom form components
import { InputElement } from "./modules/InputElement.tsx";

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
              }}
              
        onSubmit={async (values, actions) => {
          console.log("Submitted Data:", values);
          actions.resetForm();
              }}>
              
        <Form className="login-container">
          {/* Login  */}
          <Box>
                      
            <h1 className="text-[3rem] text-center font-bold tracking-tight mb-10">
            Skill<span className="text-primary">Camper</span>
            </h1>

            <Grid container rowSpacing={2} columnSpacing={5}>
                <Grid size={12}>
                    <InputElement label="Username" type="text" name="username" />
                </Grid>

                <Grid size={12}>
                    <InputElement label="Password" type="password" name="password"/>
                </Grid>
            </Grid>
          </Box>
          <br />
          <Box className="flex justify-center gap-20">
            <Button
            href="/success"
            fullWidth
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
              variant="contained"
              type="submit">
              Login
            </Button>
            </Box>
            
            <Typography
            sx={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.8rem',
            }}
            >
            Already a user?{' '}
            <Link href="/signup">Signup here</Link>
            </Typography>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
