import React from "react";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

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
    width: "100%",
  });
  const RightContainer = styled(Grid)({
    marginTop: "50px",
  });

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);

  console.log(product);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer
            style={{ marginLeft: 30, minWidth: "60%" }}
            item
            lg={4}
            md={4}
            sm={8}
            xs={12}
          >
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
