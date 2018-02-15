const db = require("../models");

// Defining methods for the UsersController
module.exports = {
<<<<<<< HEAD:controllers/usersController.js
  findAll: function (req, res) {
    db.User
=======
  findAll: function(req, res) {
    db.users
>>>>>>> master:controllers/booksControllerFORREFERENCE.js
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD:controllers/usersController.js
  
  findNear: function (req, res) {
    db.User.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: req.body.coords
          },
          //SET DISTANCE FOR $near QUERY HERE
          //Distance in meters
          $maxDistance: 1000,
          $minDistance: 0
        }
      }
    }).then(data => res.json(data))
  },
  findById: function (req, res) {
    db.User
=======
  findById: function(req, res) {
    db.users
>>>>>>> master:controllers/booksControllerFORREFERENCE.js
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD:controllers/usersController.js
  create: function (req, res) {
    db.User
=======
  create: function(req, res) {
    db.users
>>>>>>> master:controllers/booksControllerFORREFERENCE.js
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD:controllers/usersController.js
  update: function (req, res) {
    db.User
=======
  update: function(req, res) {
    db.users
>>>>>>> master:controllers/booksControllerFORREFERENCE.js
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD:controllers/usersController.js
  remove: function (req, res) {
    db.User
=======
  remove: function(req, res) {
    db.users
>>>>>>> master:controllers/booksControllerFORREFERENCE.js
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
