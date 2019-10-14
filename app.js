// var validate=require('./validator/joi-apiValidation');
var movie=require('./routes/movies');
var express=require('express');
var app=express();

var bodyParser=require('body-parser');
var json=bodyParser.urlencoded();
app.use(json);
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerMoviesApi.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/validate',validate);  //requiring the validate variable through export
// app.post('/',validate,(req,res)=>{
//    console.log("checked");
// });

app.use('/movies',movie);


app.listen(3000,()=>{console.log("app is running")});