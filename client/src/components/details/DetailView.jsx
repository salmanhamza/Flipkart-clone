import React from "react";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled, Typography } from "@mui/material";
import ActionItems from "./ActionItems";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductsDetails);
  const Component = styled(Box)({
    background: "#f2f2f2",
  });
  const Container = styled(Grid)({
    background: "#fff",
    display: "flex",
  });
  const RightContainer = styled(Grid)({
    marginTop: "50px",
  });

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);

  console.log(product);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={4} md={4} sm={8} xs={12}>
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
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
