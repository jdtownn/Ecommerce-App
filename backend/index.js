import express from 'express';
import dotenv from "dotenv";
import router from './routes/product.route.js';
import { connectDB } from "./config/db.js";
import multer from 'multer';
import path from "path"
import cors from "cors"
import mongoose from 'mongoose';
import { type } from 'os';
import { error } from 'console';
import jwt from "jsonwebtoken"

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


const User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

app.post('/signup', async (req, res) => {
    let check = await User.findOne({ email: req.body.email })
    if (check) {
        return res.status(400).json({
            success: false, errors: "Existing user found with same email address."
        })
    }

    let cart = {}
    for (let i = 0; i < 300; i++) {
        cart[i] = 0
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save()

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom')
    res.json({ success: true, token })

})


app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        const passMatch = req.body.password === user.password
        if (passMatch) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret-ecom')
            res.json({
                success: true,
                token
            })

        }
        else {
            res.json({
                success: false,
                error: "Wrong Password"
            })
        }
    }
    else {
        res.json({
            success: false,
            error: "Incorrect Email Address"
        })
    }
})

app.use(express.json());
app.use("/api/products", router);


app.listen(PORT, () => {
    console.log("Server is starting at: " + PORT)
    connectDB();  // Connect to MongoDB
});




// 