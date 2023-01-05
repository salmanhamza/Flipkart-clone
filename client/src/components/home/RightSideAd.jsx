import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Wrapper = styled(Box)({
  display: "flex",
});

const LeftSideComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightSideComponent = styled(Box)(({ theme }) => ({
  width: "17%",
  background: "#fff",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "5px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RightSideAd = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Wrapper>
      <LeftSideComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftSideComponent>
      <RightSideComponent>
        <img src={adURL} alt="Ad" style={{ width: 217 }} />
      </RightSideComponent>
    </Wrapper>
  );
};

export default RightSideAd;
