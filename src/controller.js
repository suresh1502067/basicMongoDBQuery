const userModel = require("./model");

module.exports = {
  insertBulkUser: function (req, res) {
    userModel.insertMany(req.body.data, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  deleteUser:function(req,res) {
    console.log("request.body", req.query);
    userModel.deleteOne({_id:req.query.id}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  updateOne:function(req,res){
    console.log("reqq",req.body)
    userModel.updateOne({_id:'612fc9a5cf52c2ef36bbcb31'},req.body, {upsert: true},function (err,result) {
      
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  updateMany:function (req,res) {
    console.log('userid req',req.body)
    userModel.updateMany(
      { _id: { $in: req.body.userId } }, 
      { $set: { location: "kvp","processed":true } },{upsert:true},function (err,result) {
      if(err){
    
        res.send(err.toString())
      }else{
        res.send(result)
      }
    })
  }
};


