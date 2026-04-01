// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Note = require('./models/Note');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://rahulmma:rahul12345@cluster0.lz0k0vf.mongodb.net/notesdb').then(function(){
//     app.get('/', function(req,res){
//         res.json({
//             message: "API is Working !"
//         });
//     });

//     const noteRouter = require('./routes/Note');
//     app.use('/notes',noteRouter);

// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT,()=>{
//     console.log("Server running at PORT: " + PORT);
// });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://andre_db_user:kvMRUGOJw243xxLD@cluster0.bmaennp.mongodb.net/notesdb?appName=Cluster0";

mongoose.connect(mongoUri).then(function (req, res) {
  app.get("/", function (req, res) {
    res.json({
      message: "API is working",
    });
  });

  const noteRouter = require("./routes/Note");
  app.use("/notes", noteRouter);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
