import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import RightSideMenu from "./RightSideMenu";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar sx={{ background: "#2874f0", height: "55px" }}>
      <Toolbar style={{ minHeight: "55px" }}>
        <Box sx={{ marginLeft: "12%", lineHeight: "0" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ fontSize: "10px", fontStyle: "italic", color: "white" }}
              >
                Explore &nbsp;
                <Box component="span" sx={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </Typography>
              <img
                src={subURL}
                alt="sublogo"
                style={{ width: "10px", height: "10px", marginLeft: "4px" }}
              />
            </Box>
          </Link>
        </Box>

        <Search />
        <Box sx={{ margin: "0 5% 0 auto" }}>
          <RightSideMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
