
1. formate
{
    key : value
}

// show dbs
2 .use schoolDB
show collections

3. insert

1.insertOne
2.insertMany

// db.students.insertOne({
//   name : 'Manu',
//   age:25,
//   city : 'Chennai'
// })

 db.students.find().pretty()

db.students.insertMany([
  {

	"name" : "anju",
	"age" : 24,
	"city" : "chennai",
	"gender" : "female"
},
  {

	"name" : "anju D",
	"age" : 27,
	"city" : "chennai",
	"gender" : "female"
}
  ])

  4. find -- query

  db.collection.find()
  db.collection.find().pretty()
  db.collections.find({age :25})
  db.collections.findOne({age :25})
  db.collections.findOne()

  5. comparison operator

  ==   $eq
  >    $gt
  >=    $gte
  <    $lt
  < =   $lte
  !=   $ne
  $in  value in array
  
db.students.find({age : {$gt : 24}}).pretty()

11/12/2025
<!-- Logical operators -->

&&   $and --  $and :[{age:24},{city: 'chennai'}]
||   $or  --   $or : [{},{}]





db.students.find({
  $and : [{age :{$gt : 23}},{city : 'chennai'}]
}).pretty()


db.students.find({
  $or : [{age : 23},{name:'Ramu B'}]
})

7. update doc

updateOne()
updateMany()
findOneAndUpdate()
findAndUpdate()
$set: {city: ' Trichy'}
   
8. delete doc 

deleteOne
deleteMany

9. Regex

$regex

1. $regex : 'A'
2. $regex : '^A'
3. $regex : 'A$'
4. $regex : 'A' {$options: 'i'}

  
  db.students.deleteOne(
)
  db.students.find({
    city : { $regex: "^C" ,$options : 'i'}
  }
  )

12/12/2025

Aggregate  - operations
$match 
$group
<!-- $sum -->
$sort
$project

db.students.aggregate(
  [
    {
      $match :  {city :'chennai'}
    },

  ]
)


<!-- code -->
// show dbs
use schoolDB1
db.createCollection('students')
show collections

db.students.insertOne(
  {
    name : 'Manu',
    age : 23,
    city : 'Chennai'
  }
  )
  
  // db.students.find().pretty()
  
  
db.students.insertMany(
[
  {
          name : 'Kavya B',
  age : 23,
  city :'chennai'
      },
            {
          name : 'Balu B',
  age : 25,
  city :'chennai'
      },
            {
          name : 'Ramu B',
  age : 24,
  city :'Cochi'
      },
            {
          name : 'Sonu B',
  age : 26,
  city :'chennai'
      }
  ]
  )

//   db.students.find().pretty()
  // db.students.findOne({age: 25}).pretty()
  // db.students.find({age: {$gt : 25}}).pretty()
   
  // db.students.find({$and:[{city :'chennai'},{age : {$lte : 24}}]})
  
  // db.students.find({
  //   $or : [{  city :'Cochi'},{  age : 23}]
  // })
   
//    db.students.aggregate(
//   [
//     {

//       $group : {_id : "$age", total : {$sum : 1}}
//     }
    
    
//   ]
// )

//    db.students.aggregate(
//   [
//     {

//       $group : {_id : "$age", total : {$avg : 1}}
//     }
    
    
//   ]
// )

   db.students.aggregate(
  [
       {
      $match :  {city :'chennai'}
    },
    // {

    //   $group : {_id : "$age", count : {$sum : 1}}
    // }
    {
        $sort :{age : -1}
    },
    {

    $project : {name : 1, _id : 0}
    }
    
  ]
)
  
mongoose queries
1.findById()
2.findByIdAndUpdate
3.findByIdAndDelete
