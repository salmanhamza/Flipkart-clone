import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";

function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Box style={{ width: "100%" }}>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14" }}
      >
        81 ratings and 3 reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: "20px" }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          Rs{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>{" "}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <Box>
        <Typography>
          <LocalOfferIcon /> Buy this Product and Get Extra ₹500 Off on
          Two-WheelersT&C
        </Typography>
        <Typography>
          <LocalOfferIcon />
          Partner OfferBuy this product and get upto ₹250 off on Flipkart
          FurnitureKnow More
        </Typography>
        <Typography>
          <LocalOfferIcon />
          Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all
          productsT&C
        </Typography>
        <Typography>
          <LocalOfferIcon />
          Special PriceGet extra 14% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          <LocalOfferIcon />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <LocalOfferIcon />
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999T&C
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductDetail;
