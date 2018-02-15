var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
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
  socialProfiles: {
    type: Schema.Types.Mixed
  },
  description: {
    type: String
  },
  files:[
    {
      type: Schema.Types.ObjectId,
      ref: "File"
    }
  ]
});

UserSchema.index({ location: '2dsphere' });

var User = mongoose.model("User", UserSchema);

module.exports = User;
