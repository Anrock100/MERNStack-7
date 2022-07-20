// Manage Database
/*
show dbs //display databases
admin     40.00 KiB
config    72.00 KiB
group-1   40.00 KiB
local    192.00 KiB
mern6      8.00 KiB
mern7      8.00 KiB
stack-1  220.00 KiB
*/

// use mydb //create new db and select
// switched to db mydb

// Remove database
// use mydb
// mydb > db.dropDatabase()
// show dbs

// Manage Collections (Table)
// Display All Collection
// show collections

// Create new collection
/*
mydb> db.persons.insert({'pid':1, 'name':'Raj Rai'})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("62d6a95240dee1cf2ebc05d8") }
}
*/

/*
mydb> db.persons.insertOne({'pid':2, 'name':'Aadarsha Shrestha'})
{
  acknowledged: true,
  insertedId: ObjectId("62d6aa5440dee1cf2ebc05d9")
}
*/
/*
mydb> db.persons.insertMany([
    {'pid':3, 'name':'Arjun Thapa', 'address':'Baneshwor'},
    {'pid':4, 'name':'Aarati Sharma', 'address':'Balaju', 'mobile':'1234567891'},
    {'pid':5, 'name':'Shiva', 'address':'Tinkune', 'email':'shiva@gmail.com'}
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62d6abf540dee1cf2ebc05dc"),
    '1': ObjectId("62d6abf540dee1cf2ebc05dd"),
    '2': ObjectId("62d6abf540dee1cf2ebc05de")
  }
}
*/

// Display Records
// db.persons.find() //all records

// Update Record
db.persons.updateOne(
    {_id:ObjectId('62d6abf540dee1cf2ebc05dd')},
    {$set:{name:'Rabin Thapa'}}
)

// Delete Record
db.persons.deleteOne({_id:ObjectId('62d6abf540dee1cf2ebc05dd')})






