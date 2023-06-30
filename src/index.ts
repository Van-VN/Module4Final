import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routers/student.router";

const app = express();
const port = 8000;
const db_url = "mongodb://127.0.0.1:27017";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

mongoose
  .connect(db_url)
  .then(() => console.log(`Database connected successfully!`))
  .catch((err) => console.log(err.message));

app.use(studentRouter);

app.listen(port, () => {
  console.log(`Server connected at http://localhost:${port}`);
});
