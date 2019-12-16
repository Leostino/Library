
// require dependencies
const express = require('express');
const router = express.Router();
const db = require("../models/index");
const { ensureAuthenticated } = require('../config/auth');



// api routes
router.get('/books', ensureAuthenticated, (req, res) =>
  db.User.find({})
  .populate("books")
  .sort({ date: -1 })
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err))
);



router.post("/books", ensureAuthenticated, (req, res) => {
  console.log(req.body)
  db.Library.create(req.body)
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
  .then(dbModel => dbModel.remove())
  .then(dbModel => console.log("book deleted") && res.json(dbModel))
  .catch(err => res.status(422).json(err))
);



module.exports = router;
