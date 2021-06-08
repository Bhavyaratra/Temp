var mongoose=require('mongoose');

const studentSchema=new mongoose.Schema(
    {
        Name:{
            type: String,       //is not name present
            required: [true,"Student name is required"],
            index:true // indexing for fast search
        },
        Class:{
            type: String,       //is not name present
            required: [true,"Student class is required"],
            index:true // indexing for fast search
        },
        Section:{
            type: String,       //is not name present
            required: [true,"Student name is required"],
            index:true // indexing for fast search
        },
        Subjectone:{
            type: String,       //is not name present
            required: [true,"Student subjectone is required"],
            index:true // indexing for fast search
        },
        Subjecttwo:{
            type: String,       //is not name present
            required: [true,"Student subjecttwo is required"],
            index:true // indexing for fast search
        },
        Subjectthree:{
            type: String,       //is not name present
            required: [true,"Student subjectthree is required"],
            index:true // indexing for fast search
        }                        

    },
    {
        timestamps:true
    }
)

module.exports = new mongoose.model('Student',studentSchema);

