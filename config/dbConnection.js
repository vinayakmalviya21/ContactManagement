const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017');
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;