
// require dependencies
const express = require('express');
const router = express.Router();
const db = require("../models/index");
const { ensureAuthenticated } = require('../config/auth');



// api routes
router.get('/books', (req, res) => {
console.log("user LOGGED")
  db.User.findOne({})
  .populate("books")
  .then(data => {

   console.log(data.books[0].description)

     
     res.json(data.books)
  })
  .catch(err => res.status(422).json(err))
});



router.post("/books", ensureAuthenticated, (req, res) => {
  console.log(req.body)
  db.Library.create(req.body)
  .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)
  })
  .catch(err => res.status(422).json(err))}
);



router.get("/books/:id", ensureAuthenticated, (req, res) => 
  db.Library.findById(req.params.id)
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err))
);



router.put("/books/:id", ensureAuthenticated, (req, res) => 
  db.Library.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbModel => console.log(dbModel) && res.json(dbModel))
  .catch(err => console.log(err) && res.status(422).json(err))
);



router.delete("/books/:id", ensureAuthenticated, (req, res) => 
  db.Library.findById({ _id: req.params.id })
  .then(dbModel => dbModel.deleteOne())
  .then(dbModel => console.log("book deleted") && res.json(dbModel))
  .catch(err => res.status(422).json(err))
);



module.exports = router;
