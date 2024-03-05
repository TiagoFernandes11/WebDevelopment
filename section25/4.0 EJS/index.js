import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import morgan, { format } from "morgan";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const currentDay = new Date().getDay(); //sexto e setimo dia final de semana

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", { currentDay: currentDay });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
