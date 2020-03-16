const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

const posts = [];
let currentId = 1;

app.use("/v1", routes)

app.listen(3000, () => {
  console.log("listening on 3000");
});
