import express from 'express';
import dotenv from "dotenv";
import router from './routes/product.route.js';
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api/products", router);


app.listen(PORT, () => {
    console.log("Server is starting at: " + PORT)
    connectDB();  // Connect to MongoDB
});




// 