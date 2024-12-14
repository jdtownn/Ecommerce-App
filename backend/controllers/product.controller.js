import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        console.log("All products found");
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        console.error("Error in getting products: ", err.message)
        res.status(500).json({ success: false, msg: "Server error" });
    }
}
export const createProduct = async (req, res) => {
    let products = await Product.find({})
    let id;
    if (products.length > 0) {
        let last_product_arr = products.slice(-1)
        let last_product = last_product_arr[0]
        id = last_product.id + 1
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,

    })
    await product.save()
    res.json({
        success: true,
        name: req.body.name,
    })
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct })


    } catch (error) {

        res.status(500).json({ success: false, msg: "Server error" });

    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid id" });
    }
    try {
        await Product.findByIdAndDelete(id);
        console.log("Product deleted successfully");
        res.status(200).json({ success: true, msg: "Product deleted successfully" })
    }
    catch (err) {
        res.status(500).json({ success: false, msg: "Server Error" });
    }
}
