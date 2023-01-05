import { Box, styled, Typography } from "@mui/material";

import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)({
  padding: "12px 8px",
  textAlign: "center",
});

const Text = styled(Typography)({
  fontWeight: "600",
  fontSize: "14px",
});

const HomeBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="products" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default HomeBar;
