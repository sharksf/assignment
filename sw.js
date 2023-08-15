const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "proj-1"
mongoClient.connect(connectionUrl  , (error , res1) =>
{
if (error)
{
    return console.log('error has occured')
}
console.log('All prefect hahaha')
const db = res1.db(dbname)
///////////////////////////////////////////////////////////////////////
db.collection('assaya').insertOne({
      name:"Ahmed ased",
      age : 26,
      city: "giza"

} , (error , data) =>
{
if (error)
{
    return  console.log('error has occured insert data ')
}
//console.log(data.insertedId)
})

db.collection('assaya').insertOne({
    name:"Ahmed ibraham",
    age : 24,
    city: "giza elizaza"

} , (error , data) =>
{
if (error)
{
  return  console.log('error has occured insert data ')
}
console.log(data.insertedId)
})
////////////////////////////////////////////////
db.collection('assaya').insertMany(
    [
   {
    name:"waleed",
    age : 25,
    city :"alex"
    },
    {
     name:"Abdo",
     age : 25,
    city :"Paris"
     },
    {
     name:"Soliman",
     age :25,
     city :"London"
    },
    {
     name:"Yousef",
     age : 25,
     city :"Italy "
     } ,      
    {
    name:"Mongy",
    age : 25,
    city :"Brazil"
    },
    {
     name:"Ali",
     age : 62,
     city :"Cairo"
     },
     {
    name:"john",
     age : 15,
    city :"Rusia"
     },
     {
     name:"mike",
    age : 15,
    city :"New york"
    },
    {
    name:"zedan",
     age :76,
    city :"Sudan"
    },
    {
     name:"Islam",
     age : 35,
     city :"Aswan"
    }
] , (error , data) =>
{
if (error)
{
  return  console.log('error has occured insert data ')
}
console.log(data.insertedCount)
})
//////////////////////////////////////////////////////////////////////////////

db.collection('assaya').find({age: 25}).limit(3).toArray((error , assaya)=>
{
    if (error)
    {
      return  console.log('error has occured insert data ')
    }
    console.log(assaya)

})
/////////////////////////////////////////////////////////////////////////////////
db.collection('assaya').find({age: 25}).toArray((error , assaya)=>
{
    if (error)
    {
      return  console.log('error has occured insert data ')
    }
    console.log(assaya)

})
//////////////////////////////////////////////////////////////////////////////////
db.collection('assaya').updateOne({_id:mongodb.ObjectId("64dbc59b5c3ade5b9c0c385e")},{
$set:{ name: "osama" },
$inc:{ age: 20} 
   
}) 
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(data1.error)})
/////////////////////////////////////////////////////////////////////////////////////////////
db.collection('assaya').updateMany({},{
   
    $inc:{ age: 10} 
       
    }) 
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(data1.error)})
 //////////////////////////////////////////////////////////////////////////////////
 db.collection('assaya').deleteOne({_id:mongodb.ObjectId("64dbc59b5c3ade5b9c0c385e")})   
 .then((data1)=>{console.log(data1.deletedCount)})
 .catch((error)=>{console.log(data1.error)})   
///////////////////////////////////////////////////////////////////////////////////////
db.collection('assaya').deleteMany({})   
.then((data1)=>{console.log(data1.deletedCount)})
.catch((error)=>{console.log(data1.error)})  

})     