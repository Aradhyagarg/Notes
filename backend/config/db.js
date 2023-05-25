const mongoose = require('mongoose');

const connectdb = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`successfully connected to database`);
    }catch(error){
        console.log(`${error.message}`);
    }
}

module.exports = connectdb;