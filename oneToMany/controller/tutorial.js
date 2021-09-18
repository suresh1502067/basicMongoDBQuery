const {createTutorialTable,createCommentsTable} = require('../model/tutorial');

module.exports={
    createTutorial:async function (req,res) {
        try{
           let newTutorial= await createTutorialTable(req.body.data).save()
           res.send(newTutorial)
        }catch(err){
            res.send(errr)
        }
    },
    createComments:async function(req,res) {
        try{
            const {tutorialId='',...rest}=req.body.data
           let newComments= await createCommentsTable(rest).save()
            await createTutorialTable.
           findByIdAndUpdate(tutorialId,{
               $push:{
                comments:newComments._id
               }
           })
           res.send(newComments)
        }catch(err){
            res.send(errr)
        }
    },
    getTutorialDetail:async function (req,res) {
        try{
            console.log("req",req.query.id)
            const userId=req.query.id
            let tutorialDetails= await createTutorialTable.find({userId:userId}).
            populate('comments',"-_id -__v")
            res.send(tutorialDetails)
        }catch(err){
            res.send(err)
        }
    },
    testQuery:async function(req,res){
        try{
            console.log("req",req.body)
            const {data}=req.body
            // let updateAllData= await createTutorialTable.update({}, { "status":true }, { multi: true }) // update a new field in one collection.
            let updateAllData= await createTutorialTable.find({ "status":true }).limit(2)
            res.send(updateAllData)
        }catch(err){
            console.log(
                "err",err
            )
        }
    }
}