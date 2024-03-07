import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// parei na parte 4 do guia do curso da angela
// ver documentação do axios
// joke url https://v2.jokeapi.dev/joke/Any

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { hello: "Sua mãe é minha" });
});

app.listen(port, () => {
  console.log("Server running on port ", port);
});
