import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { useState, useContext } from "react";

import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const LoginButton = styled(Button)({
  color: "#2874f0",
  background: "#fff",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: "2px",
  boxShadow: "none",
  fontWeight: "600",
  height: "32px",
});

// Components

const RightSideMenu = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const OpenDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={OpenDialog}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Box sx={{ display: "flex" }}>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default RightSideMenu;
