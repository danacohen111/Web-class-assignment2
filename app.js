const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const connectionString = process.env.DB_CONNECT;

const mongoose = require("mongoose");
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoute = require("./routes/posts_route");
const commentsRoute = require("./routes/comments_route");
app.use("/post", postsRoute);
app.use('/commentS', commentsRoute);  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
