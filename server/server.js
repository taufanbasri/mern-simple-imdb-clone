require("dotenv").config();

const express = require("express");
const cors = require("cors");
const movieRoute = require("./routes/movies");
const dbConnect = require("./dbConnect");
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
