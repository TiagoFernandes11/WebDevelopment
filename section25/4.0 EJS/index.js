import express from "express";
import morgan, { format } from "morgan";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
