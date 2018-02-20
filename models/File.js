const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  url: { type: String, required: true },
  filetype: { type: String, required: true },
  filename: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
