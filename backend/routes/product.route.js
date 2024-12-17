import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();


router.get("/getproduct", getProduct)

router.post("/addproduct", createProduct);

router.put("/:id", updateProduct)
router.delete("/", deleteProduct)

export default router;

