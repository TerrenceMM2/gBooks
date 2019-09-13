require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gbooks";
const routes = require("./routes/index.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true }, );

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
