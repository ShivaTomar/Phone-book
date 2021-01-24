require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')
const handleBars = require("hbs");
const path = require("./path.config");
const PhoneBookRoutes = require("./Routes/PhoneBook.routes");
const AccountRoute = require("./Controller/AccountController");
const cookieParser = require("cookie-parser");
require('./DataBase/_Connection');

const app = express();
const PORT = process.env.PORT || 4000;

app.set("views", path.viewsPath);
app.set("view engine", "hbs");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/PhoneBook", PhoneBookRoutes);
app.use("/PhoneBook/Account", AccountRoute);
app.use(express.static(path.staticPath));
handleBars.registerPartials(path.partialsPath);

app.listen(PORT, (res, req) => {
  console.log(`server is up and running at ${PORT}`);
});