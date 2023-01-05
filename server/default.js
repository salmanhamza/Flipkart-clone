import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const defaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data saved succesfully");
  } catch (error) {
    console.log("error while inserting data", error.message);
  }
};

export default defaultData;
