import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>About Me</h1><p>Meu nome é Tiago</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>É isso ai</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
