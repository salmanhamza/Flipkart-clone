import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import { useState } from "react";
import { createLogin, createSignup } from "../../api/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)({
  height: "70vh",
  width: "90vh",
});

const Image = styled(Box)({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%",
  height: "83%",
  width: "28%",
  padding: "45px 35px",
});

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)({
  textTransform: "none",
  background: "#fb641b",
  color: "#fff",
  height: "48px",
  borderRadius: "2px",
});

const ErrorLogin = styled(Typography)({
  fontSize: "10px",
  color: "#ff6161",
  fontWeight: "600",
  lineHeight: "0",
  marginTop: "10px",
});

const RequestOTP = styled(Button)({
  textTransform: "none",
  background: "#fff",
  color: "#2874f0",
  height: "48px",
  borderRadius: "2px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
});

const AccountDialogBoxToggle = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const SignupIntials = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const LoginIntialValue = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [Account, toggleAccount] = useState(AccountDialogBoxToggle.login);
  const [signup, setSignup] = useState(SignupIntials);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(LoginIntialValue);
  const [error, setError] = useState(false);

  const makeAccount = () => {
    toggleAccount(AccountDialogBoxToggle.signup);
  };

  const closeDialog = () => {
    setOpen(false);
    toggleAccount(AccountDialogBoxToggle.login);
    setError(false);
  };
  const InputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const sendSignupData = async () => {
    let response = await createSignup(signup);
    if (!response) return;
    closeDialog();
    setAccount(signup.firstname);
  };

  const loginUser = async () => {
    let response = await createLogin(login);
    console.log(response);
    if (response.status === 200) {
      closeDialog();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography
              variant="h5"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              Login
            </Typography>
            <Typography
              style={{ marginTop: "20px", color: "#fff", fontWeight: "600" }}
            >
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          {Account.view === "login" ? (
            <Wrapper>
              <TextField
                onChange={onValueChange}
                name="username"
                variant="standard"
                label="Enter Username"
              />
              <TextField
                onChange={onValueChange}
                name="password"
                variant="standard"
                label="Enter Password"
              />
              {error && (
                <ErrorLogin>
                  Please Enter Valid Username and Password
                </ErrorLogin>
              )}
              <Typography style={{ fontSize: "12px", color: "#878787" }}>
                By continuing, you agree to Flipkart's terms of use and policy.
              </Typography>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>request OTP</RequestOTP>
              <Typography
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#2874f0",
                  cursor: "pointer",
                }}
                onClick={makeAccount}
              >
                New to Flipkart? Create an account
              </Typography>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={InputChange}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={InputChange}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={InputChange}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={InputChange}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={InputChange}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={InputChange}
                name="phone"
                label="Enter Phone"
              />

              <LoginButton onClick={sendSignupData}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
