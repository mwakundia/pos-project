const express = require('express');
const sequelize = require('./config/dbConfig'); // Ensure this path is correct
const app = express();
const productRoutes = require('./routes/productRoutes'); // Changed to match app.use
const orderRoutes = require('./routes/orderRoutes'); // Changed to match app.use
const userRoutes = require('./routes/userRoutes'); // Changed to match app.use
const cors = require('cors');
const jwtHelper = require('./helpers/jwtHelper');

const port = process.env.PORT || 3000;

require("dotenv").config();
// require("./models/dbConnect");

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.use('/api/product', productRoutes); // Ensure the routes match
app.use('/api/order', orderRoutes); // Ensure the routes match
app.use('/api/user', userRoutes); // Ensure the routes match

// Sync database and start server
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database synchronized');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
