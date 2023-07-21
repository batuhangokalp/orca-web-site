import LoginHeader from "@/components/AuthComponents/AuthHeader";
import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "../../styles/Auth.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import { registerSchema } from "../../schema/registerSchema";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { Footer } from "@/components/GlobalComponents/Footer";
import axios from "axios";

const RegisterForm = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [verified, setVerified] = useState(false);

  const onChange = (value) => {
    setVerified(true);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const onSubmit = async (values, actions) => {
    let body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }
    axios.post("http://localhost:3008/api/users/register", body)
      .then(function (response) {
        setOpenSuccess(true);
        handleReset();
      })
      .catch(function (error) {
        if (error) {
          setOpenError(true);
        }
      })

  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur, handleReset } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  return (
    <>
      <div className={styles.allContainer}>
        <LoginHeader
          heading="SIGN UP"
          description="Welcome to Orca Business Solutions"
        />
        <div className={styles.container}>
          <div className={styles.forms}>
            <div className={styles.logo}>
              <Image
                src="/../public/pictures/OrcaLogoDark.png"
                alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                width={153}
                height={50}
                quality={100}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <Box
                noValidate
                autoComplete="off"
                sx={{
                  "& > :not(style)": {
                    m: 4,
                    width: "19rem",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <label>
                  <span>First Name</span>
                  <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    size="small"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                    touched={touched.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName ? errors.firstName : ""}
                  />
                </label>
                <label>
                  <span>Last Name</span>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    type="lastName"
                    size="small"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                    touched={touched.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName ? errors.lastName : ""}
                  />
                </label>
                <label>
                  <span>E-mail</span>
                  <TextField
                    id="email"
                    label="E-mail"
                    type="email"
                    size="small"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    touched={touched.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email ? errors.email : ""}
                  />
                </label>
                <label>
                  <span>Password</span>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    size="small"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password ? errors.password : ""}
                  />
                </label>
                <label>
                  <span>Confirm Password</span>
                  <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    size="small"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    touched={touched.confirmPassword}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword ? errors.confirmPassword : ""
                    }
                  />
                </label>
                <ReCAPTCHA
                  sitekey="test"
                  onChange={onChange}
                  hl="en"
                />
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Button
                    size="small"
                    disabled={!verified}
                    type="submit"
                    style={{
                      backgroundColor: "#011926",
                      color: "#fff",
                      marginTop: "2rem",
                    }}
                  >
                    Sign up
                  </Button>
                  <Snackbar
                    open={openSuccess}
                    autoHideDuration={5000}
                    onClose={handleCloseSuccess}
                  >
                    <Alert
                      onClose={handleCloseSuccess}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Registration completed successfully!
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={openError}
                    autoHideDuration={5000}
                    onClose={handleCloseError}
                  >
                    <Alert
                      onClose={handleCloseError}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      E-mail address already registered!
                    </Alert>
                  </Snackbar>
                </Stack>
              </Box>
            </form>
            <span
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                letterSpacing: "0.02em",
                color: "#011926",
                textAlign: "center",
              }}
            >
              Already do you have an account?
              <Link href="/auth/login"> Login!</Link>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RegisterForm;
