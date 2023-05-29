import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { firebaseAuth } from "src/firebase/app";
import { useRouter } from "next/navigation";
import { useAuth } from "src/hooks/use-auth";

const LoginMobile = () => {
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      phone: "",
      submit: null,
    },
    validationSchema: Yup.object({
      phone: Yup.string().max(20).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        requestOTP(values);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const requestOTP = ({ phone }) => {
    setUpRecaptha(phone);
  };

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-verifier", {}, firebaseAuth);
    signInWithPhoneNumber(firebaseAuth, number, recaptchaVerifier)
      .then((d) => {
        alert(d);
        router.push("/");
        auth.skip();
      })
      .catch((e) => alert(e));
  }

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            error={!!(formik.touched.phone && formik.errors.phone)}
            fullWidth
            helperText={formik.touched.phone && formik.errors.phone}
            label="phone number"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
          />
          <div id="recaptcha-verifier"></div>
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

export default LoginMobile;
