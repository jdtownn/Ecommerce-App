import express from 'express';
import dotenv from "dotenv";
import router from './routes/product.route.js';
import { connectDB } from "./config/db.js";
import multer from 'multer';
import path from "path"
import cors from "cors"

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();



app.use(cors())


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})

app.use(express.json());
app.use("/api/products", router);


app.listen(PORT, () => {
    console.log("Server is starting at: " + PORT)
    connectDB();  // Connect to MongoDB
});




// 