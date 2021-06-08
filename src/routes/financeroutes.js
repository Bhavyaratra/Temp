var express = require('express');
var router = express.Router();
var finance = require('../models/finance');
var employee = require('../models/employee');
var user = require('../models/user');
var address = require('../models/address');
var contact = require('../models/contact');
var personal = require('../models/personal');
var mongoose = require('mongoose');


router.post('/saveFinance',async function(req,res){
    var newUser = new user({
        Name : req.body.Name,
        Email : req.body.Email,
        Password : req.body.Password
    });
    var newEmployee = new employee({
        Referal : req.body.Referal
    });
    var newPersonal = new personal({
        Gender : req.body.Gender,
        City : req.body.City,
        Mobile : req.body.Mobile
    });
    var newAddress = new address({
        Address : req.body.Address
    });
    var newContact = new contact({
        Contact : req.body.Contact
    });

    await newPersonal.save();
    await newAddress.save();
    await newContact.save();

    newEmployee.Personal = newPersonal._id;
    newUser.Personal = newPersonal._id;
    newUser.Address = newAddress._id;
    newUser.Contact = newContact._id;

    await newEmployee.save();
    await newUser.save();

    var newFinance = new finance;
        newFinance.User = newUser._id,
        newFinance.Employee = newEmployee._id

    newFinance.save(function(err){
        if(err)
            console.log(err);
        res.send("Data Saved");

    })

});


router.get('/getFinance',function(req,res){
    finance.find().populate({path:'User',model:'User',populate:[{path:'Personal',model:'Personal'},{path:'Address',model:'Address'},{path:'Contact',model:'Contact'}]}).populate({path:'Employee',model:'Employee',populate:{path:'Personal',model:'Personal'}}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err.message);
        console.log('Error occured')
    })
});


module.exports = router;


