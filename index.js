const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model");
const ProductRoute = require("./route/product.route");

app.get("/", (req, res)=>{
    res.send("Hello world from server");
});

// middleware
app.use(express.json());

// Route
app.use('/api/products', ProductRoute);


// Database connection
mongoose.connect("mongodb+srv://bahati:14YNvZuTfHCelcGU@backend.pakqckf.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backend")
.then(()=> {
    console.log("Database connected");
    app.listen(3000, ()=> console.log("Server is running"));
}).catch(()=> console.log("Database not connected"))