import React from "react";
import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { useState } from "react";
import { sendFormSchema } from "../../schema/sendFormSchema";
import axios from "axios";

const ContactForm = () => {
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
    axios
      .post("test", {
        body: message,
        subject: "Rezervasyon Talebi",
      })
      .then((res) => {
        if (res.data.status === true) {
          setOpen(true);
          new Promise((resolve) => setTimeout(resolve, 1000));
          handleReset();
        }
      })
      .catch((err) => console.log(err));
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur, handleReset } =
    useFormik({
      initialValues: {
        fullName: "",
        businessName: "",
        email: "",
        message: "",
      },
      onSubmit,
      validationSchema: sendFormSchema,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          noValidate
          autoComplete="off"
          sx={{
            "& > :not(style)": {
              m: 3,
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <label>
            <TextField
              id="fullName"
              label="Name"
              type="text"
              size="small"
              onChange={handleChange}
              value={values.fullName}
              onBlur={handleBlur}
              touched={touched.fullName}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName ? errors.fullName : ""}
            />
          </label>
          <label>
            <TextField
              id="businessName"
              label="Business Name"
              type="text"
              size="small"
              onChange={handleChange}
              value={values.businessName}
              onBlur={handleBlur}
            />
          </label>
          <label>
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
            <TextField
              id="message"
              label="Your Message"
              type="text"
              size="small"
              multiline
              rows={4}
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              touched={touched.message}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message ? errors.message : ""}
            />
          </label>
          <ReCAPTCHA
            sitekey="test"
            onChange={onChange}
            hl="en"
          />
          <Stack spacing={2}>
            <Button
              size="small"
              disabled={!verified}
              type="submit"
              style={{
                backgroundColor: "#012741",
                color: "#fff",
                marginTop: "2rem",
              }}            >
              Send Message
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Message sent successfully!
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      </form>
    </div>
  );
};

export default ContactForm;
