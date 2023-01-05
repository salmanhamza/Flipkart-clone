import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)({
  minWidth: "40%",
  padding: "40px 0 0 80px",
});
const Image = styled("img")({
  width: "95%",
  padding: "15px",
});
const StyledButton = styled(Button)({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
});
const ActionItems = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.url} alt="product phtoto" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ background: "#ff9f00", marginRight: "10px" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItems;
