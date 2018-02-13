var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  location: [Number, Number],

  socialProfiles: {
    type: Schema.Types.Mixed
  },
  description: {
    type: String
  },
  files: [
    {
      type: Schema.Types.ObjectId,
      ref: "File"
    }
  ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
