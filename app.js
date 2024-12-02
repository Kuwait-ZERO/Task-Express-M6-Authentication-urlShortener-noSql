const express = require("express");
const passport = require("passport");
const connectDb = require("./database");
const urlRoutes = require("./api/urls/urls.routes");
const userRoutes = require("./api/users/users.routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const app = express();
connectDb();
app.use(passport.initialize());
app.use(express.json());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use("/urls", urlRoutes);
app.use("/", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8002, () => {
  console.log("The application is running on localhost:8000");
});
