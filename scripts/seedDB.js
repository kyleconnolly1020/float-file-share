const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/floatusers");

const userSeed = [
  {
    username: "bharloe",

    location: {
      coordinates: [-117.184242, 32.853822], 
      type: "Point"
    },
    
    socialProfiles: {
      facebook: "facebook.com/ben",
      instagram: "benharloe"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  }
  ,
  {
    username: "kyleconnolly",
    location: {
      coordinates: [-117.183268, 32.853431], 
      type: "Point"
    },
    socialProfiles: {
      facebook: "facebook.com/kyle",
      instagram: "kyle"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "johnm",
    location: {
      coordinates: [-117.184637, 32.852760], 
      type: "Point"
    },
    socialProfiles: {
      facebook: "facebook.com/john"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "kevin",
    location: {
      coordinates: [-117.188189, 32.854047], 
      type: "Point"
    },
    socialProfiles: {
      facebook: "facebook.com/ben",
      snapchat: "kevinsemo",
      linkedin: "kevinsemo"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "Clark",
    location: {
      coordinates: [-117.187062, 32.851830], 
      type: "Point"
    },
    socialProfiles: {
      snapchat: "clark",
      linkedin: "clarkphan"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "TheTravMan",
    location: {
      coordinates: [-117.204316, 32.854476], 
      type: "Point"
    },
    socialProfiles: {
      snapchat: "Travis",
      linkedin: "Travis"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "David",
    location: {
      coordinates: [-117.234294, 32.849433] , 
      type: "Point"
    },
    socialProfiles: {
      snapchat: "David",
      linkedin: "David"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "johnd",
    location: {
      coordinates: [-117.273001, 32.851099], 
      type: "Point"
    },
    socialProfiles: {
      snapchat: "johnd",
      linkedin: "johnd"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });