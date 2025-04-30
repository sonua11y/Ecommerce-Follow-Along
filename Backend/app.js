const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const path = require('path');

const cookieParser = require("cookie-parser");


// Built-in middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));

// Configue CORS to allow requests from React frontend
app.use(cors({
  origin: "http://localhost:5173", //updation required if frontend is hosted somewhere else
  credentials: true, //Enable if you need to send cookies or authentication headers
}));

//Import Routes
const user = require('./controller/user');
const product = require('./controller/product');
const orders = require('./controller/order');


//Server static files for uplops and products
app.use('/products', express.static(path.join(__dirname, 'products')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Route Handling
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use("/api/v2/orders",orders);

//Error Handling Middleware
app.use(errorHandler);
module.exports = app;
