//connect mongo and express

var mongoose = require('mongoose');
var config=require('../config');

const mongoConfig= async()=>{
    const connection = await mongoose.connect(config.databaseurl,{
        useNewUrlParser: true
    },()=>{
        console.log("connected to db");
        return connection.db;
    },
    )
}
module.exports=mongoConfig;