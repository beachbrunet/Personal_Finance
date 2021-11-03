// to run locally
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, " "));
});

app.listen(port, () => {
  console.log("Server is up!");
});

// // code for mongo DB
// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // added from 08 example -- middleware
// app.use(logger("dev"));
// // read about logger and morgan
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// // MongoDB connection
// // const db = require("./models");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
// // link routes
// app.use(require("./routes/apiRoutes.js"));
// app.use(require("./routes/htmlRoutes.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
