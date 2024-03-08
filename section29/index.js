import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// parei na parte 4 do guia do curso da angela
// ver documentação do axios
// joke url https://v2.jokeapi.dev/joke/Any

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=single"
    );
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { joke: result.joke });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log("Server running on port ", port);
});
