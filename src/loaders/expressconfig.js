var express= require('express');
var path = require("path");
var cors=require('cors');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var productroute=require('../routes/productroutes');

var fs = express();
var app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//define routes
app.use('/',productroute);


module.exports=app;