const express = require('express');
// const ObjectID = require('mongodb').ObjectId;

// This function will hold all the routing functionality for the database, and will be used in server.js
const newRouter = function (collection) {

  const router = express.Router();
  
  // Function for catching errors, this is to keep the code DRY
  const errorCatcher = function(inputError){
    console.error(inputError);
    res.status(500)
    res.json({ status: 500, error: inputError })
  }
  
  // Route for getting all client data
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => errorCatcher(err));
  });


 //reseting the daily limit per day
 var count=0;
 var todayDate = new Date().getDate();
 setInterval(() => {
   let updatedDate = new Date().getDate();
   if (todayDate !== updatedDate) {
    count=0;
     todayDate = updatedDate;
   }
 }, 1000);


 // Route for creating new client
  router.post('/', (req, res) => {
    const newData = req.body;
    if(count<5){
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => errorCatcher(err));

    count=count+1;
  }
  else{
    return res.status(500).send({error:count});
   
  }
  });

  return router;

};

module.exports = newRouter;