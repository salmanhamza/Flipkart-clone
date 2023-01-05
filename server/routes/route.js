import express from "express";
import {
  getProducts,
  getProductDetails,
} from "../controller/productcontroller.js";
import { addSignup, userLogin } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/signup", addSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProductDetails);

export default router;
