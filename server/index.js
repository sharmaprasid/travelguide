const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const DB = require("./connection/db");
const userRoutes = require("./routes/userRoutes");
const tourRoutes = require("./routes/tourRoutes");
const blogRoutes = require("./routes/blogRoutes");
dotenv.config();

DB();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
app.use("/user", userRoutes);
app.use("/tour", tourRoutes);
app.use("/blog", blogRoutes);
