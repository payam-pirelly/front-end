import Head from "next/head";
import NextLink from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormControlLabel, Link, Stack, TextField, Typography } from "@mui/material";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import { firebaseAuth } from "src/firebase/app";
import { useRouter } from "next/navigation";
import { sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import SimpleSnackbar from "src/components/snackbar";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ScrollDialog from "src/components/scroll-dialog";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [message, setMessage] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      registerEmailPassword(values);
      try {
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  // Register using email/password
  const registerEmailPassword = async (data) => {
    const { email, password } = data;

    try {
      const data = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      sendEmailVerification(firebaseAuth?.currentUser).then(() => {
        setOpen(true);
        setMessage("we send a email to verify your email. please open it.");
      });
      router.push("/");
      auth.skip();
      console.log(data);
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  const handleChange = () => {
    setCheckbox(!checkbox);
    setOpenDialog(true);
  };

  return (
    <>
      <Head>
        <title>Register | Pirelly</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link component={NextLink} href="/auth/login" underline="hover" variant="subtitle2">
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <FormControlLabel
                control={<Checkbox checked={checkbox} onChange={handleChange} name="checkbox" />}
                label="Pirelly instructions, you should agree whit them!"
              />
              <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                Continue
              </Button>
            </form>
          </div>
        </Box>
      </Box>
      {open && <SimpleSnackbar open={open} setOpen={setOpen} message={message} />}
      <ScrollDialog open={openDialog} setOpen={(data) => setOpenDialog(data)} />
    </>
  );
};

function storeEmailInStorage(email) {
  window.localStorage.setItem("EMAIL_LOCAL_STORAGE_KEY", email);
}

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
