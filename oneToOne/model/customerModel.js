const mongoose = require('mongoose');

const customerSchema= new mongoose.Schema({
    name:String,
    age:Number,
    phone:String,
    active:Boolean
})

const cardIdSchema= new mongoose.Schema({
   cardId:String,
   customer:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'customer'
   }
})

const customerTable = new mongoose.model('customer',customerSchema);
const customerCardIDTable = new mongoose.model('customerCardId',cardIdSchema);
module.exports= {customerTable,customerCardIDTable}