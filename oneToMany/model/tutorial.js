const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    name:String,
    author:String,
    image:Array,
    comments:[
       { type:mongoose.Schema.Types.ObjectId,
        ref:'comments'}
    ],
    userId:String,
    status:Boolean
});

const commentSchema =  new mongoose.Schema({
    username: String,
    text: String,
    createdAt: String
    // Need to send tutorial id also extra -- "userId"
  })

const createTutorialTable= new mongoose.model('Tutorials',tutorialSchema);
const createCommentsTable= new mongoose.model('comments',commentSchema);




module.exports={createTutorialTable,createCommentsTable}