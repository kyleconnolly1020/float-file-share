const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  searchUsername: function (req, res) {
    db.User
      .find({ username: {'$regex': req.params.username, $options:'i'}})
      .then(data => res.json(data))
  },
  
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
          $maxDistance: 50000,
          $minDistance: 0
        }
      }
    }).then(data => res.json(data))
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
