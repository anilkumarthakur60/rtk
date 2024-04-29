import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import loginPageImage from "../assets/loginPageImage.png";
import { useLoginMutation } from "../redux/user/userApi";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../redux/user/userSlice";
import useStore, { storeName } from "../hooks/useStore";

function Copyright(props:TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function LoginPage() {
  const navigate = useNavigate();
  const [login, { error, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  // const handleSubmits = (event) => {
  //     event.preventDefault();
  //     // const data = new FormData(event.currentTarget);
  //     // console.log({
  //     //     email: data.get('email'),
  //     //     password: data.get('password'),
  //     // });
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(formData)
      .unwrap()
      .then(({ data }: { data: any }) => {
        console.log(data);
        dispatch(setUserDetail(data.data));
        const { access_token } = data;
        localStorage.removeItem("access_token");
        localStorage.setItem("access_token", access_token);
        navigate("/dashboard");
      })
      .catch(() => {
        localStorage.removeItem("access_token");
      });
  };
  React.useEffect(() => {
    if (isSuccess) {
      // navigate('/dashboard');
    }
  }, [isSuccess]);

  const { formData, setFormData } = useStore(storeName.users);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginPageImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90%",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <pre>
                {JSON.stringify(error)}

                {JSON.stringify(formData)}
              </pre>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email || ""}
                onChange={setFormData}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={formData.password || ""}
                label="Password"
                type="password"
                id="password"
                onChange={setFormData}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2" onClick={() => navigate("/register")}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
