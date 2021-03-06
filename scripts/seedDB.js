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
      "linkedin": "https://www.linkedin.com/in/benharloe/"
    },
    "image": "https://s3.amazonaws.com/floatfileshare/16508795_10210998047894714_9072515251964865789_n.jpg",
    "description": "I am a web developer in training! Check out my LinkedIn, resume, or say hi on Facebook"
  },
  {
    "auth0id": "auth0|5a8ddfbe5c679b178110893b",
    "username": "kyleconnolly",
    "location": {
      "coordinates": [-117.183268, 32.853431],
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/kyle",
      "instagram": "kyle"
    },
    "image": "https://floatfileshare.s3.amazonaws.com/8e6cf855-ebde-4906-b970-3d9e0898b897",
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
    "description": "My name is John and I'm a fullstack engineer!"
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
    "description": "Wassup I'm Kevin!"
  },
  {
    "auth0id": "auth0|5a9883dd5edad629808aee2d",
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
    "image": "https://floatfileshare.s3.amazonaws.com/48a39b70-4ce7-44d1-8f98-eeab9460db7c",
    "description": "Hello! I'm a rising sophomore studying math and computer science at the University of Calfiornia, San Diego"
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
    "description": "I'm TheTravMan! Wassup!"
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
    "description": "My name is David and I've got a cool beard!"
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
    "description": "Get your head out of the exercise!"
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


