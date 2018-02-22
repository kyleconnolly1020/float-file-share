const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/floatusers");

const userSeed = [
  {
    "auth0id": "auth0|5a83907af5c8213cb27bc941",
    "username": "bharloe",
    "location": {
      "coordinates": [-117.184242, 32.853822],
      "type": "Point"
    },
    "socialProfiles": {
      "instagram": "henbarloe",
      "linkedin": "https://www.linkedin.com/in/benharloe/"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163801.svg",
    "description": "I am a web developer in training! Check out my LinkedIn, resume, or say hi on Facebook"
  },
  {
    "auth0id": "2",
    "username": "kyleconnolly",
    "location": {
      "coordinates": [-117.183268, 32.853431],
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/kyle",
      "instagram": "kyle"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163837.svg",
    "description": "Just a cool 2D dude"
  },
  {
    "auth0id": "3",
    "username": "johnm",
    "location": {
      "coordinates": [-117.184637, 32.852760],
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/john"
    },
    "savedFiles": {
      "javascript": "javascript_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163814.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "auth0id": "4",
    "username": "kevin",
    "location": {
      "coordinates": [-117.188189, 32.854047],
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/ben",
      "snapchat": "kevinsemo",
      "linkedin": "kevinsemo"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163804.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "auth0id": "5",
    "username": "Clark",
    "location": {
      "coordinates": [-117.187062, 32.851830],
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "clark",
      "linkedin": "clarkphan",
      "twitter": "twitter.com/clarkphan"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163801.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "auth0id": "6",
    "username": "TheTravMan",
    "location": {
      "coordinates": [-117.204316, 32.854476],
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "Travis",
      "linkedin": "Travis"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163827.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "auth0id": "7",
    "username": "David",
    "location": {
      "coordinates": [-117.234294, 32.849433],
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "David",
      "linkedin": "David"
    },
    "image": "https://image.flaticon.com/icons/svg/145/145859.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "auth0id": "8",
    "username": "johnd",
    "location": {
      "coordinates": [-117.273001, 32.851099],
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "johnd",
      "linkedin": "johnd"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163834.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  }
];

const filesSeed = []

db.File.remove({}).then(() => db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    if (filesSeed.length > 0) {
    for (let i = 0; i < filesSeed.length; i++) {
      // Create a new Note in the db
      db.File.create(filesSeed[i].file)
        .then(function (dbFile) {
          return db.User.findOneAndUpdate({ "username": filesSeed[i].username }, { $push: { files: dbFile._id } }, { new: true });
        })
        .then(function (dbUser) {
          // If the File was updated successfully, log it
          if (i === filesSeed.length - 1) {
            console.log(i +" files inserted");
            process.exit(0);
          }
        })
        .catch(function (err) {
          // If an error occurs, log it
          console.log(err);
        });
      }
    } else {
      process.exit(0);
    }
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
);


