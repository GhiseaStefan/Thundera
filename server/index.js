require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./config/database');

const categoryRoute = require('./routes/categoryRoute');
const subcategoryRoute = require('./routes/subcategoryRoute');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const stripeRoute = require('./routes/stripeRoute');
const orderRoute = require('./routes/orderRoute');

const port = process.env.PORT || 8123;
const app = express();

connect();

app.use((req, res, next) => {
    if (req.originalUrl === '/stripe/webhook') {
        express.raw({ type: 'application/json' })(req, res, next);
    } else {
        express.json()(req, res, next);
    }
});
const corsOptions = { origin: process.env.NODE_ENV === 'production' ? 'https://' : 'http://localhost:3000' };
app.use(cors(corsOptions));
app.use(express.static('public'));

app.use('/category', categoryRoute);
app.use('/subcategory', subcategoryRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);
app.use('/stripe', stripeRoute);
app.use('/order', orderRoute);

app.listen(port, () => {
    console.log(`Environment: ${process.env.NODE_ENV === 'production' ? 'Production' : `Development - Port: ${port}`}`);
});