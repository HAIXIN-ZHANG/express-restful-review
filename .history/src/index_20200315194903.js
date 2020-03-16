require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.use("/v1", routes)

app.listen(PORT, () => {
  console.log (`listening on ${PORT}`);
});
