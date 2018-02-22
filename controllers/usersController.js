const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  searchUsername: function(req, res) {
    db.User.find({ username: { $regex: req.params.username, $options: "i" } })
      .populate("files")
      .then(data => res.json(data));
  },

  searchAuth: function(req, res) {
    db.User.find({ auth0id: req.params.auth0id }).then(data => res.json(data));
  },

  addFile: function(req, res) {
    console.log(req.body);
    db.File.create({
      url: req.body.url,
      filetype: req.body.filetype,
      filename: req.body.filename
    })
      .then(data => {
        return db.User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { files: data._id } },
          { new: true }
        );
      })
      .catch(error => {
        console.log(error);
      });
  },

  updateUser: function (req, res) {
    db.User
      .findOneAndUpdate({ "username": req.params.username }, { $set: req.body })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  findNear: function(req, res) {
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
    })
      .populate("files")
      .then(data => res.json(data));
  },

  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // updateLocation: function(req, res) {
  //   console.log(req.body);

  //   db.User.findOneAndUpdate({username: req.body.username}, { description: 'test' }).then(dbModel => res.json(dbModel))

  //   db.User.findOneAndUpdate(
  //     { "username": req.body.username },
  //     {"description": req.body.description}
  //   )
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
