import express from "express";
import { authMiddleware } from "../middleware/UserMiddleware.js";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
