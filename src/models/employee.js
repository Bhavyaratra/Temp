var mongoose = require('mongoose');
 
const employeeSchema = new mongoose.Schema(
    {
        Personal:{
            type: mongoose.Types.ObjectId, 
            ref: 'Personal'
        },
        
        Referal:{type:String,
            index:true},
    },
    {
        timestamps:true
    }
 
);
 
module.exports = new mongoose.model('Employee', employeeSchema);
