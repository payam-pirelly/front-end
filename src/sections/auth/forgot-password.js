import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Stack, TextField, Typography } from "@mui/material";
import {  sendPasswordResetEmail } from "firebase/auth";

import { firebaseAuth } from "src/firebase/app";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("email must be valid!").max(200).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        handleForgotPassword(values);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleForgotPassword = ({ email }) => {
    sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        alert("Password reset email sent.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            error={!!(formik.touched.phone && formik.errors.phone)}
            fullWidth
            helperText={formik.touched.phone && formik.errors.phone}
            label="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
          />
        </Stack>
        {formik.errors.submit && (
          <Typography color="error" sx={{ mt: 3 }} variant="body2">
            {formik.errors.submit}
          </Typography>
        )}
        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
          Continue
        </Button>
      </form>
    </>
  );
};

export default ForgotPassword;
