import { Box, Button, Divider, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)({
  marginTop: "10px",
  background: "#fff",
});

const Deal = styled(Box)({
  padding: "15px 20px",
  display: "flex",
});
const Timer = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  alignItems: "center",
  color: "#7f7f7f",
});

const ViewAllButton = styled(Button)({
  marginLeft: "auto",
  backgroundColor: "#2874f0",
  borderRadius: "2px",
  fontSize: "13px",
  fontWeight: "600",
});

const Image = styled("img")({
  width: "auto",
  height: "150px",
});

const Text = styled(Typography)({
  fontSize: "14px",
  marginTop: "5px",
});

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours}:{minutes}:{seconds} Left
    </Box>
  );
};

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Component>
      <Deal>
        <Typography
          style={{
            fontWeight: 600,
            fontSize: 22,
            marginRight: 25,
          }}
        >
          {title}
        </Typography>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: "600", color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#7f7f7f" }}>{product.tagline}</Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
