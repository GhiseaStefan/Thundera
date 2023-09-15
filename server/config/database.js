const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection established');
    } catch (err) {
        console.error('Database connection failed:\n', err);
    }
};

module.exports = connect;