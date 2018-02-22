var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  auth0id : {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  files: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the File model
      ref: "File"
    }
  ],
  socialProfiles: {
    type: Schema.Types.Mixed
  },
  description: {
    type: String
  },
  savedFiles: {
    type: Schema.Types.Mixed
  }
});

UserSchema.index({ location: '2dsphere' });

var User = mongoose.model("User", UserSchema);

module.exports = User;
