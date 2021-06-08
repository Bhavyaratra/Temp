var express=require('express');
var router=express.Router(); 
var product=require('../models/product');
var Gst=require('../models/GST');
var reviews=require('../models/reviews');
var rating=require('../models/rating');
var mongoose=require('mongoose');

//get
//post
//put
//delete

router.get('/',(req,res)=>{
    res.send("product routes");
})

router.get('/getproducts',async (req,res)=>{
    product.find()
    .populate("Ratings")
    .populate("Gsts")
    .populate("Reviews")
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err.message);
        console.log("ERROR : "+err.message);
    })
});

router.post('/saveproduct',async function(req,res){
    var newProduct = new product({
        Brand:req.body.Brand,
        Description:req.body.Description,
        Price:req.body.Price,
        Availability:req.body.Availability,
        Manufacturer:req.body.Manufacturer,
        Color:req.body.Color,
        Fit:req.body.Fit,
        Pattern:req.body.Pattern,
        Fabric:req.body.Fabric,     
    });

    var newRating = new rating({
        Rating:req.body.rating,
    })

    var newGst = new Gst({
        Gst:req.body.Gst,
    })

    var newReview = new reviews({
        Review:req.body.review
    })

    await newRating.save();
    await newGst.save();
    await newReview.save();

    newProduct.Ratings=newRating._id;
    newProduct.Gsts=newGst._id;
    newProduct.Reviews=newReview._id;

    newProduct.save(function(err){
        if(err){
            console.log("err save");
            console.log(err.message);
            res.json(err.message)
        }else{
        console.log("saved");
        res.json("saved")
        }
    })
    
})

module.exports=router;