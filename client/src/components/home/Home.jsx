import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import HomeBar from "./HomeBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import RightSideAd from "./RightSideAd";
import MidScreenBanner from "./MidScreenBanner";

const Component = styled(Box)({
  padding: "10px",
  background: "#f2f2f2",
});

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <HomeBar />
      <Component>
        <Banner />
        <RightSideAd products={products} title="Deal of the Day" timer={true} />
        <MidScreenBanner />
        <Slide products={products} title="Trending offers" timer={false} />
        <Slide products={products} title="Recommended Products" timer={false} />
        <Slide products={products} title="Accessories" timer={false} />
        <Slide products={products} title="Summer Collection" timer={false} />
        <Slide products={products} title="Furniture Items" timer={false} />
        <Slide products={products} title="Men's Products" timer={false} />
      </Component>
    </>
  );
};

export default Home;
