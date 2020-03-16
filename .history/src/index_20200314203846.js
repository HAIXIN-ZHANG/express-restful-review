const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());

app.use("/v1", routes)

app.listen(3000, () => {
  console.log("listening on 3000");
});
