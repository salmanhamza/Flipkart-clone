import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Component = styled(Menu)({
  marginTop: "5px",
});

const Logout = styled(Typography)({
  fontSize: "14px",
  marginLeft: "20px",
});

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>

        <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            <LogoutIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
