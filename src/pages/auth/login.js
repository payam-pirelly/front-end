import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { firebaseAuth } from "src/firebase/app";
import SimpleSnackbar from "src/components/snackbar";
import { useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  const [message, setMessage] = useState("");
  const [method, setMethod] = useState("email");
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
      try {
        loginEmailPassword(values);

        // await auth.signIn(values.email, values.password);
        // router.push("/");
        // auth.skip();
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleSkip = useCallback(() => {}, [auth, router]);

  // Login using email/password
  const loginEmailPassword = async (data) => {
    setLoading(true);
    const loginEmail = data?.email;
    const loginPassword = data?.password;

    try {
      const { user, _tokenResponse } = await signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword
      );
      router.push("/");
      auth.skip();
      console.log(user, _tokenResponse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOpen(true);
      setMessage(error?.message);
      console.log(`There was an error: ${error}`);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log("Auth tate change:" + user);
    });
  }, []);

  const handleSignInRequest = () => {
    signInWithPopup(firebaseAuth, googleProvider).then((result) => {
      console.log("got popup result");
      // this gives you a google access token. you can use it to access the google credential
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        console.log(credential);
        console.log(result);
      }
    });
  };

  const handleSignInFacebookRequest = () => {
    signInWithPopup(firebaseAuth, facebookProvider).then((result) => {
      console.log("got popup result");
      // this gives you a google access token. you can use it to access the google credential
      const credential = FacebookAuthProvider.credentialFromResult(result);
      if (credential) {
        console.log(credential);
        console.log(result);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Login | Devi's Kit</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
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
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="Email" value="email" />
              <Tab label="Phone Number" value="phoneNumber" />
            </Tabs>
            {method === "email" && (
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
                <FormHelperText sx={{ mt: 1 }}>Optionally you can skip.</FormHelperText>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                  {loading ? <CircularProgress color="inherit" /> : "Continue"}
                </Button>
                <Button
                  fullWidth
                  size="large"
                  onClick={handleSignInRequest}
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  Google Authentication
                </Button>
                <Button
                  fullWidth
                  size="large"
                  onClick={handleSignInFacebookRequest}
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  Facebook Authentication
                </Button>
                <Button fullWidth size="large" sx={{ mt: 3 }} onClick={handleSkip}>
                  Skip authentication
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                  </div>
                </Alert>
              </form>
            )}
            {method === "phoneNumber" && (
              <div>
                <Typography sx={{ mb: 1 }} variant="h6">
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
      <SimpleSnackbar open={open} setOpen={setOpen} message={message} />
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
