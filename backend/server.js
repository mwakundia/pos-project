const express = require('express');
const sequelize = require('./config/dbConfig'); // Ensure this path is correct
const createError = require('http-errors');
const app = express();
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
// app.use(cors());

// Define your routes
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/user', userRoutes);

// Handling 404 error
app.use(async (req, res, next) => {
    next(createError.NotFound());
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.status === 401) {
        res.status(401).send({
            error: {
                status: 401,
                message: "Unauthorized: Invalid username or password"
            }
        });
    } else {
        res.status(err.status || 500).send({
            error: {
                status: err.status || 500,
                message: err.message || "Internal Server Error"
            }
        });
    }
});

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
