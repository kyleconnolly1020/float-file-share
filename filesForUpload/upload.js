const express = require('express');
// https://www.npmjs.com/package/express-fileupload 
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// default options
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "test.html"));
});

app.post('/upload', function (req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // input correct path to file
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('✅ File uploaded!');
  });
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);