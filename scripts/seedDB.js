const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/floatusers", {
  useMongoClient: true
});

/*
{"_id":{"$oid":"55cba2476c522cafdb053add"},"location":{"coordinates":,"type":"Point"},"name":"Morris Park Bake Shop"}
{"_id":{"$oid":"55cba2476c522cafdb053ade"},"location":{"coordinates":,"type":"Point"},"name":"Wendy'S"}
{"_id":{"$oid":"55cba2476c522cafdb053adf"},"location":{"coordinates":,"type":"Point"},"name":"Riviera Caterer"}
{"_id":{"$oid":"55cba2476c522cafdb053ae0"},"location":{"coordinates":type":"Point"},"name":"Tov Kosher Kitchen"}
{"_id":{"$oid":"55cba2476c522cafdb053ae1"},"location":{"coordinates":,"type":"Point"},"name":"Brunos On The Boulevard"}
{"_id":{"$oid":"55cba2476c522cafdb053ae2"},"location":{"coordinates":,"type":"Point"},"name":"Dj Reynolds Pub And Restaurant"}
{"_id":{"$oid":"55cba2476c522cafdb053ae3"},"location":{"coordinates":,"type":"Point"},"name":"Wilken'S Fine Food"}
{"_id":{"$oid":"55cba2476c522cafdb053ae4"},"location":{"coordinates":,"type":"Point"},"name":"Regina Caterers"}
{"_id":{"$oid":"55cba2476c522cafdb053ae5"},"location":{"coordinates":[-73.9482609,40.6408271],"type":"Point"},"name":"Taste The Tropics Ice Cream"}
{"_id":{"$oid":"55cba2476c522cafdb053ae6"},"location":{"coordinates":[-74.1377286,40.6119572],"type":"Point"},"name":"Kosher Island"}
{"_id":{"$oid":"55cba2476c522cafdb053ae7"},"location":{"coordinates":[-73.8786113,40.8502883],"type":"Point"},"name":"Wild Asia"}
{"_id":{"$oid":"55cba2476c522cafdb053ae8"},"location":{"coordinates":[-73.9973325,40.61174889999999],"type":"Point"},"name":"C \u0026 C Catering Service"}
{"_id":{"$oid":"55cba2476c522cafdb053ae9"},"location":{"coordinates":[-73.96926909999999,40.7685235],"type":"Point"},"name":"1 East 66Th Street Kitchen"}
{"_id":{"$oid":"55cba2476c522cafdb053aea"},"location":{"coordinates":[-73.871194,40.6730975],"type":"Point"},"name":"May May Kitchen"}
{"_id":{"$oid":"55cba2476c522cafdb053aeb"},"location":{"coordinates":[-73.9653967,40.6064339],"type":"Point"},"name":"Seuda Foods"}
{"_id":{"$oid":"55cba2476c522cafdb053aec"},"location":{"coordinates":[-73.97822040000001,40.6435254],"type":"Point"},"name":"Carvel Ice Cream"}
{"_id":{"$oid":"55cba2476c522cafdb053aed"},"location":{"coordinates":[-73.7032601,40.7386417],"type":"Point"},"name":"Carvel Ice Cream"}
{"_id":{"$oid":"55cba2476c522cafdb053aee"},"location":{"coordinates":[-74.0259567,40.6353674],"type":"Point"},"name":"Nordic Delicacies"}
{"_id":{"$oid":"55cba2476c522cafdb053aef"},"location":{"coordinates":[-73.9829239,40.6580753],"type":"Point"},"name":"The Movable Feast"}
*/

const userSeed = [
  {
    username: "bharloe",
    location: [-73.856077, 40.848447],
    socialProfiles: {
      facebook: "facebook.com/ben",
      instagram: "benharloe"
    },
    files: {
      pdf: "pdf_url",
      audiofile: "audio_url"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "kyleconnolly",
    location: [-73.961704, 40.662942],
    socialProfiles: {
      facebook: "facebook.com/kyle",
      instagram: "kyle"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "johnm",
    location: [-73.98241999999999, 40.579505],
    socialProfiles: {
      facebook: "facebook.com/john"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "kevin",
    location: [-73.8601152, 40.7311739],
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
    location: [-73.8803827, 40.7643124],
    socialProfiles: {
      snapchat: "clark",
      linkedin: "clarkphan"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "TheTravMan",
    location: [-73.98513559999999, 40.7676919],
    socialProfiles: {
      snapchat: "Travis",
      linkedin: "Travis"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "David",
    location: [-73.9068506, 40.6199034],
    socialProfiles: {
      snapchat: "David",
      linkedin: "David"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    username: "johnd",
    location: [-74.00528899999999, 40.628886],
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
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
