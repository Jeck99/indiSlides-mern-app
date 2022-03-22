const mongoose = require('mongoose');

const Slide= mongoose.Schema({
    link:{type:String,required:true},
    title:{type:String,required:true},
    description:String,
    tags:Array
}
,{timestemps:true});

module.exports = mongoose.model('Slide',Slide);