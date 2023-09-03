const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//bring in routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

//app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes middleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//db
mongoose
  .connect(process.env.DATABASE_CLOUD, {}) // Mongoose 6.0 onwards assumes useNewUrlParser, useCreateIndex are true, useFindAndModify is false.
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));
