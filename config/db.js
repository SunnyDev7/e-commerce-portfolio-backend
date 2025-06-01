const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.Mongo_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    })

    console.log("MongoDB Database Connected!");
};

module.exports = connectDB;