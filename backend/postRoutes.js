const express = require('express')
const postRoutes = express.Router()
const database = require('./connect')
const ObjectId = require('mongodb').ObjectId;

postRoutes.route("/posts").get(async(req,res)=>{
    let db = database.getDb()
    let data = await db.collection("posts").find({}).toArray()
    if(data.length > 0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

postRoutes.route("/posts/:id").get(async(req,res)=>{
    let db = database.getDb()
    let data = await db.collection("posts").findOne({_id: new ObjectId(req.params.id)})
    if(Object.keys(data).length > 0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

postRoutes.route("/posts").post(async(req,res)=>{
    let db = database.getDb()
    let mognoObject = {
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        author:req.body.author,
        dateCreated:req.body.dateCreated,
    }
    let data = await db.collection("posts").insertOne(mognoObject)
    res.json(data)
})

postRoutes.route("/posts/:id").put(async(req,res)=>{
    let db = database.getDb()
    let mognoObject = {
        $set: {
            title:req.body.title,
            description:req.body.description,
            content:req.body.content,
            author:req.body.author,
            dateCreated:req.body.dateCreated,
        }
    }
    let data = await db.collection("posts").updateOne({_id: new ObjectId(req.params.id)}, mognoObject)
    res.json(data)
})

postRoutes.route("/posts/:id").delete(async(req,res)=>{
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)
})

module.exports = postRoutes;