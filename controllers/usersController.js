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
      .populate("files")
      .then(data => res.json(data))
  },
  
  addFile: function (req, res) {
    console.log(req.body);
    db.File
      .create({
        "url": req.body.url, 
        "filetype": req.body.filetype
      })
      .then(data => {
        return db.User.findOneAndUpdate({ "username": req.body.username }, { $push: { files: data._id } }, { new: true });
      })
      .catch( error => {
        console.log(error);
      });
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
          $maxDistance: 1000000,
          $minDistance: 0
        }
      }
    }).populate("files")
    .then(data => res.json(data))
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
