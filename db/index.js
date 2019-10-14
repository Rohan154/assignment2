const mysql=require('mysql');

//database connection
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"movies"
})

//connecting the databse
con.connect((err)=>{
    if(err){
        throw err;
    }
    else
    console.log(" database is connected");
})


let  moviesdb={};

moviesdb.all=()=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT * FROM showsRating',(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
moviesdb.one=(movieid)=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT * FROM showsRating WHERE id=?',[movieid],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

//add a new movies record



moviesdb.two=(movieName,movieYear,movieRating)=>{
    return new Promise((resolve,reject)=>{
        con.query("INSERT INTO showsRating(name,year,rating) value(?,?,?)",[movieName,movieYear,movieRating],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}


//updating a movies data
moviesdb.three=(movieName,movieYear,movieRating,movieid)=>{
    return new Promise((resolve,reject)=>{
        con.query("UPDATE showsRating SET name= ?,year= ?,rating= ? WHERE id=?",[movieName,movieYear,movieRating,movieid],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        })
    })
}



moviesdb.four=(movieid)=>{
    return new Promise((resolve,reject)=>{
        con.query("DELETE FROM showsRating WHERE id=?",[movieid],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        })
    })
}



module.exports=moviesdb;
