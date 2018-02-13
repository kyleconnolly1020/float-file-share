const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  url: { type: String, required: true },
  filetype: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
