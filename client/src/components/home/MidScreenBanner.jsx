import { Grid, styled } from "@mui/material";
import React from "react";
import { imageURL } from "../../constants/data";

const Wrapper = styled(Grid)({
  marginTop: "10px",
  justifyContent: "space-between",
});

const Image = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

const MidScreenBanner = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Wrapper lg={12} md={12} sm={12} xs={12} container>
        {imageURL.map((image) => (
          <Grid lg={4} md={12} sm={12} xs={12} item>
            <img src={image} alt="banner" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt="banner" />
    </>
  );
};

export default MidScreenBanner;
