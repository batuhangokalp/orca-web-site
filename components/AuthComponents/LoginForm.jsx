import LoginHeader from "@/components/AuthComponents/AuthHeader";
import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "../../styles/Auth.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import { loginSchema } from "../../schema/loginSchema";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { Footer } from "@/components/GlobalComponents/Footer";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);

  const onChange = (value) => {
    setVerified(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    setOpen(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    formik.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  return (
    <>
      <div className={styles.allContainer}>
        <LoginHeader
          heading="LOGIN"
          description="Welcome to Orca Business Solutions"
        />
        <div className={styles.container}>
          <div className={styles.forms}>
            <div className={styles.logo}>
              <Image
                src="/pictures/OrcaLogoDark.png"
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
                    Login
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Login successfully!
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
              Do you have no account?
              <Link href="/auth/register"> Join us!</Link>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginForm;
