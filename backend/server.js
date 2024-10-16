const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./postRoutes.js');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/posts", postRoutes);

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    });
