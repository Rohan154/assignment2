var express=require('express');
var apiRouter=express.Router();
 
//require the mysql database
var mysql=require('mysql');    

//import the db folder
const db=require('../db/index');




//retrive all list of movies form GET method
apiRouter.get('/',async(req,res,next)=>{
    try{
        let results=await db.all();
        res.json(results);
        console.log(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);   //sending status:'internal server error'
    }
})

//retrieving the details of given id
apiRouter.get('/:movieid',async(req,res,next)=>{
    try{
        let results=await db.one(req.params.movieid);
        res.json(results);
        console.log(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500),()=>{
            console.log("internal server error");
        };
    }
})

//adding a new movies record in the databse

apiRouter.post('/add-movie',async(req,res,next)=>{


    try{
        let results=await db.two(req.body.movieName,req.body.movieYear,req.body.movieRating);
        res.json(results);
        console.log(results);
        console.log("movie name:"+req.body.movieName+", movie year:"+req.body.movieYear+", movie Rating:"+req.body.movieRating+" added successfully");
    }catch(e){
        console.log(e);
       
        //status=400:'Bad request'
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})



//updating the existed movies record
apiRouter.put('/update-movie',async(req,res,next)=>{

    try{
        let results=await db.three(req.body.movieName,req.body.movieYear,req.body.movieRating,req.body.movieid);
        res.json(results);
        console.log(results);
       console.log("movie id "+req.body.movieid+" updated successfully");
    }catch(e){
        console.log(e);
       
        //status=400:'Bad request'
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})

//deleting the inserted movies record
apiRouter.delete('/delete-movie',async(req,res,next)=>{

    try{
        let results=await db.four(req.body.movieid);
        res.json(results);
        console.log(results);
       console.log("movie id "+ req.body.movieid +" deleted successfully");
    }catch(e){
        console.log(e);
       
        //status=400:'Bad request'
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})










//Routes will go here
module.exports=apiRouter;