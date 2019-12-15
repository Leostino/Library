// require collection

// const db = require("../models/index");

// Defining methods for the pesaController

module.exports = {
  
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .populate("books")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Library
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log("creating", req.body)
    db.Library
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    // console.log("creating", req.body)
    db.User
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("updating",req.params.id, req.body)
    db.Library
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => console.log(dbModel) || res.json(dbModel))
      .catch(err => console.log(err) || res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Library
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};